import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuArrowUp, LuMail } from "react-icons/lu";

import { NAV_LINKS } from "../constants/content";
import { PROFILE, SOCIALS, emailHref } from "../constants/config";
import Logo from "./ui/Logo";

const Footer = () => (
  <footer className="relative overflow-hidden border-t hairline pt-16">
    <div className="container-x">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="font-semibold tracking-tight">{PROFILE.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {PROFILE.role} & {PROFILE.specialty}. Building mobile and web products end to end.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-14 gap-y-2.5 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-muted transition-colors hover:text-fg">
              {l.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {[
            { href: SOCIALS.github, label: "GitHub", Icon: FaGithub },
            { href: SOCIALS.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
            { href: emailHref, label: "Email", Icon: LuMail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border hairline text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Icon className="text-[15px]" />
            </a>
          ))}
        </div>
      </div>

      {/* Decorative wordmark, drawn via ::before so it stays out of the accessibility tree */}
      <div
        aria-hidden="true"
        data-text={PROFILE.shortName}
        className="mask-fade-b mt-16 select-none whitespace-nowrap text-center text-[clamp(2.5rem,14.5vw,11rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-fg/[0.06] before:content-[attr(data-text)]"
      />

      <div className="flex flex-col items-center justify-between gap-4 border-t hairline py-6 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Designed & built with React, Vite & Tailwind.
        </p>
        <a href="#top" className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top
          <LuArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
