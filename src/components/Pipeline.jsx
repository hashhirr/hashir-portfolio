import { useRef } from "react";

import { PIPELINE } from "../constants/content";
import { usePauseOffscreen } from "../hooks/usePauseOffscreen";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const Pipeline = () => {
  const ref = useRef(null);
  usePauseOffscreen(ref);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="How I ship"
          title="From schema to store listing,"
          accent="one pipeline."
          description="I don't hand off at the edges. The same person who designs the data model also signs the build and watches the funnel after launch."
        />

        <div ref={ref} className="relative mt-16">
          {/* Connector with a packet travelling along it */}
          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-fg/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[23px] lg:h-px lg:w-auto" aria-hidden="true">
            <span className="absolute -ml-[3px] h-10 w-[7px] animate-travel-y rounded-full bg-gradient-to-b from-transparent via-accent to-transparent lg:hidden" />
            <span className="absolute -mt-[3px] hidden h-[7px] w-16 animate-travel rounded-full bg-gradient-to-r from-transparent via-accent to-transparent lg:block" />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {PIPELINE.map(({ step, title, icon: Icon, text, tools }, i) => (
              <Reveal as="li" key={step} delay={i * 0.08} className="relative flex gap-5 lg:block">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border hairline bg-elev text-accent shadow-sm">
                  <Icon className="text-[20px]" aria-hidden="true" />
                </span>
                <div className="lg:mt-6">
                  <p className="font-mono text-[11px] text-muted">{step}</p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{text}</p>
                  <p className="mt-3 font-mono text-[11px] text-fg/70">{tools}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
