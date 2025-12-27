import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { staggerContainer, staggerItem } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const whatIDoItems = [
  "End-to-end mobile app development (iOS & Android)",
  "React Native CLI & Expo development",
  "React Native with TypeScript & state management architecture",
  "Firebase Authentication (Phone, Google, Apple)",
  "Firebase Analytics, Crashlytics & event tracking setup",
  "NestJS, Hasura GraphQL & backend integration",
  "Custom Native Modules (Swift & Kotlin), including fully customized camera systems",
  "Image & video compression, processing & uploads (S3, Cloud Storage)",
  "Mapbox development: clustering, tiles, custom layers",
  "Real-time chat, messaging systems & presence indicators",
  "Push notifications (FCM/APNs), background handling & delivery optimization",
  "Real-time updates, sockets & background tasks",
  "Performance optimization, animations & UI responsiveness",
  "Code refactoring, debugging & app stabilization",
  "App Store + Play Store deployment, signing, and release management",
  "Automated CI/CD pipelines using Fastlane for iOS & Android",
  "0-100 app launch: build setup -> metadata -> review submission -> updates",
];

const Skills = () => {
  const headingRef = useRef(null);
  const subRef = useRef(null);

  useGsap(headingRef, {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" },
  });

  useGsap(subRef, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
  }, 0.15);

  return (
    <>
      <div ref={headingRef}>
        <p className={`${styles.sectionSubText} bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}>Skills</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}>What I Do</h2>
      </div>

      <p ref={subRef} className="mt-4 text-[17px] max-w-3xl leading-[30px] desc-paragraph decorated">
        End-to-end skills covering mobile development, backend integration, and release operations.
      </p>

      <motion.ul
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-5xl"
        variants={staggerContainer(0.06, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {whatIDoItems.map((item, index) => (
          <motion.li
            key={item}
            variants={staggerItem(index * 0.03)}
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-[15px] leading-[24px] text-white/80"
          >
            {/* <span className="mt-[2px] text-[#60A5FA]" aria-hidden="true">
              ✓
            </span> */}
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default SectionWrapper(Skills, "skills", { compact: true });

