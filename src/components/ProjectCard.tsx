"use client";

import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import React from "react";

export interface ProjectCardProps {
  title: string;
  image?: string;
  description: string;
  tags: (string | React.ReactNode)[];
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div
      className="group bg-foreground/10 p-0 rounded-2xl border border-foreground/10 w-[340px] h-fit flex-shrink-0 overflow-hidden flex flex-col relative"
    >
      <div className="relative w-full  bg-foreground/5">
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground/10 hover:bg-foreground/20 rounded-full p-2 transition-colors shadow-sm"
          >
            <SiGithub className="w-5 h-5 text-foreground/80" />
          </Link>
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-foreground/10 hover:bg-foreground/20 rounded-full p-2 transition-colors shadow-sm${!liveUrl ? " opacity-50 pointer-events-none" : ""}`}
            tabIndex={liveUrl ? 0 : -1}
            aria-disabled={!liveUrl}
          >
            <HiExternalLink className="w-5 h-5 text-foreground/80" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-5 pt-5 flex-1 min-h-[120px]">
        <h3 className="text-xl font-extrabold mb-1 text-foreground">{title}</h3>
        <p className="text-sm text-foreground/70 mb-2 line-clamp-3">{description}</p>
        <div className="flex gap-3 mt-auto md:hidden">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="w-5 h-5 text-foreground/80" />
          </Link>
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 hover:bg-foreground/10 rounded-lg transition-colors${!liveUrl ? " opacity-50 pointer-events-none" : ""}`}
            tabIndex={liveUrl ? 0 : -1}
            aria-disabled={!liveUrl}
          >
            <HiExternalLink className="w-5 h-5 text-foreground/80" />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-5 py-3">
        {tags.map((tag) => (
          <div
            key={typeof tag === "string" ? tag : String(tag)}
            className="text-xs px-2 py-1 justify-center items-center rounded-full font-medium text-foreground/70 border border-foreground/10"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
