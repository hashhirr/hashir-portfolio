import { m } from "framer-motion";

/**
 * Fades + lifts its children in the first time they scroll into view.
 * Only opacity/transform are animated so it stays on the GPU compositor.
 */
const Reveal = ({ children, delay = 0, y = 24, className = "", as = "div" }) => {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
