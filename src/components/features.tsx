const FEATURES = [
  {
    title: "멱등 이벤트 수집",
    body: "transaction_id 기반 중복 제거. 트랜잭션·Outbox·재시도로 수락한 이벤트의 유실을 막습니다.",
  },
  {
    title: "Billable Metric",
    body: "COUNT·SUM과 속성별 다차원 집계. 토큰·모델·지역·등급까지 원하는 축으로 사용량을 정의합니다.",
  },
  {
    title: "가격 정책 · 버전",
    body: "종량제·구간별 요금제를 버전으로 관리. 제품 코드를 건드리지 않고 요금제만 교체합니다.",
  },
  {
    title: "인보이스 · 부가세",
    body: "draft → finalize 흐름. 원화 정수 단위와 부가세를 1원까지 계산하고 line item을 보존합니다.",
  },
  {
    title: "PG 결제 연동",
    body: "포트원 단일 채널로 빌링키 결제. PG 요청·응답·웹훅을 멱등 처리합니다.",
  },
  {
    title: "전자증빙",
    body: "증빙 정책에 따라 카드전표·전자세금계산서 정발행/역발행을 분기하고 상태를 연결합니다.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="mt-14 border-y border-ink/6 bg-surface"
    >
      <div className="mx-auto max-w-[1160px] px-6 py-16 sm:px-8 sm:py-21">
        <div className="mb-11">
          <div className="eyebrow mb-3 text-brand">FEATURES</div>
          <h2 className="text-[clamp(1.75rem,4.5vw,2.375rem)] leading-[1.2] font-extrabold tracking-[-0.025em]">
            빌링에 필요한 모든 조각
          </h2>
        </div>

        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="flex flex-col gap-2.5 rounded-2xl border border-ink/8 bg-white px-6 py-6.5"
            >
              <div className="font-mono text-xs font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[18px] font-bold">{feature.title}</h3>
              <p className="text-sm leading-[1.6] text-muted">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
