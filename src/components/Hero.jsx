import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { LuArrowDown, LuCheck, LuDownload, LuMail, LuMapPin } from "react-icons/lu";
import { FaApple, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiStripe } from "react-icons/si";

import { COMPANY_LINKS, CONTACT, CV, PROFILE, SOCIALS, cvHref, emailHref, yearsOfExperience } from "../constants/config";
import PhoneMockup from "./PhoneMockup";
import TopoBackground from "./ui/TopoBackground";

/*
 * The intro uses CSS keyframes (animate-rise / animate-fade-up) rather than
 * framer-motion, so it plays straight from the prerendered HTML on first
 * paint instead of waiting for JavaScript.
 */
const delay = (s) => ({ animationDelay: `${s}s` });

const HEADLINE = [
  { text: "Full stack engineer" },
  { text: "shipping mobile & web" },
  { text: "products" },
  { text: "end to end.", accent: true },
];

const AnimatedHeadline = () => {
  let wordIndex = 0;
  return (
    <h1 className="text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.045em] xs:text-5xl sm:text-6xl lg:text-[4.1rem]">
      {HEADLINE.map((part) =>
        part.text.split(" ").map((word) => {
          const i = wordIndex++;
          return (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-top">
              <span
                className={`inline-block animate-rise ${
                  part.accent ? "pr-[0.08em] font-serif font-normal italic tracking-[-0.01em] text-accent" : ""
                }`}
                style={delay(0.1 + i * 0.045)}
              >
                {word}
              </span>
              &nbsp;
            </span>
          );
        })
      )}
    </h1>
  );
};

const FloatCard = ({ className = "", start = 0, floatDelay = "0s", children }) => (
  <div className={`absolute z-20 hidden animate-fade-up sm:block ${className}`} style={delay(start)}>
    <div
      className="animate-float rounded-2xl border hairline bg-elev/90 p-3.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] backdrop-blur-md"
      style={{ animationDelay: floatDelay }}
    >
      {children}
    </div>
  </div>
);

const HeroVisual = () => (
  <div className="relative mx-auto flex h-[540px] w-full max-w-[520px] items-center justify-center sm:h-[620px]">
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
      style={{ background: "rgb(var(--accent) / var(--glow-alpha))" }}
    />

    <div className="relative z-10 animate-fade-up" style={delay(0.3)}>
      <PhoneMockup />
    </div>

    <FloatCard className="left-0 top-[9%] lg:-left-6" start={0.9} floatDelay="0.5s">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] text-muted">nearby.sql</span>
      </div>
      <pre className="font-mono text-[10.5px] leading-[1.6] text-fg/80">
        <span className="text-accent">SELECT</span> id, author{"\n"}
        <span className="text-accent">FROM</span> posts{"\n"}
        <span className="text-accent">WHERE</span> <span className="text-sky">ST_DWithin</span>({"\n"}
        {"  "}geo, :me, <span className="text-warm">2000</span>)
      </pre>
    </FloatCard>

    <FloatCard className="right-0 top-[40%] lg:-right-4" start={1.1} floatDelay="1.6s">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-fg text-bg">
          <FaApple className="text-[17px]" />
        </span>
        <div className="leading-tight">
          <p className="text-[12.5px] font-semibold">TestFlight</p>
          <p className="text-[11px] text-muted">Build 2.4.0 · Ready to test</p>
        </div>
        <span className="ml-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-ink">
          <LuCheck className="text-[12px]" strokeWidth={3} />
        </span>
      </div>
    </FloatCard>

    <FloatCard className="bottom-[7%] left-[2%] lg:-left-2" start={1.3} floatDelay="2.4s">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-warm/15 text-warm">
          <SiStripe className="text-[15px]" />
        </span>
        <div className="leading-tight">
          <p className="text-[12.5px] font-semibold">Booking confirmed</p>
          <p className="text-[11px] text-muted">Dune buggy · Paid via Stripe</p>
        </div>
      </div>
    </FloatCard>
  </div>
);

const StatusChip = () => (
  <p
    className="inline-flex max-w-full animate-fade-up items-center gap-2.5 rounded-full border hairline bg-elev/70 py-1.5 pl-2 pr-4 text-[13px] text-muted backdrop-blur"
    style={delay(0)}
  >
    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
      <span className="absolute h-2 w-2 animate-ping-slow rounded-full bg-accent" />
      <span className="relative h-2 w-2 rounded-full bg-accent" />
    </span>
    <span className="truncate">
      Leading web at{" "}
      <a
        href={COMPANY_LINKS.dejavuAdventures}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-fg underline-offset-4 hover:text-accent hover:underline"
      >
        Dejavu Adventures
      </a>
      <span className="hidden xs:inline">
        {" "}
        &amp;{" "}
        <a
          href={COMPANY_LINKS.offroadRentalHub}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-fg underline-offset-4 hover:text-accent hover:underline"
        >
          Offroad Rental Hub
        </a>
      </span>
    </span>
  </p>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const topoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-center pb-16 pt-28 lg:pt-24">
      <m.div style={{ y: topoY }} className="absolute inset-0 -z-10">
        <TopoBackground opacity={0.11} />
      </m.div>

      <div className="container-x grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
        <div>
          <StatusChip />

          <div className="mt-7">
            <AnimatedHeadline />
          </div>

          <p
            className="mt-6 max-w-xl animate-fade-up text-pretty text-base leading-relaxed text-muted sm:text-lg"
            style={delay(0.55)}
          >
            I'm <span className="font-medium text-fg">{PROFILE.name}</span>. For {yearsOfExperience()}+ years I've built
            production platforms in React Native and Next.js: native camera modules, PostGIS queries, Stripe checkouts,
            cloud setup and app-store releases.
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3" style={delay(0.7)}>
            <a href="#work" className="btn-primary group">
              View selected work
              <LuArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a href={cvHref} download={CV.downloadName} className="btn-ghost">
              <LuDownload aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
            style={delay(0.85)}
          >
            <div className="flex items-center gap-1">
              {[
                { href: SOCIALS.github, label: "GitHub", Icon: FaGithub },
                { href: SOCIALS.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
                { href: emailHref, label: `Email ${CONTACT.email}`, Icon: LuMail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border hairline transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="text-[16px]" />
                </a>
              ))}
            </div>
            <span className="flex items-center gap-1.5">
              <LuMapPin className="text-accent" aria-hidden="true" />
              {PROFILE.location}
            </span>
          </div>
        </div>

        <m.div style={{ y: visualY }}>
          <HeroVisual />
        </m.div>
      </div>
    </section>
  );
};

export default Hero;
