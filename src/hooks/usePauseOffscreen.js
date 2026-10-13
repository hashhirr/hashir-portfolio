import { useEffect } from "react";

/**
 * Pauses CSS and SVG (SMIL) animations inside `ref` while it is off screen,
 * so looping decorations cost nothing when you can't see them.
 */
export const usePauseOffscreen = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      el.toggleAttribute("data-offscreen", !visible);
      el.querySelectorAll("svg").forEach((svg) => {
        if (visible) svg.unpauseAnimations?.();
        else svg.pauseAnimations?.();
      });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
};
