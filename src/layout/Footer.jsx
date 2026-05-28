const Footer = () => {
  return (
    <footer className="relative z-[100] flex shrink-0 items-center justify-center px-10 py-[14px] max-md:px-5 max-md:py-3">
      <nav className="flex items-center gap-3">
        <a
          href="/terms"
          className="text-[12px] font-normal tracking-[0.01em] text-[#da6c74] opacity-85 transition-all duration-200 hover:text-[#c0555d] hover:underline hover:opacity-100 max-md:text-[11px]"
        >
          Terms of Use
        </a>

        <span className="text-[12px] text-[#d1a0a4] select-none">·</span>

        <a
          href="/contact"
          className="text-[12px] font-normal tracking-[0.01em] text-[#da6c74] opacity-85 transition-all duration-200 hover:text-[#c0555d] hover:underline hover:opacity-100 max-md:text-[11px]"
        >
          Contact Us
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
