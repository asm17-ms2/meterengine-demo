const NAV_LINKS = [
  { href: "#how", label: "동작 방식" },
  { href: "#features", label: "기능" },
  { href: "#start", label: "시작하기" },
  { href: "#ai", label: "AI" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-ink/8 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-[7px] bg-brand font-mono text-[15px] font-bold text-white">
            M
          </span>
          <span className="text-[17px] font-bold tracking-[-0.01em]">
            MeterEngine
          </span>
        </a>

        <div className="flex items-center gap-6 text-[14.5px] font-medium text-ink-soft lg:gap-[30px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden transition-colors hover:text-ink sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-lg bg-ink px-[17px] py-[9px] text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            베타 신청
          </a>
        </div>
      </div>
    </nav>
  );
}
