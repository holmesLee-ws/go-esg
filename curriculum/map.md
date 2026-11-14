# 커리큘럼 지도

큰 윤곽만 둔다. 강의 내용은 여기 없다. 튜터가 세션마다 학습자의 업무 맥락과 수준에 맞춰 조사하고 만든다.

- 기본 순서는 A → D → C → V → G → X다. D2는 C1을 선수로 두므로 D1 다음에 C1을 먼저 한다. 선수 관계만 지키면 학습자의 목표에 맞춰 순서를 바꿔도 된다. 예를 들어 거래처의 배출량 요청부터 급한 실무자는 A1 다음에 C1로 가도 된다.
- 시간이 적은 실무 관리자는 졸업 프로젝트까지 가는 최단 경로로 간다: A1 → A2 → A3 → D1 → C1 → D2 → C2 → C4 → V1 → V2 → G3 → X1. 나머지 모듈은 업무에 필요할 때 더한다.
- 목표 수준은 그 모듈을 마쳤다고 볼 최소 수준이다. 수준의 뜻은 [tutor/assessment.md](../tutor/assessment.md)에 있다.
- 「국내 근거」는 한국 법·제도·기준, 「글로벌 비교」는 비교 축이다. 대괄호 키는 아래 「출처」 목록을 가리킨다. 출처는 **조회일 기준**이다. 「변동」 표시 항목은 세션에서 단정하기 전에 다시 확인한다([tutor/sources.md](../tutor/sources.md)). 조문 번호는 이 지도에 쓰지 않는다.
- 「경계·연결」은 다른 go-* 워크스페이스가 깊게 다루는 주제다. 여기서는 지금 흐름에 필요한 만큼만 다룬다.
- 모듈 id는 진도 기록의 키다. 바꾸면 `learner/state.json`이 깨지므로, 고칠 때는 새 id를 만든다.
- `node tools/check.mjs`로 형식·선수 관계·출처 키를 검사한다(리포 관리자용).

## A · 기초와 전략

### A1 · ESG는 왜 회사의 일이 되었나
- 선수: 없음
- 핵심 질문: 투자자·규제기관·거래처·지역사회는 각각 무엇을 근거로 우리 회사에 ESG 정보를 요구하는가?
- 목표: Explain — 요구 주체별 근거(법령·공시 기준·계약·평가)와 그 요구가 회사에 닿는 경로를 설명한다.
- 만들어 볼 것: 우리 회사에 ESG 정보를 요구하는 주체와 근거 지도
- 국내 근거: 탄소중립기본법 [K1], 지속가능성 공시 제도화 방안 [K4], 공급망 대응 K-ESG 가이드라인 [K9]
- 글로벌 비교: IFRS S1의 목적(투자자 정보) [G1], GRI 보편 기준(영향 보고) [G6]

### A2 · 이해관계자와 중대성 평가
- 선수: A1
- 핵심 질문: 우리 회사에 「중요한」 ESG 주제는 누구의 관점에서, 어떤 기준으로 정하는가?
- 목표: Apply — 재무적 중대성과 영향 중대성을 구분해 학습자 회사의 중대 주제를 도출하고 근거를 남긴다.
- 만들어 볼 것: 중대성 평가표 초안(주제·근거·두 관점의 판단·이해관계자 의견 출처)
- 국내 근거: KSSB 지속가능성 공시기준 제1호 [K3]
- 글로벌 비교: ESRS의 이중 중대성 [G3], GRI 3 중대 주제 [G6]

### A3 · ESG 전략과 목표
- 선수: A2
- 핵심 질문: 중대 주제를 회사가 실제로 움직일 목표와 지표로 어떻게 바꾸는가?
- 목표: Evaluate — 후보 목표·KPI를 측정 가능성·통제 가능성·이해관계자 기대로 비교해 고른다.
- 만들어 볼 것: 중대 주제 3개의 목표·KPI·책임 부서 표
- 국내 근거: 2035 국가 온실가스 감축목표(NDC) [K2], 탄소중립기본법 [K1]
- 글로벌 비교: SBTi 기업 넷제로 기준 [G10], IFRS S2의 목표 공시 [G2]
- 경계·연결: 전사 전략·포트폴리오 결정은 go-strategy, KPI 관리 체계 일반은 go-control

## D · 공시와 보고

