"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Commit {
  date: Date;
  count: number;
  url: string;
}

export default function GithubCommits({ className }: { className?: string }) {
  const [commitGraph, setCommitGraph] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch("/api/github/commits");
        const data = await response.json();
        setCommitGraph(data);
      } catch (error) {
        console.error("Failed to fetch commits:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommits();
  }, []);

  const getCommitColor = (count: number) => {
    if (count === 0) return "bg-foreground/5";
    if (count <= 2) return "bg-foreground/20";
    if (count <= 4) return "bg-foreground/40";
    if (count <= 6) return "bg-foreground/60";
    if (count <= 8) return "bg-foreground/80";
    if (count <= 10) return "bg-foreground/100";
    return "bg-foreground/100";
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-foreground/5 rounded-md p-1.5 w-fit",
        className
      )}
    >
      <div className="grid grid-cols-19 gap-1">
        {loading
          ? // Skeleton loading state
            Array.from({ length: 57 }).map((_, index) => (
              <div
                key={index}
                className="h-3 w-3 rounded-sm animate-pulse bg-foreground/10"
              />
            ))
          : // Actual commit data
            commitGraph.map((commit, index) => (
              <div key={index} className="relative group">
                <div
                  className={`h-3 w-3 rounded-sm hover:scale-105 transition-all duration-300 cursor-pointer ${getCommitColor(
                    commit.count
                  )}`}
                />
                <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground/90 text-background rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {commit.count} commits
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
