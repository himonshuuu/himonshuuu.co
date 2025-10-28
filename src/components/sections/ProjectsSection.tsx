"use client";

import ProjectCard from "@/components/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaGithub, FaStar } from "react-icons/fa";
import { GithubRepo } from "@/types";
import { FaCodeFork } from "react-icons/fa6";

const GITHUB_USERNAME = "himonshuuu";

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Merge both API responses and unique by repo name
  useEffect(() => {
    async function fetchAndMergeRepos() {
      setLoading(true);
      setError(null);

      try {
        const resPinned = await fetch("/api/github/repos?pinned=true");
        const resStars = await fetch("/api/github/repos?topStars=true");

        if (!resPinned.ok || !resStars.ok) throw new Error("Failed to fetch repositories");

        const pinned: GithubRepo[] = await resPinned.json();
        const topStars: GithubRepo[] = await resStars.json();

        const repoMap = new Map<string, GithubRepo>();
        pinned.forEach((repo) => {
          repoMap.set(repo.name, repo);
        });
        topStars.forEach((repo) => {
          if (!repoMap.has(repo.name)) {
            repoMap.set(repo.name, repo);
          }
        });

        setRepos(Array.from(repoMap.values()).slice(0, 10));
      } catch (e: unknown) {
        const error = e as Error;
        setError(error?.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    }

    fetchAndMergeRepos();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const checkScroll = () => {
      if (container) {
        const { scrollWidth, clientWidth, scrollLeft } = container;
        setShowRightArrow(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 1);
        setShowLeftArrow(scrollLeft > 0);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    if (container) {
      container.addEventListener("scroll", checkScroll);
    }

    return () => {
      window.removeEventListener("resize", checkScroll);
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, [repos, loading]);

  const handleScroll = (dir: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full">
      <div className="flex items-center gap-2 mb-1">
        <div className="h-[4px] w-[20px] bg-foreground/20 my-3 rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-foreground/60 hover:text-foreground/90 text-xs ml-2 underline"
        >
          <FaGithub className="w-4 h-4" /> More on GitHub
        </a>
      </div>
      <p className="mb-2 text-foreground/60 text-sm max-w-2xl">
        Here are some of my <b>pinned GitHub projects</b>. Check out more on my profile!
      </p>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto flex-nowrap gap-6 w-full p-4 mx-0 md:mx-2 custom-scroll"
          tabIndex={0}
          aria-label="Pinned projects"
        >
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse bg-foreground/10 rounded-2xl w-[320px] h-[220px] flex-shrink-0 mx-2"
              />
            ))
          ) : error ? (
            <div className="text-center min-w-[300px] text-red-500 my-6">{error}</div>
          ) : (
            repos.map((repo) => (
              <ProjectCard
                key={repo.name}
                title={repo.name}
                description={repo.description || "No description"}
                tags={[ 
                  ...repo.languages
                    .map((language: { name: string }) => language.name)
                    .reverse(),
                  ...(repo.stargazerCount
                    ? [
                        <span key="star" className="flex items-center justify-center gap-1">
                          <FaStar size={14} /> {repo.stargazerCount}
                        </span>,
                      ]
                    : []),
                  ...(repo.forkCount
                    ? [
                        <span key="fork" className="flex items-center justify-center gap-1">
                          <FaCodeFork size={14} /> {repo.forkCount}
                        </span>,
                      ]
                    : []),
                ]}
                githubUrl={repo.url}
                liveUrl={""}
              />
            ))
          )}
        </div>
        {showLeftArrow && (
          <button
            aria-label="Scroll projects left"
            onClick={() => handleScroll("left")}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-foreground/10 p-2 rounded-full hover:bg-foreground/20 transition-colors shadow-lg z-10"
          >
            <HiChevronLeft className="w-7 h-7" />
          </button>
        )}
        {showRightArrow && (
          <button
            aria-label="Scroll projects right"
            onClick={() => handleScroll("right")}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-foreground/10 p-2 rounded-full hover:bg-foreground/20 transition-colors shadow-lg z-10"
          >
            <HiChevronRight className="w-7 h-7" />
          </button>
        )}
      </div>
    </section>
  );
}
