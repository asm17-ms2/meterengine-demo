const PIPELINE = [
  { label: "이벤트 수집", code: "raw ingest" },
  { label: "미터링", code: "metric" },
  { label: "요금 산정", code: "pricing" },
  { label: "인보이스", code: "invoice" },
  { label: "결제 · 증빙", code: "settle", accent: true },
];

export function Hero() {
  return (
    <header
      id="top"
      className="border-b border-ink/6 bg-[radial-gradient(120%_80%_at_50%_-8%,var(--color-brand-wash)_0%,#ffffff_48%)]"
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-7 px-6 pt-16 pb-14 text-center sm:px-8 sm:pt-22 sm:pb-[70px]">
        <span className="eyebrow rounded-full bg-brand-tint px-[15px] py-[7px] tracking-[0.06em] text-brand-dark">
          USAGE-BASED BILLING PLATFORM
        </span>

        <h1 className="max-w-[780px] text-[clamp(2.25rem,6vw,3.625rem)] leading-[1.1] font-extrabold tracking-[-0.035em] text-balance">
          사용량 이벤트만 보내면,
          <br />
          미터링부터 인보이스까지
        </h1>

        <p className="max-w-[610px] text-[17px] leading-[1.65] text-body sm:text-[19px]">
          MeterEngine은 사용량 이벤트를 수집해 미터링·집계하고, 가격 정책을
          적용해 인보이스를 만듭니다. 결제와 전자증빙까지 하나의 파이프라인으로
          이어집니다.
        </p>

        <div className="mt-0.5 flex flex-col gap-3 sm:flex-row">
          <a
            href="#cta"
            className="rounded-xl bg-brand px-[26px] py-3.5 text-[15.5px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(15,157,118,.6)] transition-transform hover:-translate-y-0.5"
          >
            베타 신청하기
          </a>
          <a
            href="#start"
            className="rounded-xl border border-ink/15 bg-white px-[26px] py-3.5 text-[15.5px] font-semibold transition-colors hover:bg-surface"
          >
            시작 방법 보기
          </a>
        </div>

        <ol className="mt-7 flex flex-wrap items-center justify-center rounded-2xl border border-ink/8 bg-white px-3 py-5 shadow-[0_16px_40px_-26px_rgba(22,24,29,.42)]">
          {PIPELINE.map((step, i) => (
            <li key={step.code} className="flex items-center">
              <div className="px-4 py-0.5 text-center sm:px-6">
                <div
                  className={`text-sm font-bold ${step.accent ? "text-brand" : ""}`}
                >
                  {step.label}
                </div>
                <div className="mt-1 font-mono text-[11px] font-medium text-faint">
                  {step.code}
                </div>
              </div>
              {i < PIPELINE.length - 1 && (
                <span aria-hidden className="text-[17px] text-brand">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </header>
  );
}