### D1 · 지속가능성 공시 기준의 지형
- 선수: A2
- 핵심 질문: KSSB·ISSB·ESRS·GRI는 누구를 위해, 무엇을, 언제부터 요구하는가?
- 목표: Explain — 기준별 대상 독자·중대성 관점·적용 대상·도입 시점의 차이를 학습자 회사 기준으로 설명한다.
- 만들어 볼 것: 우리 회사에 걸리는 공시 요구 지도(조회일 기준 일정 포함)
- 국내 근거: KSSB 공시기준 첫 세트 [K3], 지속가능성 공시 제도화 방안 최종안 [K4], 지속가능경영보고서 자율공시 [K6]
- 글로벌 비교: IFRS S1 [G1], EU CSRD와 옴니버스 [G3], GRI [G6]

### D2 · 기후 공시의 구조
- 선수: D1, C1
- 핵심 질문: 지배구조·전략·위험관리·지표와 목표의 네 기둥에는 각각 무엇이 들어가고, 그 자료는 회사 어디에 있는가?
- 목표: Apply — 학습자 회사의 기후 공시 목차를 네 기둥에 맞춰 짜고 항목별 자료 출처와 담당을 정한다.
- 만들어 볼 것: 기후 공시 목차와 항목별 자료 출처·담당 부서 표
- 국내 근거: KSSB 공시기준 제2호 기후 [K3], 사업보고서 기재 방식 [K4]
- 글로벌 비교: IFRS S2와 2025년 온실가스 공시 개정 [G2], TCFD 권고의 이관 [G9]
- 경계·연결: 재무제표와의 연결·회계 처리는 go-accounting, 공시 정보의 내부통제는 go-control

### D3 · 거래소 공시와 지배구조보고서
- 선수: D1
- 핵심 질문: 「준수하거나 설명하라」 방식의 공시는 회사에 무엇을 요구하고, 설명은 언제 충분한가?
- 목표: Apply — 지배구조 핵심지표의 준수 여부를 판단하고 미준수 항목의 설명 문안을 쓴다.
- 만들어 볼 것: 핵심지표 준수 점검표와 미준수 설명 문안 2개
- 국내 근거: 기업지배구조보고서 의무공시 확대 [K5], 지속가능경영보고서 자율공시 [K6], 환경정보공개제도 [K13]
- 글로벌 비교: G20/OECD 기업지배구조 원칙 2023 [G14]
- 경계·연결: 상법상 이사회·주주총회 절차는 go-compliance-and-legal

### D4 · 녹색 분류와 그린워싱
- 선수: D1
- 핵심 질문: 「친환경」이라는 주장은 어떤 근거가 있어야 말할 수 있는가?
- 목표: Evaluate — 보고서·홍보 문장의 근거를 분류체계와 표시·광고 기준으로 판단하고 고칠 방향을 정한다.
- 만들어 볼 것: 우리 회사 문장 5개의 그린워싱 위험 검토표
- 국내 근거: 한국형 녹색분류체계(K-택소노미) [K7], 환경 관련 표시·광고 심사지침 [K8]
- 글로벌 비교: EU 택소노미 [G12]
- 경계·연결: 광고 실무·표시광고법 일반은 go-marketing

### D5 · 해외 공시 규제와 국내 기업
- 선수: D2
- 핵심 질문: EU·미국의 공시 규제는 한국 본사와 해외 자회사에 어떤 경로로 닿는가?
- 목표: Evaluate — 해외 자회사·거래처 시나리오별로 적용 가능성을 따지고 대응 선택지를 비교한다(판단은 전문가 확인 전제).
- 만들어 볼 것: 해외 공시 요구 대응 메모(시나리오·확인할 출처·물어볼 사람)
- 국내 근거: KSSB 공시기준 [K3], 지속가능성 공시 제도화 방안의 국제 정합성 [K4]
- 글로벌 비교: EU CSRD·ESRS와 옴니버스 [G3] [G4], 미국 SEC 기후공시 규칙 [G15], 캘리포니아 SB 253 [G16]

## C · 기후와 탄소

### C1 · 온실가스 회계의 원리
- 선수: A1
- 핵심 질문: 회사의 배출량은 어디까지를 「우리 것」으로 세는가?
- 목표: Apply — 조직 경계(지분·통제)와 운영 경계를 정하고 학습자 사업장의 배출원을 Scope 1·2·3으로 분류한다.
- 만들어 볼 것: 우리 사업장 배출원 목록과 Scope 분류표
- 국내 근거: 온실가스 목표관리제·배출권거래제의 배출량 보고·검증 [K11]
- 글로벌 비교: GHG Protocol 기업 기준 [G7], GHG Protocol 개정 일정 [G8]

