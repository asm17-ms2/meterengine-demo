export function AiAssist() {
  return (
    <section id="ai" className="bg-night text-white">
      <div className="mx-auto max-w-[1160px] px-6 py-16 sm:px-8 sm:py-22">
        <div className="mb-12">
          <div className="eyebrow mb-3 text-lime">AI ASSIST</div>
          <h2 className="text-[clamp(1.75rem,4.5vw,2.375rem)] leading-[1.2] font-extrabold tracking-[-0.025em]">
            요금제는 말로 설정하고,
            <br />
            계산은 엔진이 정확하게
          </h2>
          <p className="mt-4 max-w-[620px] text-[17px] leading-[1.65] text-night-body">
            LLM은 요금제 설정과 설명을 돕고, 실제 청구 계산은 결정론적 요금 산정
            엔진이 맡습니다. 금액의 신뢰성과 설정의 편의성을 동시에.
          </p>
        </div>

        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-night-card px-6 py-7">
            <h3 className="text-[18px] font-bold">자연어 요금제 설정</h3>
            <p className="text-sm leading-[1.65] text-night-muted">
              &quot;토큰 100만 개까지 무료, 이후 1,000개당 3원&quot; 같은 문장을
              가격 정책 DSL/JSON으로 변환합니다. 검증·시뮬레이션·승인 후에만
              배포됩니다.
            </p>
            <div className="mt-1.5 rounded-[9px] bg-night px-3.5 py-3 font-mono text-xs leading-[1.6] font-medium text-lime">
              &quot;100만까지 무료,
              <br />
              이후 1K당 ₩3&quot; → JSON
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-night-card px-6 py-7">
            <h3 className="text-[18px] font-bold">요금제 시뮬레이션</h3>
            <p className="text-sm leading-[1.65] text-night-muted">
              새 요금제를 발행하기 전, 실제 과거 사용량에 리플레이로 적용해
              고객별 청구액 변화와 총매출 영향, 급증 고객을 미리 보여줍니다.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-night-card px-6 py-7">
            <h3 className="text-[18px] font-bold">요금제 최적화 제안</h3>
            <p className="text-sm leading-[1.65] text-night-muted">
              사용량 분포를 근거로 무료 구간·경계값·단가 조정안을 제안하고, 각
              안의 예상 매출 변화를 시뮬레이션 수치로 제시합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
