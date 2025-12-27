import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 500);

  // Simulate 3D model loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent'>Hashir Qureshi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Building production-ready mobile apps <br/>
            Designing scalable backend systems <br/>
            Leading products from idea to launch
          </p>
        </div>
      </div>

      {/* Temporarily disabled 3D model due to geometry issues */}
      {/* {isLoading ? (
        // 3D model skeleton loader
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
            <div className="text-white text-lg">Loading 3D Model...</div>
          </div>
        </div>
      ) : (
        <ComputersCanvas />
      )} */}

      {/* {!isMobile && !isLoading && (
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <div className='flex items-center gap-3 rounded-full border border-secondary/25 bg-black/25 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary/70 backdrop-blur opacity-70'>
            <span className='hidden xs:inline'>Hold and drag horizontally</span>
            <span className='xs:hidden'>Drag horizontally</span>
            <div className='relative h-[6px] w-16 overflow-hidden rounded-full bg-secondary/15'>
              <motion.span
                animate={{ x: [0, 36, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className='absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-secondary/60'
              />
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Hero;