### C2 · Scope 2와 Scope 3 산정
- 선수: C1
- 핵심 질문: 사지 않으면 안 되는 전기와 남이 낸 배출은 어떻게 세고, 어디부터 세는가?
- 목표: Apply — 위치 기반·시장 기반 Scope 2를 구분하고, Scope 3 범주의 중요도를 따져 산정 계획을 세운다.
- 만들어 볼 것: Scope 3 산정 계획(범주·자료원·산정 방법·협력사 요청 항목)
- 국내 근거: 제도화 방안의 Scope 3 유예 일정 [K4], 온실가스 보고·검증 [K11]
- 글로벌 비교: GHG Protocol Scope 2 지침·Scope 3 기준과 개정 [G8], IFRS S2 온실가스 개정 [G2]
- 경계·연결: 협력사 데이터 수집 체계는 go-scm

### C3 · 배출권거래제
- 선수: C1
- 핵심 질문: 할당·제출·거래·이월은 회사의 비용과 의사결정을 어떻게 바꾸는가?
- 목표: Apply — 가상 사업장의 할당량·배출량으로 배출권 수급을 계산하고 대응 선택지(감축·구매·이월)를 비교한다.
- 만들어 볼 것: 배출권 수급 계산표와 대응 선택지 표(값은 예시 값)
- 국내 근거: 배출권거래법과 제4차 국가 배출권 할당계획 [K10], 온실가스종합정보센터 [K11]
- 글로벌 비교: EU 배출권거래제(EU ETS) [G13]
- 경계·연결: 배출권의 회계 처리는 go-accounting, 탄소 가격의 투자 판단은 go-finance

### C4 · 감축 목표와 전환계획
- 선수: C2, A3
- 핵심 질문: 감축 목표는 어떤 경로와 수단으로 믿을 만해지는가?
- 목표: Evaluate — 효율 개선·연료 전환·재생에너지 조달·상쇄의 비용과 신뢰성을 비교해 감축 경로를 고른다.
- 만들어 볼 것: 2035년까지 감축 로드맵 초안(수단·시점·가정)
- 국내 근거: 2035 NDC [K2], 탄소중립기본법 개정의 구간 목표 [K1]
- 글로벌 비교: SBTi 기업 넷제로 기준 [G10], IFRS S2 전환계획 공시 [G2]

### C5 · 탄소국경조정과 수출
- 선수: C1
- 핵심 질문: 수출 제품에 들어 있는 배출량은 누가 계산하고 누가 비용을 내는가?
- 목표: Apply — 수출 품목이 CBAM 대상인지 가늠하고 내재 배출량 자료 요청에 필요한 정보 흐름을 그린다.
- 만들어 볼 것: 수출 품목 CBAM 영향 점검 메모
- 국내 근거: 정부의 EU CBAM 대응 안내 [K12]
- 글로벌 비교: EU CBAM 본 시행 [G11]
- 경계·연결: 통관·원산지 실무는 go-scm

### C6 · 기후 리스크와 시나리오 분석
- 선수: C4, D2
- 핵심 질문: 기후변화는 우리 사업장과 매출에 어떤 경로로 돈이 되는 위험과 기회를 만드는가?
- 목표: Evaluate — 물리적·전환 리스크를 식별하고 시나리오별 영향의 크기와 시점을 근거와 함께 매긴다.
- 만들어 볼 것: 사업장 1곳의 기후 리스크·기회 매트릭스
- 국내 근거: KSSB 공시기준 제2호 기후 [K3]
- 글로벌 비교: IFRS S2 [G2], TCFD 권고의 이관 [G9]
- 경계·연결: 재무 영향의 정량 모델은 go-finance, 기업가치 반영은 go-valuation

## V · 가치사슬과 사회

