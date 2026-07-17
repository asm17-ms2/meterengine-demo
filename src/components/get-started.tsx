export function GetStarted() {
  return (
    <section id="start" className="mx-auto max-w-[1160px] px-6 py-16 sm:px-8 sm:py-22">
      <div className="mb-12 text-center">
        <div className="eyebrow mb-3 text-brand">GET STARTED</div>
        <h2 className="text-[clamp(1.75rem,4.5vw,2.375rem)] leading-[1.2] font-extrabold tracking-[-0.025em]">
          이벤트 한 줄이면 시작
        </h2>
        <p className="mx-auto mt-3.5 max-w-[560px] text-[17px] leading-[1.6] text-muted">
          SDK로 사용량 이벤트를 보내면 집계·요금 산정·인보이스가 자동으로
          이어집니다.
        </p>
      </div>

      <div className="mx-auto max-w-[680px]">
        <div className="overflow-hidden rounded-2xl bg-night shadow-[0_24px_50px_-30px_rgba(14,17,22,.6)]">
          <div className="flex items-center gap-1.75 border-b border-white/7 px-4.5 py-3.5">
            <span className="size-2.75 rounded-full bg-[#ff5f57]" />
            <span className="size-2.75 rounded-full bg-[#febc2e]" />
            <span className="size-2.75 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[12.5px] font-medium text-night-faint">
              send_event.py
            </span>
          </div>

          <pre className="overflow-x-auto p-6 font-mono text-[13.5px] leading-[1.85] text-[#c7d0de]">
            <code>
              <span className="text-[#c084fc]">from</span> meterengine{" "}
              <span className="text-[#c084fc]">import</span> Meter{"\n\n"}
              meter = Meter(api_key=
              <span className="text-[#7dd3fc]">&quot;sk_live_...&quot;</span>)
              {"\n\n"}
              meter.<span className="text-[#bef264]">track</span>({"\n"}
              {"  "}event=
              <span className="text-[#7dd3fc]">&quot;llm.tokens&quot;</span>,
              {"\n"}
              {"  "}customer=
              <span className="text-[#7dd3fc]">&quot;cus_8Fk2p&quot;</span>,{"\n"}
              {"  "}value=<span className="text-[#fca5a5]">12840</span>,{"\n"}
              {"  "}occurred_at=
              <span className="text-[#7dd3fc]">
                &quot;2026-07-17T04:12Z&quot;
              </span>
              ,{"\n"}
              {"  "}transaction_id=
              <span className="text-[#7dd3fc]">&quot;evt_a91f3c&quot;</span>,
              {"\n"})
              {"\n"}
              <span className="text-night-faint">
                # 200 OK · 집계·요금 산정·인보이스 자동
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
