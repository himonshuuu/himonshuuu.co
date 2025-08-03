"use client";

import ProjectCard from "@/components/projectCard";
import { useRef, useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } =
          scrollContainerRef.current;
        setShowRightArrow(
          scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth
        );
        setShowLeftArrow(scrollLeft > 0);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", checkScroll);
    }

    return () => {
      window.removeEventListener("resize", checkScroll);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      title: "waykey",
      description:
        "A Linux tool that captures keyboard input events and gives you real-time state updates. Perfect for keystroke monitoring.",
      techStack: ["C lang"],
      githubUrl: "https://github.com/himonshuuu/waykey",
      liveUrl: "", // No live URL for this project
    },
    {
      title: "threadseer",
      description:
        "A modern e-commerce website built with Next.js, Tailwind CSS, and TypeScript.",
      techStack: ["Next.js", "Express", "Razorpay"],
      githubUrl: "https://threadseer.shop",
      liveUrl: "https://threadseer.shop", // No live URL for this project
    },
    {
      title: "ExStore",
      description: "About redis like in-memory database",
      techStack: ["Elixir"],
      githubUrl: "https://github.com/himonshuuu/exstore",
      liveUrl: "", // No live URL for this project
    },
    {
      title: "Meaning Khoj",
      description:
        "A Chrome extension that helps users quickly find word definitions and translations while browsing.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/himonshuuu/meaning-khoj",
      liveUrl: "", // Chrome Web Store URL could be added here
    },
    {
      title: "Quiz CLI",
      description: "A simple Quiz CLI built with python",
      techStack: ["Python", "Rich"],
      githubUrl: "https://github.com/himonshuuu/quiz-cli",
      liveUrl: "", // No live URL for CLI tool
    },
    {
      title: "Saavn.py",
      description: "A CLI tool to download songs from jio saavn",
      techStack: ["Python", "Httpx", "Rich"],
      githubUrl: "https://github.com/himonshuuu/saavn-py",
      liveUrl: "", // No live URL for CLI tool
    },
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <div className="h-[4px] w-[20px] bg-foreground/20 my-3" />
        <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto flex-nowrap gap-4 w-full p-4 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar]:h-1
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-900
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-400"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
      {showLeftArrow && (
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-foreground/10 p-2 rounded-full hover:bg-foreground/20 transition-colors"
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={handleScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-foreground/10 p-2 rounded-full hover:bg-foreground/20 transition-colors"
        >
          <HiChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