### V1 · 인권·노동과 사회 주제
- 선수: A2
- 핵심 질문: 회사가 직접 하지 않은 인권 침해에도 왜 책임이 생기는가?
- 목표: Explain — 기업의 인권 존중 책임과 원인 제공·기여·연관의 차이를 학습자 회사의 예로 설명한다.
- 만들어 볼 것: 우리 회사 가치사슬의 인권·노동 위험 지도
- 국내 근거: 공급망 대응 K-ESG 가이드라인 [K9]
- 글로벌 비교: 유엔 기업과 인권 이행원칙 [G17], OECD 다국적기업 가이드라인 [G18]
- 경계·연결: 노동법 상세는 go-hr, 산업안전·중대재해는 go-hse

### V2 · 공급망 실사의 절차
- 선수: V1
- 핵심 질문: 협력사가 수백 곳일 때 어디부터, 어떻게 확인하는가?
- 목표: Apply — 위험 식별·우선순위·조치·추적·소통의 실사 단계를 학습자 회사 협력사군에 적용한다.
- 만들어 볼 것: 협력사 ESG 실사 체크리스트와 우선순위 기준
- 국내 근거: 공급망 대응 K-ESG 가이드라인 [K9] (국내 공급망 실사 법안 동향은 공식 의안 번호를 확인하지 못해 세션 중 국회 의안정보시스템으로 확인)
- 글로벌 비교: EU CSDDD와 옴니버스 [G5], OECD 책임 있는 기업 행동 실사 지침 [G18]
- 경계·연결: 구매·협력사 관리 실무는 go-scm, 계약 조항·법적 책임은 go-compliance-and-legal

### V3 · 고객사의 ESG 요구에 답하기
- 선수: V2, C2
- 핵심 질문: 고객사 설문과 배출량 요청에는 무엇을 근거로, 어디까지 답해야 하는가?
- 목표: Evaluate — 설문 문항별로 근거 자료·답변 수준·약속의 위험을 판단해 응답 전략을 정한다.
- 만들어 볼 것: 고객사 ESG 설문 응답 근거표
- 국내 근거: 공급망 대응 K-ESG 가이드라인 [K9]
- 글로벌 비교: EU CSDDD [G5], ESRS 가치사슬 정보 [G4]

## G · 지배구조와 평가 대응

### G1 · ESG 거버넌스
- 선수: D2, A3
- 핵심 질문: 이사회와 경영진은 ESG를 누가, 얼마나 자주, 무엇을 보고 감독하는가?
- 목표: Evaluate — ESG위원회·보고 체계·보상 연계 설계안을 회사 규모와 위험에 맞춰 비교해 고른다.
- 만들어 볼 것: ESG 거버넌스 체계도와 역할·보고 주기 표
- 국내 근거: 기업지배구조보고서 [K5], KSSB 공시기준의 지배구조 공시 [K3]
- 글로벌 비교: G20/OECD 기업지배구조 원칙 2023의 지속가능성 장 [G14], IFRS S1 지배구조 [G1]
- 경계·연결: 이사회 법적 의무는 go-compliance-and-legal, 임원 보상 설계는 go-hr

### G2 · ESG 평가와 등급 대응
- 선수: D1
- 핵심 질문: 같은 회사가 평가기관마다 다른 등급을 받는 이유는 무엇이고, 무엇부터 대응하는가?
- 목표: Evaluate — 평가 방법론의 차이를 읽고 공개 정보 기준으로 대응 우선순위를 정한다.
- 만들어 볼 것: 평가 항목 대비 공개 정보 갭 분석표
- 국내 근거: 지속가능경영보고서 자율공시 [K6], 지속가능성 공시 제도화 방안 [K4]
- 글로벌 비교: EU ESG 평가 활동 규정 [G19]

### G3 · 데이터 관리와 제3자 검증
- 선수: D2, C1
- 핵심 질문: 공시한 숫자를 남이 믿게 하려면 자료가 어떤 길을 거쳐야 하는가?
- 목표: Apply — 배출량·공시 데이터의 흐름과 통제 지점을 그리고, 제한적·합리적 확신 검증에 필요한 준비물을 정한다.
- 만들어 볼 것: 데이터 흐름도와 검증 준비 목록
- 국내 근거: 배출량 명세서 검증 [K11], 제도화 방안의 검증 도입 일정 [K4]
- 글로벌 비교: ISSA 5000 지속가능성 인증 기준 [G20], CSRD 인증 요구(제한적 확신 기준은 협의 중) [G3]
- 경계·연결: 내부통제 체계 일반은 go-control, 정보보호 공시·데이터 보안은 go-security

## X · 졸업 프로젝트

