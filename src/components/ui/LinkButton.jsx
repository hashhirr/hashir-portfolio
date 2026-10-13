import { LuArrowUpRight, LuGlobe } from "react-icons/lu";
import { FaApple, FaGithub, FaGooglePlay } from "react-icons/fa6";

const ICONS = {
  appstore: FaApple,
  playstore: FaGooglePlay,
  github: FaGithub,
  web: LuGlobe,
};

/** External link styled as a pill button, with an icon chosen by `kind`. */
const LinkButton = ({ href, label, kind, variant = "ghost", className = "" }) => {
  const Icon = ICONS[kind];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "primary" ? "btn-primary" : "btn-ghost"} group !px-4 !py-2.5 ${className}`}
    >
      {Icon && <Icon className="text-[15px]" aria-hidden="true" />}
      {label}
      <LuArrowUpRight
        aria-hidden="true"
        className="text-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
};

export default LinkButton;
