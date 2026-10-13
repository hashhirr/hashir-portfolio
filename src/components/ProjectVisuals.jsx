import { useRef } from "react";
import { m } from "framer-motion";
import {
  LuBell,
  LuCamera,
  LuCheck,
  LuCheckCheck,
  LuGlobe,
  LuMapPin,
  LuMessageCircle,
  LuPause,
  LuShieldCheck,
  LuSkipBack,
  LuSkipForward,
} from "react-icons/lu";
import { FaApple, FaAndroid } from "react-icons/fa6";

import mistifyIcon from "../assets/projects/mistify-icon.png";
import { usePauseOffscreen } from "../hooks/usePauseOffscreen";

/* ── Mistify: app icon with its feature set in orbit ─────────────────── */
const ORBIT = [
  { Icon: LuCamera, label: "Native camera" },
  { Icon: LuMapPin, label: "Proximity" },
  { Icon: LuMessageCircle, label: "Chat" },
  { Icon: LuShieldCheck, label: "Auth" },
  { Icon: LuBell, label: "Push" },
];

const MistifyVisual = () => (
  <div className="absolute inset-0 grid place-items-center overflow-hidden">
    <div
      className="absolute inset-0"
      style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,74,28,0.22), transparent 60%)" }}
    />
    <div className="relative h-[230px] w-[230px] sm:h-[300px] sm:w-[300px]">
      <div className="absolute inset-[18%] rounded-full border border-dashed hairline" />
      <div className="absolute inset-0 rounded-full border hairline" />

      <div className="absolute inset-0 animate-[spin-slow_36s_linear_infinite]">
        {ORBIT.map(({ Icon, label }, i) => {
          const angle = (i / ORBIT.length) * 2 * Math.PI - Math.PI / 2;
          return (
            <div
              key={label}
              className="absolute"
              style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <div className="flex animate-[spin-slow_36s_linear_infinite_reverse] items-center gap-1.5 whitespace-nowrap rounded-full border hairline bg-elev px-2.5 py-1.5 text-[11px] font-medium shadow-lg">
                  <Icon className="text-[13px] text-[#FF4A1C]" aria-hidden="true" />
                  {label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 animate-ping-slow rounded-[26px] bg-[#FF4A1C]/30" />
        <img
          src={mistifyIcon}
          alt="Mistify app icon"
          width="88"
          height="88"
          loading="lazy"
          decoding="async"
          className="relative h-[88px] w-[88px] rounded-[24px] shadow-[0_20px_40px_-10px_rgba(255,74,28,0.6)]"
        />
      </div>
    </div>

    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
      <span className="chip gap-1.5 bg-elev">
        <FaApple aria-hidden="true" /> iOS
      </span>
      <span className="chip gap-1.5 bg-elev">
        <FaAndroid aria-hidden="true" /> Android
      </span>
    </div>
  </div>
);

/* ── Offroad Rental Hub: a buggy riding the dunes + booking toast ────── */
const DUNE_RIDGE = "M-20 170 C 60 120, 120 115, 190 150 S 330 200, 420 140";

const OffroadVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5A524" stopOpacity="0" />
          <stop offset="1" stopColor="#F5A524" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="dune-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7B955" />
          <stop offset="1" stopColor="#D9822B" />
        </linearGradient>
        <linearGradient id="dune-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E89A3C" />
          <stop offset="1" stopColor="#B8621C" />
        </linearGradient>
        <radialGradient id="sun-glow">
          <stop offset="0" stopColor="#FCD38A" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FCD38A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#sky)" />
      <circle cx="300" cy="78" r="80" fill="url(#sun-glow)" />
      <circle cx="300" cy="78" r="28" fill="#FCD38A" />
      <path d="M-20 150 C 70 110, 150 140, 230 120 S 360 90, 420 115 V 300 H -20 Z" fill="#C9772A" opacity="0.45" />
      <path d={`${DUNE_RIDGE} V 300 H -20 Z`} fill="url(#dune-a)" />
      <path d="M-20 235 C 80 200, 170 230, 260 215 S 380 190, 420 205 V 300 H -20 Z" fill="url(#dune-b)" />
      <path d="M40 255 C 90 245, 130 250, 170 258" stroke="#fff" strokeOpacity=".18" strokeWidth="2" fill="none" />
      <path d="M220 270 C 260 262, 300 265, 340 272" stroke="#fff" strokeOpacity=".18" strokeWidth="2" fill="none" />

      <g>
        <g transform="translate(-20 -26) scale(1.25)">
          <path d="M2 10 L6 4 H26 L31 10 Z" fill="#fff7ea" />
          <path d="M9 4 L13 -3 H22 L25 4" stroke="#fff7ea" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <rect x="17" y="5" width="7" height="4" rx="1" fill="#F5A524" />
          <circle cx="8" cy="13" r="5" fill="#1f1a14" stroke="#fff7ea" strokeWidth="1.5" />
          <circle cx="25" cy="13" r="5" fill="#1f1a14" stroke="#fff7ea" strokeWidth="1.5" />
        </g>
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path={DUNE_RIDGE} />
      </g>
    </svg>

    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border hairline bg-elev/90 p-3 pr-4 shadow-xl backdrop-blur sm:left-6 sm:top-6"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-ink">
        <LuCheck strokeWidth={3} aria-hidden="true" />
      </span>
      <div className="leading-tight">
        <p className="text-[13px] font-semibold">Booking confirmed</p>
        <p className="text-[11px] text-muted">Dune buggy · Desert safari</p>
      </div>
    </m.div>

    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="absolute right-4 top-[38%] hidden items-center gap-2 rounded-full border hairline bg-elev/90 px-3 py-1.5 text-[11px] font-medium shadow-lg backdrop-blur xs:flex sm:right-6"
    >
      <LuGlobe className="text-warm" aria-hidden="true" /> Localized SEO pages
    </m.div>
  </div>
);

/* ── Rydoo: live route with a moving car ─────────────────────────────── */
const ROUTE = "M40 170 C 90 170, 90 120, 150 120 S 220 60, 270 70 S 320 50, 340 50";

const RydooVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg viewBox="0 0 380 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g style={{ stroke: "rgb(var(--fg) / 0.06)" }} strokeWidth="1">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={`v${i}`} d={`M${i * 34} 0V240`} />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <path key={`h${i}`} d={`M0 ${i * 34}H380`} />
        ))}
      </g>
      <path d={ROUTE} style={{ stroke: "rgb(var(--fg) / 0.12)" }} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d={ROUTE} style={{ stroke: "rgb(var(--accent))" }} strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 8">
        <animate attributeName="stroke-dashoffset" from="0" to="-56" dur="1.6s" repeatCount="indefinite" />
      </path>
      <circle cx="40" cy="170" r="7" style={{ fill: "rgb(var(--accent))" }} />
      <circle cx="40" cy="170" r="13" style={{ fill: "rgb(var(--accent))" }} opacity=".2" />
      <circle cx="340" cy="50" r="7" style={{ fill: "rgb(var(--warm))" }} />
      <circle cx="340" cy="50" r="13" style={{ fill: "rgb(var(--warm))" }} opacity=".2" />
      <g>
        <rect x="-9" y="-6" width="18" height="12" rx="4" style={{ fill: "rgb(var(--fg))" }} />
        <rect x="2" y="-4" width="5" height="8" rx="1.5" style={{ fill: "rgb(var(--bg))" }} opacity=".6" />
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" path={ROUTE} />
      </g>
    </svg>
    <span className="chip absolute bottom-3 right-3 gap-1.5 bg-elev">
      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent" /> Driver on the way · live
    </span>
  </div>
);

