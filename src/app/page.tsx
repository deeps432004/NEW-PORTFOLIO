import React from "react";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import HowIBuildSection from "@/components/HowIBuildSection";
import CurrentlyExploringSection from "@/components/CurrentlyExploringSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030307] text-[#f1f5f9] selection:bg-cyan-500/25 selection:text-white">
      {/* Dynamic Ambient Background System */}
      <BackgroundEffects />

      {/* Primary Navigation Bar */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Selected Projects Section */}
      <ProjectsSection />

      {/* 4. Skills Section */}
      <SkillsSection />

      {/* 5. How I Build Section */}
      <HowIBuildSection />

      {/* 6. Currently Exploring Section */}
      <CurrentlyExploringSection />

      {/* 7. Contact Section */}
      <ContactSection />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
