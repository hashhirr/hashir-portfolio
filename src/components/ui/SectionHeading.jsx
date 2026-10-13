import Reveal from "./Reveal";

/**
 * Eyebrow label + large heading. `accent` is rendered in italic serif
 * right after `title`.
 */
const SectionHeading = ({ eyebrow, index, title, accent, description, className = "" }) => (
  <div className={`max-w-3xl ${className}`}>
    <Reveal>
      <p className="eyebrow">
        {index && <span className="text-accent">{index}</span>}
        <span className="h-px w-6 bg-current opacity-40" />
        {eyebrow}
      </p>
    </Reveal>
    <Reveal delay={0.05}>
      <h2 className="mt-5 text-balance text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-[3.5rem]">
        {title}{" "}
        {accent && <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">{accent}</span>}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
