import { useCallback } from "react";

/** Pair with the `.spotlight` class: moves the hover glow to follow the cursor. */
export const useSpotlight = () =>
  useCallback((event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);