### X1 · 우리 회사 ESG 공시 준비 패키지
- 선수: A3, D2, C4, V2, G3
- 핵심 질문: 배운 것을 우리 회사의 다음 공시 주기에 실제로 쓸 수 있는가?
- 목표: Develop — 일정·자료·인력 제약 안에서 경영진이 결정할 수 있는 공시 준비안을 혼자 판단하며 완성한다.
- 만들어 볼 것: 중대성 평가 결과, 배출량 산정 범위, 공시 준비 로드맵, 협력사 실사 계획을 묶은 경영진 보고 초안(익명화·예시 값 허용)
- 국내 근거: 지속가능성 공시 제도화 방안 [K4], KSSB 공시기준 [K3], 배출권거래제·보고 제도 [K10] [K11]
- 글로벌 비교: IFRS S1·S2 [G1] [G2], 학습자 회사에 해당하는 해외 요구 [G3] [G5] [G11]

## 이 지도에 넣지 않은 영역

기후를 뺀 환경 규제(화학물질·폐기물·대기·수질 인허가), 생물다양성·자연 공시(TNFD, ISSB 자연 관련 공시 초안), 지속가능 금융 상품(녹색채권 등)은 깊게 다루지 않는다. 학습자의 중대성 평가에서 중요하게 나오면 튜터가 선택 모듈로 더한다. 선택 모듈 id는 `E`로 시작하고 `learner/state.json`에만 둔다.

## 출처

조회일은 지도를 만든 날이다. 2026-11-14에는 국가법령정보센터가 점검 중이어서, 법률은 법제처 국민참여입법센터의 국회 의안 정보와 소관 부처 발표로 확인했다.

