import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { LuHeart, LuMapPin, LuMessageCircle, LuRocket } from "react-icons/lu";

/*
 * A generic location-based social app screen: map, proximity radius, people
 * pins, push notifications and a stories sheet. Deliberately unbranded. The
 * phone keeps its own dark app palette in both site themes, like a product shot.
 */

const MINT = "#6ee7b7";

const PINS = [
  { x: 20, y: 27, initials: "AK", from: "#f472b6", to: "#fb923c" },
  { x: 77, y: 21, initials: "SR", from: "#facc15", to: "#f97316" },
  { x: 82, y: 47, initials: "MZ", from: "#60a5fa", to: "#a78bfa" },
  { x: 23, y: 54, initials: "HN", from: "#34d399", to: "#22d3ee" },
  { x: 63, y: 59, initials: "LA", from: "#c084fc", to: "#f472b6" },
];

const STORIES = [
  { name: "You", from: "#3f3f46", to: "#52525b", self: true },
  { name: "Aisha", from: "#f472b6", to: "#fb923c" },
  { name: "Omar", from: "#60a5fa", to: "#a78bfa" },
  { name: "Zara", from: "#facc15", to: "#f97316" },
  { name: "Bilal", from: "#34d399", to: "#22d3ee" },
];

const NOTIFICATIONS = [
  { app: "Nearby", Icon: LuMapPin, color: "#10b981", title: "3 new stories nearby", body: "Posted within 2 km of you" },
  { app: "Messages", Icon: LuMessageCircle, color: "#3b82f6", title: "New message from Aisha", body: "Delivered · Seen just now" },
  { app: "Releases", Icon: LuRocket, color: "#f59e0b", title: "Version 2.4.0 is live", body: "Approved on iOS & Android" },
];

const MapLayer = () => (
  <svg viewBox="0 0 90 190" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
    <rect width="90" height="190" fill="#0b0f14" />
    <path d="M58 70C70 64 86 70 88 84C90 98 76 104 64 100C54 96 50 78 58 70Z" fill="#11241b" />
    <path d="M-5 118C10 113 24 126 21 143C18 160 5 170-5 168Z" fill="#0e1d2c" />
    <g stroke="#151a21" strokeWidth="1.6" fill="none">
      <path d="M60-5L68 195" />
      <path d="M-5 30L95 38" />
      <path d="M45 60L40 195" />
      <path d="M-5 150L95 140" />
      <path d="M75-5L82 60" />
      <path d="M8-5L4 80" />
    </g>
    <g stroke="#1b212a" strokeWidth="4.5" fill="none" strokeLinecap="round">
      <path d="M-5 58C25 52 55 72 95 62" />
      <path d="M22-5C28 40 14 95 30 195" />
      <path d="M-5 112C35 104 58 126 95 114" />
    </g>
    <g fill="#3a4350" fontSize="3.1" fontFamily="ui-sans-serif, system-ui" letterSpacing=".3">
      <text x="62" y="86">PARK</text>
      <text x="2" y="138">MARINA</text>
      <text x="34" y="45">DOWNTOWN</text>
    </g>
  </svg>
);

const ProximityRadius = () => (
  <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
    <div
      className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed"
      style={{ borderColor: `${MINT}66`, background: `radial-gradient(circle, ${MINT}14, transparent 70%)` }}
    />
    <span className="absolute left-1/2 top-1/2 -ml-8 -mt-8 h-16 w-16 animate-ping-slow rounded-full" style={{ background: `${MINT}40` }} />
    <span
      className="absolute left-1/2 top-1/2 -ml-8 -mt-8 h-16 w-16 animate-ping-slow rounded-full [animation-delay:1.3s]"
      style={{ background: `${MINT}40` }}
    />
    <span
      className="relative block h-4 w-4 rounded-full border-2 border-white"
      style={{ background: MINT, boxShadow: `0 0 0 5px ${MINT}33, 0 0 18px ${MINT}` }}
    />
  </div>
);

const Pin = ({ x, y, initials, from, to, index }) => (
  <div className="absolute -translate-x-1/2 -translate-y-full" style={{ left: `${x}%`, top: `${y}%` }}>
    <div className="animate-pop" style={{ animationDelay: `${0.9 + index * 0.22}s` }}>
      <div className="flex animate-float flex-col items-center" style={{ animationDelay: `${index * 0.7}s` }}>
        <div className="rounded-full p-[2px] shadow-lg" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
          <div className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0b0f14] bg-[#1a1f27] text-[9px] font-bold text-white">
            {initials}
          </div>
        </div>
        <span className="-mt-[2px] h-2 w-2 rotate-45 rounded-[1px]" style={{ background: to }} />
      </div>
    </div>
  </div>
);

