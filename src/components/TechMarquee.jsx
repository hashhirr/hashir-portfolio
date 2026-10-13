import { MARQUEE_STACK } from "../constants/content";
import { useMounted } from "../hooks/useMounted";

// Brand icons are heavy inline SVG, so the prerendered HTML ships names only
// (with the icon slot reserved) and the icons + looping copy arrive after hydration.
const Row = ({ withIcons, hidden }) => (
  <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
    {MARQUEE_STACK.map(({ name, icon: Icon }) => (
      <li key={name} className="flex items-center gap-2.5 whitespace-nowrap text-muted transition-colors hover:text-fg">
        <span className="grid h-[18px] w-[18px] place-items-center" aria-hidden="true">
          {withIcons && <Icon className="text-[18px]" />}
        </span>
        <span className="text-sm font-medium tracking-tight">{name}</span>
      </li>
    ))}
  </ul>
);

/** Infinite, CSS-only (compositor) scrolling strip of the tools I use daily. */
const TechMarquee = () => {
  const mounted = useMounted();
  return (
    <div className="relative border-y hairline bg-elev/40 py-5" aria-label="Technologies I work with">
      <div className="mask-fade-x group flex overflow-hidden">
        <div className={`flex w-max group-hover:[animation-play-state:paused] ${mounted ? "animate-marquee" : ""}`}>
          <Row withIcons={mounted} />
          {mounted && <Row withIcons hidden />}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