- [K1] 탄소중립·녹색성장 기본법 개정(국회 의안 2220801, 공포 2026-09-08) — <https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2220801/detailRP> (조회 2026-11-14, 변동)
- [K2] 2035 국가 온실가스 감축목표(NDC) 53~61% — <https://www.korea.kr/news/policyNewsView.do?newsId=148954548> (조회 2026-11-14, 변동)
- [K3] 한국지속가능성기준위원회(KSSB) 공시기준 첫 세트(제1호·제2호, 2026-02-26) — <https://kasb.or.kr/front/board/comm020View.do?siteCd=002000000000000&seq=501> (조회 2026-11-14, 변동)
- [K4] 금융위원회 지속가능성 공시 제도화 방안 최종안(2026-07-08) — <https://www.fsc.go.kr/no010101/87280> (조회 2026-11-14, 변동)
- [K5] 금융위원회 기업지배구조보고서 2026년 코스피 상장사 전체 의무화 — <https://www.fsc.go.kr/no010101/84900> (조회 2026-11-14)
- [K6] 한국거래소 ESG 포털 지속가능경영보고서 자율공시 — <https://esg.krx.co.kr/en/contents/01/01030200/ESG01030200.jsp> (조회 2026-11-14)
- [K7] 한국형 녹색분류체계(K-택소노미) 개정(2025-12-31) — <https://www.mcee.go.kr/home/web/board/read.do?menuId=10598&boardMasterId=939&boardId=1854040> (조회 2026-11-14, 변동)
- [K8] 공정거래위원회 환경 관련 표시·광고 심사지침 적용 사례 — <https://m.korea.kr/briefing/pressReleaseView.do?newsId=156689150> (조회 2026-11-14)
- [K9] 산업통상자원부 공급망 대응 K-ESG 가이드라인(2022-12-07) — <https://www.korea.kr/briefing/pressReleaseView.do?newsId=156541024> (조회 2026-11-14)
- [K10] 제4차 국가 배출권 할당계획(「온실가스 배출권의 할당 및 거래에 관한 법률」) — <https://www.korea.kr/news/policyNewsView.do?newsId=148954548> (조회 2026-11-14, 변동)
- [K11] 온실가스종합정보센터 목표관리제·배출권 지침·가이드라인 — <https://www.gir.go.kr/home/index.do?menuId=19> (조회 2026-11-14, 변동)
- [K12] 산업통상부 2026 EU CBAM 확정기간 맞춤형 가이드 — <https://www.motir.go.kr/kor/article/ATCL3f49a5a8c/171751/view> (조회 2026-11-14, 변동)
- [K13] 「환경기술 및 환경산업 지원법」 환경정보공개제도(공개 대상을 일정 규모 이상 상장사로 넓힌 시행령 개정 입법예고, 법제처) — <https://moleg.go.kr/lawinfo/makingInfo.mo?lawCd=0&lawSeq=64622&lawType=TYPE5&mid=a10104010000> (조회 2026-11-14, 변동)
- [G1] IFRS S1 일반 요구사항 — <https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s1-general-requirements/> (조회 2026-11-14)
- [G2] IFRS S2 기후 관련 공시와 2025 온실가스 공시 개정 — <https://www.ifrs.org/projects/completed-projects/2025/amendments-to-disclosure-of-greenhouse-gas-emissions-s2/> (조회 2026-11-14, 변동)
- [G3] EU 기업 지속가능성 보고 지침(CSRD)과 Omnibus I 간소화 — <https://finance.ec.europa.eu/financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en> (조회 2026-11-14, 변동)
- [G4] 개정 유럽 지속가능성 보고 기준(ESRS) 위임법(2026-07-03) — <https://finance.ec.europa.eu/news/commission-adopts-revised-sustainability-reporting-standards-reduce-administrative-burdens-eu-2026-07-03_en> (조회 2026-11-14, 변동)
- [G5] EU 기업 지속가능성 실사 지침(CSDDD)과 Omnibus I(지침 2026/470) 개정 — <https://commission.europa.eu/business-economy-euro/doing-business-eu/sustainability-due-diligence-responsible-business/corporate-sustainability-due-diligence_en> (조회 2026-11-14, 변동)
- [G6] GRI Standards — <https://www.globalreporting.org/standards/> (조회 2026-11-14)
- [G7] GHG Protocol Corporate Standard — <https://ghgprotocol.org/corporate-standard> (조회 2026-11-14)
- [G8] GHG Protocol Scope 2·3 개정 현황 — <https://ghgprotocol.org/blog/scope-2-market-based-method-update-2025-2026-public-consultation-current-status> (조회 2026-11-14, 변동)
- [G9] TCFD 감독 책임의 IFRS 재단 이관(2024~) — <https://www.ifrs.org/news-and-events/news/2023/07/foundation-welcomes-tcfd-responsibilities-from-2024/> (조회 2026-11-14)
- [G10] SBTi Corporate Net-Zero Standard v2.0 — <https://sciencebasedtargets.org/news/the-sbti-releases-corporate-net-zero-standard-v2-0-to-accelerate-corporate-climate-action> (조회 2026-11-14, 변동)
- [G11] EU 탄소국경조정제도(CBAM) — <https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en> (조회 2026-11-14, 변동)
- [G12] EU 택소노미 — <https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en> (조회 2026-11-14)
- [G13] EU 배출권거래제(EU ETS) — <https://climate.ec.europa.eu/areas-action/carbon-markets/eu-emissions-trading-system-eu-ets_en> (조회 2026-11-14)
- [G14] G20/OECD 기업지배구조 원칙 2023 — <https://www.oecd.org/en/publications/2023/09/g20-oecd-principles-of-corporate-governance-2023_60836fcb.html> (조회 2026-11-14)
- [G15] 미국 SEC 기후공시 규칙 폐지 제안(2026-05-29) — <https://www.sec.gov/newsroom/press-releases/2026-49-sec-proposes-rescission-climate-related-disclosure-rules> (조회 2026-11-14, 변동)
- [G16] 캘리포니아 SB 253 CARB 보고 가이던스 — <https://ww2.arb.ca.gov/sites/default/files/2026-09/2026_SB253_Reporting_Guidance.pdf> (조회 2026-11-14, 변동)
- [G17] 유엔 기업과 인권 이행원칙(UNGP) — <https://www.ohchr.org/en/publications/reference-publications/guiding-principles-business-and-human-rights> (조회 2026-11-14)
- [G18] OECD 책임 있는 기업 행동 실사 지침 — <https://www.oecd.org/en/publications/2018/02/oecd-due-diligence-guidance-for-responsible-business-conduct_c669bd57.html> (조회 2026-11-14)
- [G19] EU ESG 평가 활동 규정(2024/3005, 2026-07-02 적용) — <https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/esg-rating-activities_en> (조회 2026-11-14, 변동)
- [G20] ISSA 5000 지속가능성 인증 기준(2026-12-15 이후 시작 기간) — <https://www.iaasb.org/focus-areas/understanding-international-standard-sustainability-assurance-5000> (조회 2026-11-14)
