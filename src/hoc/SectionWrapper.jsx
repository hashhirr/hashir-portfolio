import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName, options = {}) =>
  function HOC() {
    const paddingClass = options.compact ? `${styles.paddingX} sm:py-10 py-6` : styles.padding;
    return (
      <motion.section
        variants={staggerContainer(0.15, 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
        className={`${paddingClass} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left'
        />
      </motion.section>
    );
  };

export default StarWrapper;
