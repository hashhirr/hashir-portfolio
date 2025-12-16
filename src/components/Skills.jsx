import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { staggerContainer, staggerItem, hoverScale, hoverGlow } from "../utils/motion";

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

const categories = [
  {
    title: "🚀 Core Development Skills",
    items: [
      "Mobile app development",
      "Cross-platform development",
      "Android & iOS development",
      "App architecture and state management",
    ],
  },
  {
    title: "🎨 Front-End Development",
    items: [
      "HTML, CSS, JavaScript",
      "Responsive design",
      "UI implementation",
      "(Familiar with component-based development)",
    ],
  },
  {
    title: "🗄️ Backend & Databases",
    items: [
      "Familiar with Node.js and Express.js",
      "Basic experience with MongoDB and Firebase",
      "REST API integration",
      "Data handling and authentication (introductory level)",
    ],
  },
  {
    title: "📋 Project & Team Skills",
    items: [
      "Project planning and management",
      "Version control (Git, GitHub)",
      "Agile/Scrum workflow",
      "Client communication and team collaboration",
    ],
  },
  {
    title: "⚡ Professional Strengths",
    items: [
      "Problem-solving",
      "Quick learner",
      "Adaptability",
      "Time management",
      "Attention to detail",
    ],
  },
];

const CategoryCard = ({ category, index }) => {
  const ref = useRef(null);
  useGsap(
    ref,
    {
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
    },
    index * 0.1
  );

  // Ensure leading emoji remains visible beside gradient title
  const firstSpaceIndex = category.title.indexOf(" ");
  const leadingIcon = firstSpaceIndex > 0 ? category.title.slice(0, firstSpaceIndex) : "";
  const titleText = firstSpaceIndex > 0 ? category.title.slice(firstSpaceIndex + 1) : category.title;

  return (
    <motion.div
      ref={ref}
      variants={staggerItem(index * 0.1)}
      whileHover={{ ...hoverScale, ...hoverGlow }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-tertiary/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-white/10 transition duration-300 cursor-pointer"
    >
      <div className="flex items-start gap-2 mb-4">
        {leadingIcon && <span className="text-[22px] leading-none select-none">{leadingIcon}</span>}
        <h3 className="text-[20px] font-bold bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">{titleText}</h3>
      </div>
      <div className="relative pl-4">
        <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#915EFF] via-[#60A5FA] to-[#34D399] opacity-60" />
        <ul className="list-disc list-outside pl-5 space-y-2 leading-7 list-gradient text-secondary text-[15px]">
          {category.items.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

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
        A snapshot of my current capabilities across development, collaboration, and problem-solving.
      </p>

      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {categories.map((category, index) => (
          <CategoryCard key={category.title} category={category} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "skills", { compact: true });


