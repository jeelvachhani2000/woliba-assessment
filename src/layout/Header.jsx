const Header = () => {
  return (
    <header className="relative z-100 flex h-[64px] shrink-0 items-center justify-between px-[40px] max-[768px]:h-[56px] max-[768px]:px-[20px] max-[480px]:px-[16px]">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Woliba"
          className="h-9 w-auto object-contain max-[768px]:h-7"
          draggable={false}
        />
      </div>

      {/* Right: Language Selector */}
      <div className="flex cursor-pointer items-center gap-2 select-none">
        <span className="text-[13px] font-normal tracking-[0.01em] text-[#6b7280] max-[768px]:hidden">
          Language
        </span>

        <div className="flex items-center gap-1.25 rounded-[20px] border border-[#e5e7eb] bg-[#fafafa] px-2.5 py-1 transition-all duration-200 ease-in-out hover:border-[#d1d5db] hover:shadow-[0_1px_4px_rgba(0,0,0,0.07)]">
          {/* US flag */}
          <img
            src="https://flagcdn.com/w20/us.png"
            srcSet="https://flagcdn.com/w40/us.png 2x"
            width="20"
            alt="English"
            className="block rounded-xs"
            draggable={false}
          />

          <span className="text-[13px] font-medium text-[#374151]">En</span>

          <svg
            className="shrink-0 text-[#9ca3af]"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