const Notification = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    const cycle = (show) => {
      setVisible(show);
      if (!show) setIndex((i) => (i + 1) % NOTIFICATIONS.length);
      timer = setTimeout(() => cycle(!show), show ? 3200 : 1400);
    };
    timer = setTimeout(() => cycle(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const n = NOTIFICATIONS[index];

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          key={index}
          initial={{ opacity: 0, y: -24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -18, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="absolute inset-x-2.5 top-11 z-20 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#1b1f27]/95 p-2.5 shadow-2xl"
          role="presentation"
        >
          <span
            className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[8px] text-white"
            style={{ background: `linear-gradient(135deg, ${n.color}, ${n.color}b3)` }}
          >
            <n.Icon className="text-[15px]" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="flex items-center justify-between text-[10px] text-white/45">
              <span className="font-semibold uppercase tracking-wide">{n.app}</span>
              <span>now</span>
            </div>
            <p className="truncate text-[11.5px] font-semibold text-white">{n.title}</p>
            <p className="truncate text-[10.5px] text-white/60">{n.body}</p>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

const StatusBar = () => (
  <>
    <div className="absolute left-1/2 top-2 z-30 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
    <div className="absolute inset-x-0 top-0 z-10 flex h-9 items-center justify-between px-6 pt-1 text-[11px] font-semibold text-white">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="flex items-end gap-[1.5px]">
          {[4, 6, 8, 10].map((h) => (
            <span key={h} className="w-[2.5px] rounded-sm bg-white" style={{ height: h }} />
          ))}
        </span>
        <span className="ml-1 h-[10px] w-[20px] rounded-[3px] border border-white/60 p-[1.5px]">
          <span className="block h-full w-3/4 rounded-[1.5px] bg-white" />
        </span>
      </span>
    </div>
  </>
);

const SearchBar = () => (
  <div className="absolute inset-x-3 top-11 z-10 flex items-center justify-between gap-2 text-[10.5px]">
    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#11161d]/90 px-3 py-2 text-white/85">
      <span className="h-1.5 w-1.5 animate-blink rounded-full" style={{ background: MINT }} />
      Nearby · 2 km
    </span>
    <span className="flex rounded-full border border-white/10 bg-[#11161d]/90 p-0.5 text-white/60">
      <span className="rounded-full bg-white/10 px-2.5 py-1.5 text-white">Stories</span>
      <span className="px-2.5 py-1.5">People</span>
    </span>
  </div>
);

const StoriesSheet = () => (
  <div className="absolute inset-x-0 bottom-0 z-10 h-[35%] rounded-t-[26px] border-t border-white/10 bg-[#0f1319]/95 px-3.5 pt-2">
    <div className="mx-auto h-1 w-9 rounded-full bg-white/20" />
    <div className="mt-2.5 flex items-center justify-between">
      <span className="text-[12px] font-semibold text-white">Stories nearby</span>
      <span className="text-[10px]" style={{ color: MINT }}>
        See all
      </span>
    </div>
    <div className="mt-2.5 flex justify-between">
      {STORIES.map((s) => (
        <div key={s.name} className="flex flex-col items-center gap-1">
          <div className="rounded-full p-[2px]" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}>
            <div className="grid h-[34px] w-[34px] place-items-center rounded-full border-2 border-[#0f1319] bg-[#1f2530] text-[11px] font-semibold text-white/80">
              {s.self ? "+" : s.name[0]}
            </div>
          </div>
          <span className="text-[9px] text-white/50">{s.name}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-white/[0.05] p-2">
      <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-[#fb923c] via-[#f472b6] to-[#6366f1]" />
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-[11px] font-medium text-white/90">Sunset at the marina</p>
        <p className="text-[9.5px] text-white/45">0.8 km away · 2m ago</p>
      </div>
      <span className="flex items-center gap-1 text-[10px] text-white/60">
        <LuHeart className="text-[#f472b6]" /> 24
      </span>
    </div>
  </div>
);

const PhoneMockup = ({ className = "" }) => (
  <div
    className={`relative aspect-[9/19.3] w-[248px] rounded-[44px] bg-gradient-to-b from-[#34373f] via-[#1c1e23] to-[#121318] p-[9px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] sm:w-[276px] ${className}`}
    role="img"
    aria-label="Example social app screen showing nearby people on a map, a proximity radius and stories"
  >
    <span className="absolute -left-[2px] top-[22%] h-10 w-[3px] rounded-l bg-[#2a2d33]" />
    <span className="absolute -left-[2px] top-[32%] h-14 w-[3px] rounded-l bg-[#2a2d33]" />
    <span className="absolute -right-[2px] top-[28%] h-20 w-[3px] rounded-r bg-[#2a2d33]" />
    <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-[#0b0f14]">
      <MapLayer />
      <ProximityRadius />
      {PINS.map((p, i) => (
        <Pin key={p.initials} index={i} {...p} />
      ))}
      <StatusBar />
      <SearchBar />
      <Notification />
      <StoriesSheet />
    </div>
  </div>
);

export default PhoneMockup;
