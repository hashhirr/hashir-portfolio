/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        elev: token("elev"),
        surface: token("surface"),
        fg: token("fg"),
        muted: token("muted"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        warm: token("warm"),
        sky: token("sky"),
      },
      fontFamily: {
        sans: ['"Geist Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        ping: {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        travel: {
          "0%": { left: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" },
        },
        "travel-y": {
          "0%": { top: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        eq: {
          "0%, 100%": { transform: "scaleY(0.25)" },
          "50%": { transform: "scaleY(1)" },
        },
        blink: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        progress: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        // Hero intro: pure CSS so it plays on first paint, before any JS loads.
        rise: {
          from: { transform: "translateY(105%)" },
          to: { transform: "translateY(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pop: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "60%": { opacity: "1", transform: "scale(1.08)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "ping-slow": "ping 2.6s cubic-bezier(0, 0, 0.2, 1) infinite",
        float: "float 6s ease-in-out infinite",
        travel: "travel 3.2s cubic-bezier(.6,0,.4,1) infinite",
        "travel-y": "travel-y 3.2s cubic-bezier(.6,0,.4,1) infinite",
        eq: "eq 1.1s ease-in-out infinite",
        blink: "blink 1.4s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        rise: "rise 0.85s cubic-bezier(.22,1,.36,1) both",
        "fade-up": "fade-up 0.8s cubic-bezier(.22,1,.36,1) both",
        pop: "pop 0.6s cubic-bezier(.34,1.4,.64,1) both",
      },
    },
  },
  plugins: [
    // `light:` variant, e.g. `light:hidden`, driven by <html data-theme="light">.
    plugin(({ addVariant }) => addVariant("light", ':root[data-theme="light"] &')),
  ],
};
