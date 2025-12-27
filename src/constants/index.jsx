import React from "react";
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  aws,
  git,
  javascript,
  reactjs,
  redux,
  firebase,
  flood1,
  kotlin,
  rider,
  image,
  postgresql,
  appStore,
  firechat,
  crossroad,
  playstore,
  appstoreConnect,
} from "../assets";

// Import company logos separately
import tekisky from "../assets/company/tekisky.webp";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Engineer",
    icon: mobile,
  },
  {
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "Backend & APIs",
    icon: backend,
  },
  {
    title: "Product Delivery",
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
    name: "Hasura",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hasura-icon-primary.png",
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Jira",
    icon: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2699%2FPNG%2F512%2Fatlassian_jira_logo_icon_170511.png&id=170511&pack_or_individual=pack",
  },
  {
    name: "docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "NestJs",
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/nestjs-jwfsqeivmvfew9nvk133ar.png/nestjs-j1at77rfuynk96ecx1d21.png?_a=DATAg1AAZAA0",
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "Zustand",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s",
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Swift",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919833.png",
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Supabase",
    icon: "https://img.icons8.com/color/512/supabase.png",
  },

  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Fastlane",
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/fastlane-icon-svg-download-png-9632962.png",
  },
  {
    name: "App Store",
    icon: appStore,
  },
  {
    name: "Google Play Store",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
  },

  {
    name: "Xcode",
    icon: "https://developer.apple.com/assets/elements/icons/xcode-s/xcode-s-256x256_2x.png",
  },
  {
    name: "Android Studio",
    icon: "https://images.icon-icons.com/1381/PNG/512/androidstudio_93831.png",
  },
];

const experiences = [
  {
    title: "Lead Software Engineer",
    company_name: "Thunderbird Technologies",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Oct 2023 – Present",
    points: [
      "Leading the development of Mistify’s core mobile application using React Native, focusing on performance, media handling, and a smooth user experience.",
      "Designed and implemented backend services using Node.js, NestJS, and cloud storage to support authentication, media uploads, and real-time features.",
      "Owned the full product development lifecycle, from technical planning and architecture decisions to deployment and iteration.",
      "Worked closely with product and design to translate requirements into scalable, production-ready solutions.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Freelance",
    icon: tekisky,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Developed responsive web applications and mobile apps for diverse clients.",
      "Built scalable solutions using React, React Native.",
      "Delivered high-quality products with focus on user experience.",
    ],
  },
];

