import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeaderSection from "@/components/sections/HeaderSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen font-helvetica relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-20 space-y-12 sm:space-y-20">
        <HeaderSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  );
}
