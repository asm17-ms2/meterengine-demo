const STEPS = [
  {
    title: "이벤트 수집",
    body: "REST API로 raw 사용량 이벤트를 받고, transaction_id로 멱등 처리합니다. 발생 시각과 수신 시각을 분리해 지연 이벤트도 정확히 반영합니다.",
  },
  {
    title: "미터링 · 집계",
    body: "COUNT·SUM과 속성별 다차원 집계로 Billable Metric을 정의하고, 종량제·구간별 요금제와 가격 정책 버전을 관리합니다.",
  },
  {
    title: "요금 산정 · 인보이스",
    body: "청구 주기가 끝나면 draft 인보이스를 확정합니다. 원화 정수 단위와 부가세를 계산해 line item까지 그대로 보존합니다.",
  },
  {
    title: "결제 · 전자증빙",
    body: "빌링키 결제와 웹훅을 멱등 처리하고, 증빙 정책에 따라 카드전표·전자세금계산서 발행 상태를 인보이스와 연결합니다.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1160px] px-6 py-12 sm:px-8 sm:pt-16 sm:pb-10">
      <div className="mb-11 text-center">
        <div className="eyebrow mb-3 text-brand">HOW IT WORKS</div>
        <h2 className="text-[clamp(1.75rem,4.5vw,2.375rem)] leading-[1.2] font-extrabold tracking-[-0.025em]">
          하나의 파이프라인, 네 단계
        </h2>
      </div>

      <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="flex flex-col gap-3 rounded-2xl border border-ink/8 bg-surface px-6 py-7"
          >
            <span className="flex size-8.5 items-center justify-center rounded-[9px] bg-brand font-mono text-[15px] font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-2 text-[19px] font-bold">{step.title}</h3>
            <p className="text-[14.5px] leading-[1.6] text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
