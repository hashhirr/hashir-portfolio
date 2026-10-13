import { LuArrowUpRight, LuGraduationCap } from "react-icons/lu";

import { EDUCATION, EXPERIENCES, MARQUEE_STACK, SUMMARY } from "../constants/content";
import { yearsOfExperience } from "../constants/config";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import CountUp from "./ui/CountUp";

const STATS = [
  { value: yearsOfExperience(), suffix: "+", label: "Years shipping production software" },
  { value: 3, label: "Live products & websites I run today" },
  { value: 2, label: "App stores released to: iOS & Android" },
  { value: MARQUEE_STACK.length, label: "Frameworks, services & tools in my daily stack" },
];

const About = () => (
  <section id="about" className="relative py-16 sm:py-24">
    <div className="container-x">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="One engineer for the whole"
        accent="product lifecycle."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
        <Reveal className="card p-7 sm:p-9">
          <p className="text-pretty text-lg leading-relaxed text-fg/90 sm:text-xl sm:leading-relaxed">{SUMMARY}</p>
          <p className="mt-5 text-pretty leading-relaxed text-muted">
            Most of my time goes into React Native and TypeScript, backed by NestJS, Hasura GraphQL and PostgreSQL/PostGIS,
            or Next.js with Firebase and Stripe on the web. I care about the unglamorous parts too: signing certificates,
            security rules, canonical URLs and the funnel events that tell you whether a launch worked.
          </p>

          <div className="mt-8 flex items-center gap-4 border-t hairline pt-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
              <LuGraduationCap className="text-xl" aria-hidden="true" />
            </span>
            <div className="leading-snug">
              <p className="font-medium">
                {EDUCATION.degree} · {EDUCATION.school}
              </p>
              <p className="text-sm text-muted">
                Class of {EDUCATION.year} · {EDUCATION.detail}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="card flex flex-col justify-between p-5 sm:p-6">
                <p className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  <CountUp to={s.value} />
                  {s.suffix && <span className="text-accent">{s.suffix}</span>}
                </p>
                <p className="mt-3 text-[13px] leading-snug text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="card p-5 sm:p-6">
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent" /> Currently
            </p>
            <ul className="mt-4 space-y-3">
              {EXPERIENCES.map((e) => (
                <li key={e.company} className="text-sm">
                  <span className="font-medium">{e.role}</span>
                  <span className="text-muted"> · </span>
                  {(e.brands ?? [{ name: e.company, url: e.companyUrl }]).map((brand, i) => (
                    <span key={brand.name}>
                      {i > 0 && <span className="text-muted"> &amp; </span>}
                      {brand.url ? (
                        <a
                          href={brand.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-muted underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-current"
                        >
                          {brand.name}
                          <LuArrowUpRight aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="text-muted">{brand.name}</span>
                      )}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
