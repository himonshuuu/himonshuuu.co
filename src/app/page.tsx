"use client";

import SkillsSection from "@/components/Skills";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen font-helvetica bg-gradient-to-b from-foreground/[0.03] to-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-20 space-y-12 sm:space-y-20">
        <Header />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
