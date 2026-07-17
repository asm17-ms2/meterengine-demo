export function Why() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 pt-16 pb-5 sm:px-8 sm:pt-21">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <div className="eyebrow mb-3.5 text-brand">WHY METERENGINE</div>
          <h2 className="text-[clamp(1.75rem,4vw,2.125rem)] leading-[1.25] font-extrabold tracking-[-0.02em]">
            과금 단위가 바뀌었습니다.
            <br />
            빌링도 바뀌어야 합니다.
          </h2>
        </div>

        <div className="flex flex-col gap-5.5 pt-1.5">
          <p className="text-[17px] leading-[1.7] text-body">
            이제 값은 토큰 수, API 호출 횟수, 연산량으로 매겨집니다. 고객은 쓴
            만큼만 내길 원하지만, 사용량 과금 인프라를 직접 만들면
            요금제·중복 이벤트·청구 이력 관리로 로직은 계속 복잡해집니다.
          </p>
          <p className="text-[17px] leading-[1.7] text-body">
            MeterEngine은 이벤트만 받으면 집계·요금 계산·인보이스를 대신
            처리합니다. 가격 정책을 제품 코드 바깥으로 분리해, 요금제만 갈아
            끼우면 되도록 만듭니다.
          </p>
        </div>
      </div>
    </section>
  );
}
