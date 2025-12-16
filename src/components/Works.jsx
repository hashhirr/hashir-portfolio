import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { staggerContainer, staggerItem, hoverScale, hoverGlow } from "../utils/motion";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const cardRef = useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating project cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Start off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
          end: "top center",    // End when the top reaches the center of the viewport
          scrub: true,          // Smoothly sync scroll and animation
          markers: false,       // Set to `true` to see debug markers
        },
      }
    );
  }, []);

  // Simulate loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000 + index * 200); // Stagger loading times
    return () => clearTimeout(timer);
  }, [index]);

  if (isLoading) {
    return (
      <div ref={cardRef}>
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          {/* Image skeleton */}
          <div className="w-full h-[230px] bg-gray-700 rounded-2xl animate-pulse"></div>
          
          {/* Content skeleton */}
          <div className="mt-5">
            <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4"></div>
            <div className="mt-2 space-y-2">
              <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse w-4/6"></div>
            </div>
          </div>
          
          {/* Tags skeleton */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="h-4 bg-gray-700 rounded animate-pulse w-16"></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse w-20"></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse w-14"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      variants={staggerItem(index * 0.1)}
      whileHover={hoverScale}
      whileTap={{ scale: 0.95 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
      >
        {image && (
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={`Screenshot of ${name} project`}
              className="w-full h-full object-cover object-center rounded-2xl"
              loading="lazy"
            />

            {source_code_link && source_code_link.includes('github.com') && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt={`GitHub repository for ${name}`}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <div className={image ? "mt-5" : "mt-0"}>
          <h3 className="font-bold text-[22px] leading-7 bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">{name}</h3>
          <p className="mt-2 text-[14px] leading-6 desc-paragraph">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`chip chip-glass ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {!image && source_code_link && source_code_link.includes('github.com') && (
          <div className="mt-4 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt={`GitHub repository for ${name}`}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  useEffect(() => {
    // Stagger effect for project cards
    gsap.fromTo(
      ".project-card", // Select all project cards
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Stagger delay of 0.3 seconds between each card
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",  // Trigger when the top of the container reaches the bottom
          end: "top center",
          scrub: true,
          markers: false, // Set to true to see debug markers
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}>My work</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}>Projects</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-[17px] max-w-3xl leading-[30px] desc-paragraph decorated">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>

      <motion.div
        className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5"
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            className="project-card"
            whileHover={hoverGlow}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard index={index} {...project} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
