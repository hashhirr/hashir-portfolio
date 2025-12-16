
import React from 'react';
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  flood1,
  flood2,
  rider,
  image,
} from '../assets'


// Import company logos separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tech Consultant",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
];

const experiences = [
  {
    title: "IT Head",
    company_name: "AH & HNB Digital Creations Pvt. Ltd.",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Leading IT operations and digital transformation initiatives for the company.",
      "Managing development teams and overseeing project delivery.",
      "Implementing scalable solutions and ensuring technical excellence.",
      "Collaborating with stakeholders to align technology with business goals.",
    ],
  },
  {
    title: "IT Associate",
    company_name: "Kiser Computing Consulting",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Oct 2023 - Sep 2024",
    points: [
      "Provided technical consulting services to clients across various industries.",
      "Developed and maintained web applications using modern technologies.",
      "Assisted in project planning and technical architecture decisions.",
      "Supported clients in their digital transformation journey.",
    ],
  },
  {
    title: "Front-End Developer | Consultant",
    company_name: "Freelance",
    icon: tekisky,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Developed responsive web applications and mobile apps for diverse clients.",
      "Provided technical consultation and digital strategy recommendations.",
      "Built scalable solutions using React, React Native, and Flutter.",
      "Delivered high-quality products with focus on user experience.",
    ],
  },
];

const projects = [
  {
    name: <><span className="text-red-500">🩸</span> BloodLine Connect</>,
    description: (
      <>
        <a href="https://www.bloodlinesconnect.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-semibold">www.bloodlinesconnect.com</a><br />
        <em>Founder & Lead Developer | June 2024 - Present | In Development - Alpha Testing</em><br /><br />
        AI-powered blood donation platform reducing donor search time from 48 hours to 30 minutes through intelligent matching algorithms and real-time coordination, connecting donors in emergencies.<br /><br />
        Built full-stack Progressive Web App with React 19 and Firebase, achieving <strong>89% match accuracy</strong> in alpha testing. Currently processing many emergency requests.<br /><br />
        <strong>What Makes It Special:</strong><br />
        - AI matching: blood compatibility + GPS proximity + urgency scoring<br />
        - Multi-channel alerts: Push, SMS, WhatsApp (95% delivery rate)<br />
        - Offline-capable PWA for low-bandwidth regions<br />
        - Zero-registration emergency access<br />
        - Real-time geospatial queries (5-50km radius)<br /><br />
        
        🌐 <a href="https://www.bloodlinesconnect.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Try it: www.bloodlinesconnect.com</a><br /><br />
        
      </>
    ),
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
      { name: "pwa", color: "green-text-gradient" },
      { name: "healthtech", color: "pink-text-gradient" },
      { name: "socialimpact", color: "blue-text-gradient" },
    ],
    image: image,
    source_code_link: "https://www.bloodlinesconnect.com",
  },
  {
    name: "IoT-Based Flood Prediction System",
    description:
      "Developed a real-time flood prediction system that combines hardware sensors and a mobile application to detect and alert users about potential flood risks in advance. The project focuses on early warning through environmental monitoring and predictive algorithms. I was responsible for building the mobile application and coordinating the integration between hardware and software components.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "sensors", color: "pink-text-gradient" },
      { name: "prediction", color: "blue-text-gradient" },
    ],
    image: flood1,
    source_code_link: "https://github.com/hashirqureshi",
  },
  {
    name: "Rider App – Real-Time Delivery Management",
    description:
      "A mobile application designed to streamline delivery operations for riders. The app enables riders to receive delivery requests, track parcels in real time, and update their status from pickup to delivery.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "real-time", color: "green-text-gradient" },
      { name: "notifications", color: "pink-text-gradient" },
      { name: "tracking", color: "blue-text-gradient" },
    ],
    image: rider,
    source_code_link: "https://github.com/hashirqureshi",
    details: {
      features: [
        "Real-Time Notifications: Riders receive instant updates for new delivery requests.",
        "Location Tracking: Tracks rider movement during deliveries, providing accurate ETA and route updates.",
        "Live Data Integration: Works with real customer and restaurant data to ensure accurate and efficient delivery operations.",
        "Future Enhancements: Optimized route management, advanced notifications, and additional delivery analytics.",
      ],
      technologies: [
        "React Native for cross-platform mobile development",
        "Real-time data handling and notifications",
        "Planned integration with enhanced tracking and analytics",
      ],
    },
  },
  {
    name: "Online Ambulance Service",
    description:
      "Developed a mobile application that connects users with nearby ambulance services in real time, significantly improving emergency response efficiency and saving lives. The app streamlines the process of requesting emergency medical assistance and ensures rapid response through advanced location-based technology. Integrated Google Maps API for real-time location tracking and optimized routing, enabled push notifications, and implemented secure user authentication.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "google-maps", color: "green-text-gradient" },
      { name: "location-api", color: "pink-text-gradient" },
      { name: "push-notifications", color: "blue-text-gradient" },
    ],
    // No image for this project
    source_code_link: "https://github.com/hashirqureshi",
  },
  {
    name: "Daily Doctor",
    description:
      "Developed a mobile application that allows users to consult with doctors online for everyday health issues and book appointments. The app provides a convenient way for users to get medical advice and schedule visits without leaving home. I worked on the mobile app development and user experience.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "healthcare", color: "green-text-gradient" },
      { name: "appointments", color: "pink-text-gradient" },
    ],
    // No image for this project
    source_code_link: "https://github.com/hashirqureshi",
  },
  {
    name: "Online Air Ticket Reservation System",
    description:
      "Developed a comprehensive web-based system for booking and managing air tickets. The platform allows users to register, search for available flights, make reservations, and manage their bookings online. The system features secure user authentication, a user-friendly interface, and integration with payment gateways for seamless transactions.",
    tags: [
      { name: "web-development", color: "blue-text-gradient" },
      { name: "database", color: "white-text-gradient" },
      { name: "payment-gateway", color: "green-text-gradient" },
      { name: "full-stack", color: "green-text-gradient" },
    ],
    // No image for this project
    source_code_link: "https://github.com/hashirqureshi",
  },
];

export { services, technologies, experiences, projects };
