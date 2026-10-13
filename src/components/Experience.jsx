import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";

import { EXPERIENCES } from "../constants/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const ExternalText = ({ href, children, className = "" }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-0.5 underline decoration-fg/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-current ${className}`}
    >
      {children}
      <LuArrowUpRight className="text-[0.85em]" aria-hidden="true" />
    </a>
  ) : (
    <span className={className}>{children}</span>
  );

const Role = ({ job }) => (
  <Reveal className="relative pl-10 sm:pl-14">
    <span className="absolute left-0 top-1.5 grid h-[22px] w-[22px] place-items-center rounded-full border hairline bg-bg sm:left-[3px]">
      <span className="h-2 w-2 rounded-full bg-accent" />
      {job.current && <span className="absolute h-2 w-2 animate-ping-slow rounded-full bg-accent" />}
    </span>

    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h3 className="text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
        {job.role}
        <span className="text-muted"> · </span>
        <ExternalText href={job.companyUrl} className="text-fg">
          {job.company}
        </ExternalText>
      </h3>
      <span className="font-mono text-xs uppercase tracking-wider text-muted">{job.period}</span>
    </div>

    <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-fg/85">{job.summary}</p>

    {job.sites?.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {job.sites.map((site) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border hairline bg-elev/60 py-1.5 pl-3 pr-2.5 text-sm transition-colors hover:border-accent/40"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{site.label}</span>
            <span className="font-medium group-hover:text-accent">{site.name}</span>
            <LuArrowUpRight
              className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    )}

    <ul className="mt-5 grid max-w-4xl gap-3">
      {job.points.map((point) => (
        <li key={point} className="flex gap-3 text-pretty text-[15px] leading-relaxed text-muted">
          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent/60" />
          {point}
        </li>
      ))}
    </ul>

    <div className="mt-5 flex flex-wrap gap-1.5">
      {job.stack.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  </Reveal>
);

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="relative py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading index="03" eyebrow="Experience" title="Where I'm" accent="shipping now." />

        <div ref={ref} className="relative mt-16">
          <div className="absolute bottom-2 left-[10px] top-2 w-px bg-fg/10 sm:left-[13px]" aria-hidden="true">
            <m.div style={{ scaleY }} className="h-full w-full origin-top bg-gradient-to-b from-accent to-sky" />
          </div>
          <div className="space-y-16">
            {EXPERIENCES.map((job) => (
              <Role key={job.company} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
