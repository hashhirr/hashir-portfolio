import { SKILL_GROUPS, TOOLING } from "../constants/content";
import { useSpotlight } from "../hooks/useSpotlight";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const SkillCard = ({ group, index }) => {
  const onMove = useSpotlight();
  const { title, icon: Icon, blurb, items } = group;

  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <div onMouseMove={onMove} className="card spotlight group h-full p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
            <Icon className="text-[20px]" aria-hidden="true" />
          </span>
          <span className="font-mono text-[11px] text-muted">{String(items.length).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{blurb}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {items.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const Stack = () => (
  <section id="stack" className="relative py-16 sm:py-24">
    <div className="container-x">
      <SectionHeading
        index="05"
        eyebrow="Stack"
        title="Tools I reach for,"
        accent="across every layer."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.title} group={group} index={i} />
        ))}
      </div>

      <Reveal className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted">
        <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.18em]">State & tooling</span>
        {TOOLING.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Stack;
