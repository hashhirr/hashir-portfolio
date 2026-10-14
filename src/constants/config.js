/**
 * ──────────────────────────────────────────────────────────────────────
 *  SITE CONFIG
 *  Your personal details, contact info and links. Every component reads
 *  from here, so this is the only file you need to touch to update them.
 *  (Experience / project copy lives in ./content.js)
 * ──────────────────────────────────────────────────────────────────────
 */

export const PROFILE = {
  name: "Hashir Ahmad Qureshi",
  shortName: "Hashir Qureshi",
  initials: "HQ",
  role: "Full Stack Engineer",
  specialty: "React Native Developer",
  location: "Pakistan · Working remotely",
  availability: "Open to select projects",
  // Used to calculate the "years of experience" counter on the site.
  careerStart: "2023-10-01",
};

export const CONTACT = {
  email: "hashirq1999@gmail.com",
  // Displayed as written; the tel: link strips spaces/dashes automatically.
  phone: "+92 312 9159951",
};

export const SOCIALS = {
  github: "https://github.com/hashhirr",
  linkedin: "https://www.linkedin.com/in/hashirr-qureshii/",
};

export const CV = {
  // File inside /public. Replace the PDF there to update your CV.
  file: "Hashir-Qureshi-CV.pdf",
  // File name visitors get when they download it.
  downloadName: "Hashir-Ahmad-Qureshi-CV.pdf",
};

export const COMPANY_LINKS = {
  flockbee: "https://flockbee.com/", // co-founder
  dejavuAdventures: "https://dejavuadventures.com/", // parent company
  offroadRentalHub: "https://offroadrentalhub.com/", // subsidiary
  // Leave empty to show the company name without a link.
  thunderbird: "",
};

export const APP_LINKS = {
  mistifyAppStore: "https://apps.apple.com/au/app/mistify/id6744645517",
  mistifyPlayStore: "https://play.google.com/store/apps/details?id=com.mistify",
};

export const REPO_LINKS = {
  pulseMusic: "https://github.com/hashhirr/react_native_music_Player",
  crossroadChat: "https://github.com/hashhirr/crossroad_chat_app",
  // Leave empty to hide the "Code" button on a project.
  rydoo: "",
};

/**
 * Contact form. Values come from a .env file:
 *   VITE_APP_EMAILJS_SERVICE_ID=...
 *   VITE_APP_EMAILJS_TEMPLATE_ID=...
 *   VITE_APP_EMAILJS_PUBLIC_KEY=...
 * If any are missing, the form falls back to opening the visitor's email app.
 */
export const EMAILJS = {
  serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
};

export const ANALYTICS = {
  // Google Analytics 4 ID, e.g. "G-XXXXXXXXXX". Leave empty to disable.
  gaMeasurementId: "",
};

// ── Derived helpers (no need to edit) ───────────────────────────────────
export const cvHref = `${import.meta.env.BASE_URL}${CV.file}`;
export const phoneHref = `tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`;
export const emailHref = `mailto:${CONTACT.email}`;

export const yearsOfExperience = () => {
  const start = new Date(PROFILE.careerStart);
  const years = (Date.now() - start.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.max(1, Math.floor(years));
};
