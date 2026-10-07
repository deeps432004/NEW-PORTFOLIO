import AboutSection from "@/components/AboutSection";
import BackgroundEffects from "@/components/BackgroundEffects";
import CharacterPlaceholder from "@/components/CharacterPlaceholder";
import ContactSection from "@/components/ContactSection";
import CurrentlyExploringSection from "@/components/CurrentlyExploringSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowIBuildSection from "@/components/HowIBuildSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <BackgroundEffects />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <HowIBuildSection />
      <CurrentlyExploringSection />
      <ContactSection />

      <Footer />
    </main>
  );
}