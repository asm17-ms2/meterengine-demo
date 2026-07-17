const METRICS = [
  {
    value: "100%",
    label: "청구 금액 일치",
    body: "무작위 요금제·경계값 10만 건을 기준 계산기와 대조해 검증합니다.",
  },
  {
    value: "1원",
    label: "단위 정합",
    body: "인보이스·결제·전자증빙 금액을 원 단위까지 일치시킵니다.",
  },
  {
    value: "0건",
    label: "데이터 교차 접근",
    body: "테넌트 간 데이터 접근과 금액 불일치를 0건으로 관리합니다.",
  },
];

export function Trust() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-16 sm:px-8 sm:py-22">
      <div className="mb-13 text-center">
        <div className="eyebrow mb-3 text-brand">ACCURACY BY DESIGN</div>
        <h2 className="text-[clamp(1.75rem,4.5vw,2.375rem)] leading-[1.2] font-extrabold tracking-[-0.025em]">
          금액은 근거가 있어야 합니다
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-3">
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col gap-2 text-center"
          >
            <div className="font-mono text-[52px] font-extrabold tracking-[-0.02em] text-brand">
              {metric.value}
            </div>
            <div className="text-base font-bold">{metric.label}</div>
            <p className="text-sm leading-[1.6] text-muted">{metric.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
