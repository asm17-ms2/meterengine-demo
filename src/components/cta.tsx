export function Cta() {
  return (
    <section
      id="cta"
      className="bg-[radial-gradient(120%_120%_at_50%_0%,var(--color-brand)_0%,var(--color-brand-dark)_100%)] text-white"
    >
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 px-6 py-18 text-center sm:px-8 sm:py-23">
        <h2 className="text-[clamp(1.875rem,5vw,2.75rem)] leading-[1.2] font-extrabold tracking-[-0.03em] text-balance">
          이벤트만 보내세요.
          <br />
          나머지는 MeterEngine이.
        </h2>
        <p className="max-w-[500px] text-[18px] leading-[1.65] text-[#d6f2e8]">
          무료 샌드박스로 이벤트 전송부터 인보이스 생성까지 한 청구 주기를 직접
          검증해보세요.
        </p>
        <div className="mt-1 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="rounded-xl bg-white px-[30px] py-[15px] text-[15.5px] font-bold text-brand-dark transition-transform hover:-translate-y-0.5"
          >
            베타 신청하기
          </a>
          <a
            href="#"
            className="rounded-xl border border-white/30 bg-white/15 px-[30px] py-[15px] text-[15.5px] font-semibold transition-colors hover:bg-white/25"
          >
            기술 문서 보기
          </a>
        </div>
      </div>
    </section>
  );
}
