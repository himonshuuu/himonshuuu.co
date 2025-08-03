"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  title: string;
  image?: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-foreground/10 p-4 rounded-xl border border-foreground/10 w-[300px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1  h-full"
      }`}
    >
      <div className="w-full relative mb-4">
        {image && (
          <Image
            src={image}
            fill
            alt={title}
            className="rounded-lg object-cover"
          />
        )}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-foreground/5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-foreground/5 rounded-lg transition-colors"
        >
          <SiGithub className="w-5 h-5" />
        </Link>
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-foreground/5 rounded-lg transition-colors"
        >
          <HiExternalLink className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
