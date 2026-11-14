#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계, 국내 근거·글로벌 비교 칸과 출처 키(R10·R11), 경계 영역(R13),
// 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교"];
const BOUNDARY_AREAS = ["go-compliance-and-legal", "go-strategy", "go-accounting", "go-control", "go-finance", "go-valuation", "go-hr", "go-operations", "go-marketing", "go-scm", "go-security"];
const ALLOWED_HOSTS = ["go.kr", "kasb.or.kr", "krx.co.kr", "korea.kr", "ifrs.org", "efrag.org", "europa.eu", "ghgprotocol.org", "globalreporting.org", "oecd.org", "sec.gov", "ca.gov", "sciencebasedtargets.org", "tnfd.global", "iso.org", "unfccc.int", "fsb-tcfd.org", "ohchr.org", "iaasb.org"];

const usedKeys = new Set();
const boundaries = new Set();

function parseSources(text) {
  const problems = [];
  const keys = new Map();
  const sec = text.split(/^## 출처$/m)[1];
  if (!sec) return { keys, problems: ["「## 출처」 절 없음"] };
  for (const line of sec.split("\n")) {
    const m = line.match(/^- \[([KG]\d+)\] (.+)$/);
    if (!m) continue;
    const [, key, rest] = m;
    if (keys.has(key)) problems.push(`출처 ${key}: 중복`);
    keys.set(key, rest);
    const urls = [...rest.matchAll(/<(https:\/\/[^>]+)>/g)].map((u) => u[1]);
    if (!urls.length) problems.push(`출처 ${key}: <https://…> URL 없음`);
    for (const u of urls) {
      let host = "";
      try { host = new URL(u).hostname; } catch { problems.push(`출처 ${key}: URL 형식 오류`); continue; }
      if (!ALLOWED_HOSTS.some((d) => host === d || host.endsWith(`.${d}`))) problems.push(`출처 ${key}: 허용 목록 밖 도메인 ${host}`);
    }
    if (!/\(조회 20\d\d-\d\d-\d\d(, 변동)?\)\s*$/.test(rest)) problems.push(`출처 ${key}: 「(조회 YYYY-MM-DD[, 변동])」로 끝나지 않음`);
  }
  return { keys, problems };
}

function parseCurriculum(text) {
  const modules = new Map();
  const problems = [];
  const body = text.split(/^## 출처$/m)[0];
  if (/제\s?\d+\s?조/.test(body)) problems.push("지도 본문에 조문 번호(제N조) — 튜터가 세션 중 확인해 말한다");
  const blocks = body.split(/^### /m).slice(1);
  for (const block of blocks) {
    const head = block.split("\n")[0];
    const m = head.match(/^([ADCVGX]\d+) · (.+)$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    for (const name of ["국내 근거", "글로벌 비교"]) {
      const want = name === "국내 근거" ? /\[K\d+\]/ : /\[G\d+\]/;
      if (fields[name] && !want.test(fields[name])) problems.push(`${id}: 「${name}」에 출처 키 없음`);
      for (const k of (fields[name] || "").matchAll(/\[([KG]\d+)\]/g)) usedKeys.add(k[1]);
    }
    if (fields["경계·연결"]) for (const a of BOUNDARY_AREAS) if (new RegExp(`(^|[^a-z-])${a}(?![a-z-])`).test(fields["경계·연결"])) boundaries.add(a);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  return { modules, problems };
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/.*\.m?js$/;
  return files.filter((f) => /\.(html?|css|svg|png|jpe?g|gif|webp|avif|ico|bmp|tiff?)$/i.test(f) || (/\.[mc]?js$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(m[0])) hits.push(name);
  for (const line of text.split("\n")) if (/^( {4}|\t)/.test(line) && /<(!doctype|html|svg|style|canvas|script)\b/i.test(line)) { hits.push(name); break; }
  return hits;
}

function main() {
  const mapText = read("curriculum/map.md");
  const { modules, problems } = parseCurriculum(mapText);
  errors.push(...problems);
  const src = parseSources(mapText);
  errors.push(...src.problems);
  for (const k of usedKeys) if (!src.keys.has(k)) errors.push(`없는 출처 키 [${k}]`);
  for (const k of src.keys.keys()) if (!usedKeys.has(k)) errors.push(`쓰이지 않는 출처 [${k}]`);
  for (const a of BOUNDARY_AREAS) if (!boundaries.has(a)) errors.push(`경계·연결에 ${a} 없음`);
  if (modules.size === 0) errors.push("모듈을 찾지 못함");

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 출처 ${src.keys.size}개, 경계 ${boundaries.size}개 영역, 파일 ${files.length}개 검사`);
}

main();