/* ── Pulse Music: equaliser + now playing ────────────────────────────── */
const BARS = [0.5, 0.9, 0.65, 1, 0.75, 0.45, 0.85, 0.6, 0.95, 0.55, 0.8, 0.4, 0.7, 0.9, 0.5, 0.65];

const PulseVisual = () => (
  <div className="absolute inset-0 flex flex-col justify-between overflow-hidden p-4">
    <div className="flex h-[55%] items-end justify-center gap-[5px] pt-4">
      {BARS.map((h, i) => (
        <span
          key={i}
          className="w-[7px] origin-bottom animate-eq rounded-full bg-gradient-to-t from-accent to-sky"
          style={{ height: `${h * 100}%`, animationDelay: `${(i % 5) * 0.13 + (i % 3) * 0.07}s` }}
        />
      ))}
    </div>
    <div className="rounded-2xl border hairline bg-elev/90 p-3">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-sky to-accent" />
        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-[12px] font-semibold">Now playing</p>
          <p className="truncate text-[10.5px] text-muted">Background playback on</p>
        </div>
        <div className="flex items-center gap-2 text-muted">
          <LuSkipBack aria-hidden="true" />
          <span className="grid h-7 w-7 place-items-center rounded-full bg-fg text-bg">
            <LuPause className="text-[12px]" aria-hidden="true" />
          </span>
          <LuSkipForward aria-hidden="true" />
        </div>
      </div>
      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-fg/10">
        <div className="h-full w-full origin-left animate-[progress_12s_linear_infinite] rounded-full bg-accent" />
      </div>
    </div>
  </div>
);

/* ── Chat apps: messages, typing and seen receipts ───────────────────── */
const ChatVisual = () => (
  <div className="absolute inset-0 flex flex-col justify-center gap-2.5 overflow-hidden px-5">
    {[
      { me: false, text: "Did the build go out?" },
      { me: true, text: "Yep, live on both stores", seen: true },
    ].map((msg, i) => (
      <m.div
        key={msg.text}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + i * 0.35 }}
        className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[12.5px] ${
          msg.me ? "self-end rounded-br-md bg-accent text-accent-ink" : "self-start rounded-bl-md border hairline bg-elev"
        }`}
      >
        {msg.text}
        {msg.seen && (
          <span className="ml-2 inline-flex items-center gap-0.5 align-middle text-[10px] opacity-70">
            <LuCheckCheck aria-hidden="true" /> Seen
          </span>
        )}
      </m.div>
    ))}
    <div className="flex items-center gap-2 self-start">
      <span className="relative grid h-6 w-6 place-items-center rounded-full bg-sky/20 text-[10px] font-semibold text-sky">
        A<span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-elev bg-accent" />
      </span>
      <span className="flex gap-1 rounded-full border hairline bg-elev px-3 py-2.5">
        {[0, 0.2, 0.4].map((d) => (
          <span key={d} className="h-1.5 w-1.5 animate-blink rounded-full bg-muted" style={{ animationDelay: `${d}s` }} />
        ))}
      </span>
    </div>
  </div>
);

const VISUALS = {
  mistify: MistifyVisual,
  offroad: OffroadVisual,
  rydoo: RydooVisual,
  pulse: PulseVisual,
  chat: ChatVisual,
};

const ProjectVisual = ({ name, className = "" }) => {
  const ref = useRef(null);
  usePauseOffscreen(ref);
  const Visual = VISUALS[name];
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {Visual && <Visual />}
    </div>
  );
};

export default ProjectVisual;
