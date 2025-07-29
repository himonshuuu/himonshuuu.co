import Link from "next/link";
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
} from "react-icons/si";

import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 font-helvetica">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <section className="relative py-12 sm:py-20 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl" />
          <div className="relative text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-7xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Himanshu Saikia
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-[1px] w-8 sm:w-12 bg-foreground/30" />
              <span className="text-lg sm:text-2xl px-2 rounded-full font-medium text-foreground/80 bg-gradient-to-br from-foreground/10 to-transparent">
                Self-taught Developer
              </span>
              <div className="h-[1px] w-8 sm:w-12 bg-foreground/30" />
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
            Hey there! I&apos;m{" "}
            <span className="font-semibold bg-foreground/20 px-2 pt-1 rounded-full">
              Himanshu
            </span>
            , an 18-year-old{" "}
            <span className="font-semibold bg-foreground/20 px-2 pt-1 rounded-full">
              self-taught developer
            </span>{" "}
            and student with a passion for technology. As a dedicated{" "}
            <span className="font-semibold bg-foreground/20 px-2 pt-1 rounded-full">
              Linux enthusiast
            </span>
            , I thrive on exploring diverse distributions and delving deep into
            system internals. My current focus lies in mastering{" "}
            <span className="font-semibold bg-foreground/20 px-2 pt-1 rounded-full">
              low-level programming
            </span>{" "}
            and pushing the boundaries of{" "}
            <span className="font-semibold bg-foreground/20 px-2 pt-1 rounded-full">
              web development
            </span>
            . I&apos;m always eager to embrace new challenges and technologies.
          </p>
        </section>
        <SkillsSection />

        <section className="text-center space-y-3 sm:space-y-4 bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl p-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Get In Touch</h2>
          <p className="text-base sm:text-lg">
            I&apos;m open for freelancing opportunities and job positions!
            Whether you have a project in mind or want to discuss potential
            collaborations, feel free to reach out at{" "}
            <a
              href="mailto:mail@himonshuuu.co"
              className="underline hover:text-foreground/70 transition-colors"
            >
              mail@himonshuuu.co
            </a>
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="https://github.com/himonshuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/70 transition-colors bg-foreground/10 rounded-lg p-2"
            >
              <SiGithub size={24} />
            </Link>
            <Link
              href="https://x.com/himonshuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/70 transition-colors bg-foreground/10 rounded-lg p-2"
            >
              <SiX size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/saikia-himangshu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/70 transition-colors bg-foreground/10 rounded-lg p-2"
            >
              <SiLinkedin size={24} />
            </Link>
            <Link
              href="https://instagram.com/himonshuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/70 transition-colors bg-foreground/10 rounded-lg p-2"
            >
              <SiInstagram size={24} />
            </Link>
            <Link
              href="https://discord.com/users/775660503342776341"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/70 transition-colors bg-foreground/10 rounded-lg p-2"
            >
              <SiDiscord size={24} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
