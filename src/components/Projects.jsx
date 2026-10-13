import { LuArrowUpRight, LuCheck } from "react-icons/lu";

import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../constants/content";
import { useSpotlight } from "../hooks/useSpotlight";
import ProjectVisual from "./ProjectVisuals";
import LinkButton from "./ui/LinkButton";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const FeaturedProject = ({ project, index }) => {
  const onMove = useSpotlight();
  const flipped = index % 2 === 1;

  return (
    <Reveal>
      <article
        onMouseMove={onMove}
        className="card spotlight grid overflow-hidden lg:min-h-[520px] lg:grid-cols-2"
      >
        <ProjectVisual
          name={project.visual}
          className={`min-h-[380px] border-b hairline bg-surface/50 lg:min-h-0 lg:border-b-0 ${
            flipped ? "lg:order-first lg:border-r" : "lg:order-last lg:border-l"
          }`}
        />

        <div className="relative flex flex-col p-6 sm:p-9">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">0{index + 1}</span>
            <span className="eyebrow">{project.kind}</span>
          </div>

          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{project.name}</h3>

          {project.parent && (
            <p className="mt-2 text-sm text-muted">
              Subsidiary of{" "}
              <a
                href={project.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-medium text-fg underline decoration-fg/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-current"
              >
                {project.parent.name}
                <LuArrowUpRight aria-hidden="true" />
              </a>
              . I manage both companies' websites.
            </p>
          )}

          <p className="mt-4 text-pretty leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm leading-snug">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <LuCheck className="text-[10px]" strokeWidth={3} aria-hidden="true" />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2.5 pt-8">
            {project.links.map((link, i) => (
              <LinkButton key={link.href} {...link} variant={i === 0 ? "primary" : "ghost"} />
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const SmallProject = ({ project, index }) => {
  const onMove = useSpotlight();
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article onMouseMove={onMove} className="card spotlight flex h-full flex-col overflow-hidden">
        <ProjectVisual name={project.visual} className="h-[210px] border-b hairline bg-surface/50" />
        <div className="flex flex-1 flex-col p-6">
          <p className="eyebrow">{project.kind}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          {project.links.length > 0 && (
            <div className="mt-auto pt-5">
              {project.links.map((link) => (
                <LinkButton key={link.href} {...link} />
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
};

const Projects = () => (
  <section id="work" className="relative py-16 sm:py-24">
    <div className="container-x">
      <SectionHeading
        index="02"
        eyebrow="Selected work"
        title="Products in production,"
        accent="not just prototypes."
        description="Platforms I build and run today, plus a few earlier apps where I explored ride-hailing, media playback and real-time chat."
      />

      <div className="mt-14 space-y-6">
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedProject key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {OTHER_PROJECTS.map((project, i) => (
          <SmallProject key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
