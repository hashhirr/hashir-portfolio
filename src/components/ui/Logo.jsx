/** Proximity-ring mark: a location dot with radius rings (same as the favicon). */
const Logo = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="18" fill="#0d0f14" />
    <circle cx="32" cy="32" r="19" fill="none" stroke="#6ee7b7" strokeOpacity=".4" strokeWidth="3" strokeDasharray="6 5" />
    <circle cx="32" cy="32" r="11" fill="none" stroke="#6ee7b7" strokeOpacity=".8" strokeWidth="3" />
    <circle cx="32" cy="32" r="5" fill="#6ee7b7" />
  </svg>
);

export default Logo;
