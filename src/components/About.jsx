import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import {
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverGlow,
} from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current, animation.from, {
        ...animation.to,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={staggerItem(index * 0.1)}
      whileHover={hoverScale}
      whileTap={{ scale: 0.95 }}
      className="xs:w-[250px] w-full"
    >
      <Tilt className="w-full">
        <motion.div
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          whileHover={hoverGlow}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer"
            whileHover={{
              background:
                "linear-gradient(135deg, rgba(145, 94, 255, 0.1), rgba(96, 165, 250, 0.1))",
            }}
            transition={{ duration: 0.3 }}
          >
            {icon && (
              <motion.img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain"
                loading="lazy"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            )}
            <motion.h3
              className="text-[20px] font-bold text-center bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
          </motion.div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    <>
      <div ref={headingRef}>
        <p
          className={`${styles.sectionSubText} bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}
        >
          Introduction
        </p>
        <h2
          className={`${styles.sectionHeadText} bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}
        >
          Overview
        </h2>
      </div>

      <p
        ref={paragraphRef}
        className="mt-4 text-[17px] max-w-3xl leading-[30px] desc-paragraph decorated"
      >
        I’m a Senior React Native developer with 3+ years of experience building
        high-performance, scalable, and visually polished mobile applications. I
        specialize in React Native (both React Native CLI and Expo), TypeScript,
        advanced media handling, custom native iOS/Android modules, and seamless
        backend integrations using NestJS, Firebase, and Hasura GraphQL. I’ve
        built full production-grade apps from scratch, including social media
        platforms, real-time chat systems, map-based applications, and
        interactive content platforms with heavy image/video workflows. I focus
        heavily on performance, smooth animations, clean architecture, and
        pixel-perfect UI/UX.
        <br />
        <br /> I also have complete end-to-end experience with the entire app
        launch lifecycle, including preparing builds, signing, certificates,
        provisioning, store listing creation, and publishing apps to both the
        iOS App Store and Google Play Store. I can also automate deployment
        pipelines using Fastlane, making build distribution, screenshots, and
        release submissions faster and more reliable. This means I can take your
        project from idea → development → deployment → ongoing updates.
      </p>

      <div className="mt-6">
        <a
          href={`${import.meta.env.BASE_URL}Hashir-Qureshi-CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-block btn-gradient px-5 py-2 text-[16px] font-medium"
        >
          Download CV
        </a>
      </div>

      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10"
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
