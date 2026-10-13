import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts up to `to` the first time it scrolls into view. The real value is
 * what gets prerendered (crawlers / no-JS see it); it's only reset to 0 on the
 * client if the number starts below the fold, so there's no visible flicker.
 */
const CountUp = ({ to, duration = 1.4 }) => {
  const ref = useRef(null);
  const armed = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (reduced || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) {
      armed.current = true;
      setValue(0);
    }
  }, [reduced]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    armed.current = false;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
};

export default CountUp;
