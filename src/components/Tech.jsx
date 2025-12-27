import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { staggerContainer, staggerItem, hoverScale } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo(
        ".tech-icon",
        {
          opacity: 0,
          y: 80
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".tech-icons-wrapper",
            start: "top 80%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }
  }, [isLoading]);

  // Simulate loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="mb-8">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">Technologies</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">Tech Stack</h2>
      </div>
      <motion.div
        className="tech-icons-wrapper grid grid-cols-2 md:grid-cols-6 gap-x-1 gap-y-6 justify-items-center"
        variants={staggerContainer(0.05, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {isLoading ? (
          // Skeleton loaders
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="w-32 h-32 md:w-36 md:h-36 glass rounded-xl p-3">
              <div className="w-full h-full bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          ))
        ) : (
          technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              variants={staggerItem(index * 0.05)}
              className="group flex flex-col items-center"
            >
              <motion.div
                whileHover={hoverScale}
                whileTap={{ scale: 0.9 }}
                className="relative w-32 h-32 md:w-36 md:h-36 glass rounded-xl p-3 cursor-pointer"
              >
                <motion.img
                  src={technology.icon}
                  alt={technology.name}
                  className="tech-icon w-full h-full object-contain"
                  loading="lazy"
                  whileHover={{
                    filter: "brightness(1.2) saturate(1.3)",
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    rotate: { duration: 0.5, ease: "easeInOut" },
                    filter: { duration: 0.3 },
                  }}
                />
              </motion.div>
              <span className="mt-3 h-0 text-[12px] font-semibold tracking-[0.2em] text-white/80 opacity-0 transition duration-200 group-hover:opacity-100">
                {technology.name}
              </span>
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