const projects = [
  {
    name: <>Rydoo – React Native Cab Service App</>,
    description: (
      <>
        Rydo is a fully–functional, ready-to-use React Native ride-hailing
        application built with Expo, Firebase, and Google Maps. It offers a
        complete modern Uber-style experience and is perfect for businesses or
        clients looking to launch a taxi, cab, or ride-booking service.
        <br />
        This project demonstrates my ability to build production-ready mobile
        apps with real-time features, clean architecture, and scalable
        integrations.
        <br />
        <br />
      </>
    ),
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Redux", color: "blue-text-gradient" },
      { name: "Swift", color: "green-text-gradient" },
      { name: "Kotlin", color: "pink-text-gradient" },
      { name: "Hybrid App", color: "blue-text-gradient" },
    ],
    image: image,
    source_code_link: "https://github.com/hashhirr",
  },
  {
    name: "Pulse Music — Music Player Built in React Native",
    description: (
      <>
        Pulse Music is a beautifully designed, high-performance mobile music
        player built in Expo (React Native) that scans all local audio files
        from the device, displays them in a clean UI, and provides a smooth
        playback experience. It also supports downloading MP3 files from secure
        URLs and saving them directly into the device’s media library.
        <br />
        This project was built end-to-end using modern Expo + React Native
        architecture with Redux Toolkit, responsive UI techniques, and a clean,
        user-focused interface.
        <br />
        <br />
      </>
    ),
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Responsive Design", color: "blue-text-gradient" },
      { name: "Hybrid App", color: "green-text-gradient" },
    ],
    image: flood1,
    source_code_link: "https://github.com/hashhirr",
  },
  {
    name: "Mistify - Social Media Mobile Application",
    description: (
      <>
        I led the end-to-end development of a modern social media app in React
        Native with real-time stories, posts, comments, notifications, media
        uploads, and map-based discovery. I built a fully custom native camera
        for iOS and Android with filters and optimized performance. The app used
        Firebase auth, NestJS integrations, optimized native modules, and
        Zustand for global state management, including a centralized light and
        dark mode system. I also improved overall stability, reduced load times,
        and delivered a smooth, reliable user experience.The result was
        production ready across both platforms.
      </>
    ),
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "NestJS", color: "pink-text-gradient" },
      { name: "GraphQL", color: "blue-text-gradient" },
      { name: "Native App Development", color: "blue-text-gradient" },
      { name: "Swift", color: "green-text-gradient" },
      { name: "kotlin", color: "pink-text-gradient" },
      { name: "Hasura", color: "blue-text-gradient" },
      { name: "Dockers", color: "blue-text-gradient" },
      { name: "Push Notifications", color: "green-text-gradient" },
      { name: "Zustand", color: "pink-text-gradient" },
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Google Cloud Console", color: "blue-text-gradient" },
      { name: "App Store Deployment", color: "green-text-gradient" },
      { name: "Google Play Store Deployment", color: "pink-text-gradient" },
      { name: "Fastlane", color: "blue-text-gradient" },
    ],
    image: rider,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.mistify&hl=en",
  },
  {
    name: "Firechat - Firestore Chat App",
    description: (
      <>
        A fully real-time mobile chat application built using React Native and
        Firebase Firestore, designed for speed, reliability, and scalability.
        <br />
        The app supports instant message delivery, real-time updates, user
        presence, and optimized read/write operations using Firestore’s live
        listeners. Zustand is used for lightweight and efficient global state
        management, keeping chat state, user sessions, and UI updates fast and
        predictable without unnecessary re-renders.
        <br /> The architecture focuses on clean separation of concerns,
        reusable components, and performance-optimized rendering for long chat
        lists. Firebase Authentication is integrated for secure user access,
        making the app production-ready and scalable for real-world usage.
      </>
    ),

    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Firestore", color: "pink-text-gradient" },
      { name: "Zustand", color: "blue-text-gradient" },
      { name: "Real-time Sync", color: "green-text-gradient" },
    ],
    image: firechat,
    // No image for this project
    // source_code_link: "https://github.com/hashirqureshi",
  },
  {
    name: "Crossroad - Supabase Chat App",
    description: (
      <>
        A modern real-time chat application built with React Native and
        Supabase, leveraging PostgreSQL and Supabase’s real-time subscriptions
        for instant message updates.
        <br /> The app uses Supabase Auth for authentication and database-driven
        messaging with real-time listeners for seamless chat experiences.
        Zustand handles global state management, ensuring clean and efficient
        control over user sessions, message streams, and UI state across the
        app. <br />
        This project demonstrates flexibility in backend choices, strong
        understanding of real-time systems, and the ability to build scalable
        chat solutions beyond Firebase, using SQL-based backends with real-time
        capabilities.
      </>
    ),
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "Real-time Subscriptions", color: "blue-text-gradient" },
      { name: "Zustand", color: "blue-text-gradient" },
    ],
    image: crossroad,
    // No image for this project
    // source_code_link: "https://github.com/hashirqureshi",
  },
  {
    name: "App Store Deployment",
    description: (
      <>
        I handle complete mobile app deployment from scratch to production for
        both iOS App Store .
        <br /> This includes project setup, environment configuration, signing
        certificates, provisioning profiles, keystores, build pipelines,
        versioning, and release management. I manage TestFlight and internal
        testing, handle store compliance requirements, and ensure smooth
        production rollouts with optimized builds. <br />
        I’ve shipped multiple production-ready apps with proper release
        workflows, store assets, and post-deployment stability considerations.
      </>
    ),
    tags: [
      { name: "iOS App Store", color: "blue-text-gradient" },
      { name: "TestFlight", color: "green-text-gradient" },
      { name: "Production Builds", color: "pink-text-gradient" },
      { name: "Release Management", color: "blue-text-gradient" },
      { name: "Certificates", color: "green-text-gradient" },
    ],
    image: appstoreConnect,
    // No image for this project
    // source_code_link: "https://github.com/hashirqureshi",
  },
  {
    name: "Google Play Store Deployment",
    description: (
      <>
        I manage the complete Google Play Store deployment process from initial
        setup to production release for React Native applications.
        <br /> This includes configuring Android projects, generating and
        managing keystores, setting up build variants, handling app signing,
        versioning, and preparing optimized release builds (AAB). I also handle
        internal testing, closed/open testing tracks, Play Console
        configuration, and ensure compliance with Google Play policies.
        <br />
        The process is optimized for smooth updates, reliable rollouts, and
        production stability, ensuring apps are shipped with proper performance,
        security, and maintainability from day one.
      </>
    ),
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Android App Bundles (AAB)", color: "green-text-gradient" },
      { name: "Keystores", color: "pink-text-gradient" },
      { name: "Play Console", color: "blue-text-gradient" },
      { name: "Production Releases", color: "pink-text-gradient" },
    ],
    image: playstore,
    // No image for this project
    // source_code_link: "https://github.com/hashirqureshi",
  },
];

export { services, technologies, experiences, projects };
