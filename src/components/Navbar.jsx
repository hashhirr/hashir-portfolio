import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { LuDownload, LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";

import { NAV_LINKS } from "../constants/content";
import { CV, PROFILE, cvHref } from "../constants/config";
import { useActiveSection } from "../hooks/useActiveSection";
import { toggleTheme } from "../hooks/theme";
import Logo from "./ui/Logo";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

// useLayoutEffect warns during prerendering; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

// Both icons are rendered; CSS shows the right one, so no theme state is needed.
const ThemeToggle = () => (
  <button
    type="button"
    onClick={toggleTheme}
    aria-label="Toggle light and dark theme"
    className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border hairline text-fg transition-colors hover:bg-fg/5"
  >
    <LuMoon className="absolute text-[17px] transition-all duration-500 light:-translate-y-6 light:rotate-90 light:opacity-0" />
    <LuSun className="absolute translate-y-6 -rotate-90 text-[17px] opacity-0 transition-all duration-500 light:translate-y-0 light:rotate-0 light:opacity-100" />
  </button>
);

/** Desktop links with a pill that slides to the active section. */
const DesktopLinks = ({ active }) => {
  const listRef = useRef(null);
  const [pill, setPill] = useState(null);

  useIsoLayoutEffect(() => {
    const measure = () => {
      const link = listRef.current?.querySelector(`[data-id="${active}"]`);
      setPill(link ? { x: link.offsetLeft, w: link.offsetWidth } : null);
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <ul
      ref={listRef}
      className="relative hidden items-center gap-1 rounded-full border hairline bg-elev/60 p-1 backdrop-blur md:flex"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-1 h-[calc(100%-8px)] rounded-full bg-fg/[0.07] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
        style={{
          transform: `translateX(${pill?.x ?? 0}px)`,
          width: pill?.w ?? 0,
          opacity: pill ? 1 : 0,
        }}
      />
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            data-id={link.id}
            aria-current={active === link.id ? "true" : undefined}
            className={`relative block rounded-full px-4 py-1.5 text-sm transition-colors ${
              active === link.id ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          scrolled || open ? "border-b hairline bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav className="container-x flex h-[68px] items-center justify-between gap-4" aria-label="Primary">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            onClick={() => setOpen(false)}
            aria-label={`${PROFILE.shortName}, back to top`}
          >
            <Logo className="h-8 w-8 transition-transform duration-500 group-hover:rotate-90" />
            <span className="text-[15px] font-semibold tracking-tight">{PROFILE.shortName}</span>
          </a>

          <DesktopLinks active={active} />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={cvHref} download={CV.downloadName} className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
              <LuDownload className="text-[15px]" aria-hidden="true" />
              Resume
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border hairline md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <LuX className="text-lg" /> : <LuMenu className="text-lg" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <m.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <ul className="container-x flex flex-col pb-6 pt-2">
                {NAV_LINKS.map((link, i) => (
                  <m.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b hairline py-4 text-2xl font-medium tracking-tight"
                    >
                      {link.title}
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    </a>
                  </m.li>
                ))}
                <li className="pt-6">
                  <a href={cvHref} download={CV.downloadName} className="btn-primary w-full">
                    <LuDownload aria-hidden="true" />
                    Download resume
                  </a>
                </li>
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
