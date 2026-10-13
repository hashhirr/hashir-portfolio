/**
 * Site copy: experience, projects, skills.
 * Personal details & links come from ./config.js.
 */
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiGraphql,
  SiHasura,
  SiFirebase,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiGithubactions,
  SiStripe,
  SiTailwindcss,
  SiSwift,
  SiKotlin,
  SiSupabase,
  SiApollographql,
  SiMapbox,
  SiExpo,
  SiFastlane,
  SiRedux,
} from "react-icons/si";
import {
  LuSmartphone,
  LuGlobe,
  LuServer,
  LuDatabase,
  LuCloud,
  LuRocket,
  LuPenTool,
  LuCode,
  LuChartLine,
} from "react-icons/lu";

import { APP_LINKS, COMPANY_LINKS, REPO_LINKS } from "./config";

export const NAV_LINKS = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "stack", title: "Stack" },
  { id: "contact", title: "Contact" },
];

export const SUMMARY =
  "I'm a full stack engineer with production mobile and web platforms behind me. I own work end to end: architecture and feature delivery, cloud setup, app-store release, SEO, analytics and production debugging.";

export const MARQUEE_STACK = [
  { name: "React Native", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Hasura", icon: SiHasura },
  { name: "GraphQL", icon: SiGraphql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Mapbox", icon: SiMapbox },
  { name: "Stripe", icon: SiStripe },
  { name: "Expo", icon: SiExpo },
  { name: "Swift", icon: SiSwift },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Fastlane", icon: SiFastlane },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Supabase", icon: SiSupabase },
  { name: "Apollo", icon: SiApollographql },
  { name: "Redux", icon: SiRedux },
];

export const SKILL_GROUPS = [
  {
    title: "Mobile",
    icon: LuSmartphone,
    blurb: "Native-feeling iOS & Android apps, down to custom native modules.",
    items: ["React Native CLI & Expo", "TypeScript", "React Navigation", "Native modules", "Swift", "Kotlin", "Camera & media", "Maps", "Push notifications"],
  },
  {
    title: "Web",
    icon: LuGlobe,
    blurb: "Fast, responsive sites and dashboards built to rank.",
    items: ["React.js", "Next.js App Router", "Tailwind CSS", "Responsive UI", "SEO landing pages"],
  },
  {
    title: "Backend & APIs",
    icon: LuServer,
    blurb: "Typed APIs, auth flows and payments that hold up in production.",
    items: ["NestJS", "GraphQL / Apollo", "Hasura", "REST APIs", "Firebase Admin", "Cloud Functions", "Stripe", "Resend"],
  },
  {
    title: "Data",
    icon: LuDatabase,
    blurb: "Relational, geospatial and realtime data modelling.",
    items: ["PostgreSQL", "PostGIS", "Firestore", "Supabase", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: LuCloud,
    blurb: "Secure infrastructure and pipelines from day one.",
    items: ["AWS IAM", "S3", "CloudFront", "RDS PostgreSQL", "Firebase Hosting & App Hosting", "Auth / Storage / FCM", "App Check", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Store Release",
    icon: LuRocket,
    blurb: "Signing, listings and review: shipping is part of the job.",
    items: ["App Store Connect", "TestFlight", "Google Play Console", "Signing & certificates", "Listing optimisation", "App transfer", "Fastlane"],
  },
];

export const TOOLING = ["Zustand", "Redux", "Apollo Client", "Git", "Xcode", "Android Studio", "Postman"];

export const PIPELINE = [
  {
    step: "01",
    title: "Architect",
    icon: LuPenTool,
    text: "Data models, auth and API contracts designed for the product's next year, not just its next sprint.",
    tools: "NestJS · Hasura · PostGIS",
  },
  {
    step: "02",
    title: "Build",
    icon: LuCode,
    text: "Mobile and web features in TypeScript, from custom camera flows to booking checkouts.",
    tools: "React Native · Next.js",
  },
  {
    step: "03",
    title: "Cloud",
    icon: LuCloud,
    text: "Storage, functions, security rules and environments configured and locked down.",
    tools: "AWS · Firebase · Docker",
  },
  {
    step: "04",
    title: "Release",
    icon: LuRocket,
    text: "Signed builds, store listings, review submissions and CI/CD that make releases routine.",
    tools: "App Store · Play Console · Fastlane",
  },
  {
    step: "05",
    title: "Measure",
    icon: LuChartLine,
    text: "Analytics, conversion funnels, SEO and production debugging after launch.",
    tools: "Analytics · SEO · Monitoring",
  },
];

export const EXPERIENCES = [
  {
    company: "Dejavu Adventures",
    companyUrl: COMPANY_LINKS.dejavuAdventures,
    role: "Full Stack Web Developer",
    period: "Jun 2026 — Present",
    current: true,
    // Shown in the "Currently" card on the About section.
    brands: [
      { name: "Dejavu Adventures", url: COMPANY_LINKS.dejavuAdventures },
      { name: "Offroad Rental Hub", url: COMPANY_LINKS.offroadRentalHub },
    ],
    summary:
      "I lead web for Dubai-based Dejavu Adventures and its subsidiary Offroad Rental Hub, an off-road rental and desert adventure booking platform.",
    sites: [
      { label: "Parent company", name: "dejavuadventures.com", url: COMPANY_LINKS.dejavuAdventures },
      { label: "Subsidiary", name: "offroadrentalhub.com", url: COMPANY_LINKS.offroadRentalHub },
    ],
    points: [
      "Manage both companies' websites end to end. Every web-related operational decision across the group goes through me.",
      "Built localized commercial landing pages for dune buggy, quad bike, dirt bike and desert safari searches with canonical URLs, alternate locale paths, sitemap coverage and Open Graph metadata.",
      "Built booking, payment, refund, email and revalidation flows using Firestore, Firebase Storage, Cloud Functions, Stripe and Resend.",
      "Developed admin tools for vehicles, image uploads, bookings, customers, blogs, analytics, tracking settings, CSV export and content updates.",
      "Added conversion tracking for product views, checkout steps, purchases, WhatsApp clicks and booking funnel events.",
      "Own cloud configuration across Firebase environments, security rules, storage paths, function regions, env variables and production deploy checks.",
    ],
    stack: ["Next.js 14", "React", "Tailwind", "Zustand", "Firebase", "Stripe", "Cloud Functions", "Resend"],
  },
  {
    company: "Thunderbird Technologies",
    companyUrl: COMPANY_LINKS.thunderbird,
    role: "Full Stack Engineer",
    period: "Oct 2023 — Present",
    current: true,
    summary:
      "Lead full-stack development for Mistify, a production iOS/Android location-based social app.",
    sites: [
      { label: "iOS", name: "Mistify on the App Store", url: APP_LINKS.mistifyAppStore },
      { label: "Android", name: "Mistify on Google Play", url: APP_LINKS.mistifyPlayStore },
    ],
    points: [
      "Built custom camera and media flows with native iOS/Android work, image/video compression, thumbnails, caching, WebP conversion and S3 delivery via pre-signed URLs.",
      "Implemented Firebase auth with phone OTP, Google and Apple sign-in, NestJS token exchange, Hasura JWT claims and row-level authorization.",
      "Delivered proximity-based discovery with Mapbox and PostGIS geospatial queries, location privacy, stories, posts, follows, reactions, comments, reports and notifications.",
      "Built Firestore chat with presence, delivered/seen status, offline retry outbox, anonymous mode, block-state handling and FCM push routing.",
      "Managed production releases on Google Play and the App Store: build variants, signing, store listings, CI/CD and app transfer workflows.",
      "Built a Next.js admin & moderation dashboard with shadcn/ui, Apollo/Hasura, Firebase session handling and App Hosting deployment.",
    ],
    stack: ["React Native", "TypeScript", "NestJS", "Hasura", "PostgreSQL / PostGIS", "Firebase", "AWS", "Mapbox"],
  },
];

export const EDUCATION = {
  degree: "BS Software Engineering",
  school: "Iqra University",
  year: "2023",
  detail: "CGPA 3.25",
};

/**
 * `visual` picks the animated illustration drawn for each card
 * (see components/ProjectVisuals.jsx).
 */
export const FEATURED_PROJECTS = [
  {
    id: "mistify",
    visual: "mistify",
    name: "Mistify",
    kind: "Social media app · iOS & Android",
    description:
      "A full-scale, location-based social platform. Discover stories and people nearby, chat in real time and share media captured with a custom native camera.",
    highlights: [
      "Native camera, compression & S3 media pipeline",
      "PostGIS proximity discovery on Mapbox",
      "Firestore chat with presence & seen states",
      "Phone OTP, Google & Apple sign-in",
    ],
    stack: ["React Native", "TypeScript", "NestJS", "Hasura", "PostGIS", "Firebase", "AWS", "Mapbox"],
    links: [
      { label: "App Store", href: APP_LINKS.mistifyAppStore, kind: "appstore" },
      { label: "Google Play", href: APP_LINKS.mistifyPlayStore, kind: "playstore" },
    ],
    accent: "#FF4A1C",
  },
  {
    id: "offroad",
    visual: "offroad",
    name: "Offroad Rental Hub",
    kind: "Booking platform · Dubai",
    parent: { name: "Dejavu Adventures", url: COMPANY_LINKS.dejavuAdventures },
    description:
      "Customer website and admin platform for desert adventures and off-road rentals, with localized SEO, Stripe checkout and full content management. I run this site and the parent company's site, and own the web decisions for both.",
    highlights: [
      "Localized SEO landing pages per activity",
      "Stripe payments, refunds & Resend emails",
      "Admin for fleet, bookings, blogs & CSV export",
      "Funnel analytics through to WhatsApp clicks",
    ],
    stack: ["Next.js", "React", "Tailwind", "Zustand", "Firebase", "Stripe", "Cloud Functions"],
    links: [
      { label: "offroadrentalhub.com", href: COMPANY_LINKS.offroadRentalHub, kind: "web" },
      { label: "dejavuadventures.com", href: COMPANY_LINKS.dejavuAdventures, kind: "web" },
    ],
    accent: "#F5A524",
  },
];

export const OTHER_PROJECTS = [
  {
    id: "rydoo",
    visual: "rydoo",
    name: "Rydoo",
    kind: "Ride-booking app",
    description: "Cross-platform cab service app with Firebase and real-time location tracking.",
    stack: ["React Native", "Firebase", "Maps"],
    links: REPO_LINKS.rydoo ? [{ label: "Code", href: REPO_LINKS.rydoo, kind: "github" }] : [],
  },
  {
    id: "pulse",
    visual: "pulse",
    name: "Pulse Music",
    kind: "Music player",
    description: "Music player with playback controls, playlists, background playback and a media-focused UI.",
    stack: ["React Native", "Expo", "Redux Toolkit"],
    links: [{ label: "Code", href: REPO_LINKS.pulseMusic, kind: "github" }],
  },
  {
    id: "chat",
    visual: "chat",
    name: "Crossroad / Firechat",
    kind: "Realtime chat apps",
    description: "Firebase and Supabase chat prototypes with auth, real-time messaging, presence and push notifications.",
    stack: ["React Native", "Firestore", "Supabase", "Zustand"],
    links: [{ label: "Code", href: REPO_LINKS.crossroadChat, kind: "github" }],
  },
];
