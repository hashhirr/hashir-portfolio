import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain'
            loading="lazy"
          />
        </div>
      }
    >
      <div className='rounded-xl border border-white/5 hover:border-white/10 transition-colors duration-300 p-4 -m-4'>
        <div>
          <h3 className='text-[24px] font-bold bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent'>
            {experience.title}
          </h3>
          <p
            className='text-[16px] font-semibold bg-gradient-to-r from-[#C4B5FD] via-[#93C5FD] to-[#6EE7B7] bg-clip-text text-transparent opacity-90'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <div className='h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4' />

        <div className='relative pl-4'>
          <span className='absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#915EFF] via-[#60A5FA] to-[#34D399] opacity-60' />
          <ul className='list-disc list-outside pl-5 space-y-2 leading-7 list-gradient transition-colors duration-300'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
