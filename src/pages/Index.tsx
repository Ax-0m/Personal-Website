import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LazySection from "@/components/LazySection";

// Lazy load section components
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <LazySection>
          <Suspense fallback={<div className="h-[50vh]" />}>
            <About />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={<div className="h-[50vh]" />}>
            <Skills />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={<div className="h-[50vh]" />}>
            <Projects />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={<div className="h-[50vh]" />}>
            <Contact />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
