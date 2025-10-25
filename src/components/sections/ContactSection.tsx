import Link from "next/link";
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
} from "react-icons/si";

export default function ContactSection() {
  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="flex items-center gap-2">
        <div className="h-[4px] w-[20px] bg-foreground/20 my-3 rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold">Get In Touch</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
        <p className="text-base sm:text-lg text-foreground/80">
          I&apos;m open for freelancing opportunities and job positions! Whether
          you have a project in mind or want to discuss potential
          collaborations, feel free to reach out at{" "}
          <a
            href="mailto:mail@himonshuuu.co"
            className="font-medium border-b-2 border-foreground/20 hover:border-foreground/40 transition-colors"
          >
            mail@himonshuuu.co
          </a>
        </p>
        <div className="grid grid-cols-5 gap-3 sm:gap-4">
          <Link
            href="https://github.com/himonshuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square flex items-center justify-center border border-foreground/10 rounded-lg hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
          >
            <SiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link
            href="https://x.com/himonshuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square flex items-center justify-center border border-foreground/10 rounded-lg hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
          >
            <SiX className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/himonshuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square flex items-center justify-center border border-foreground/10 rounded-lg hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
          >
            <SiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link
            href="https://instagram.com/himonshuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square flex items-center justify-center border border-foreground/10 rounded-lg hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
          >
            <SiInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link
            href="https://discord.com/users/775660503342776341"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square flex items-center justify-center border border-foreground/10 rounded-lg hover:bg-foreground/5 hover:scale-105 transition-all duration-300"
          >
            <SiDiscord className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
