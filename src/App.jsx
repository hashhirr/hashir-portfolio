import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Pipeline from "./components/Pipeline";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";

// LazyMotion + `m` components keep only the animation features we use in the bundle.
const App = () => (
  <ErrorBoundary>
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <ScrollProgress />
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main id="top" className="relative overflow-x-clip">
          <Hero />
          <TechMarquee />
          <About />
          <Projects />
          <Experience />
          <Pipeline />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  </ErrorBoundary>
);

export default App;
