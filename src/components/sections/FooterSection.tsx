"use client";
import { useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";

export default function FooterSection() {
  const [commitHash, setCommitHash] = useState("");
  const [commitUrl, setCommitUrl] = useState("");
  const [deploymentStatus, setDeploymentStatus] = useState("pending");

  useEffect(() => {
    // Get latest commit info
    fetch("https://api.github.com/repos/himonshuuu/himonshuuu.co/commits")
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          setCommitHash(data[0].sha.slice(0, 7));
          setCommitUrl(data[0].html_url);
        }
      })
      .catch((error) => {
        console.error("Error fetching commit:", error);
      });

    // Get deployment status
    fetch("https://api.github.com/repos/himonshuuu/himonshuuu.co/deployments")
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          setDeploymentStatus(data[0].state);
        }
      })
      .catch((error) => {
        console.error("Error fetching deployment status:", error);
      });
  }, []);

  return (
    <footer className="py-8 bg-gradient-to-t from-foreground/5 to-transparent border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center gap-2 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <SiNextdotjs className="text-black dark:text-white" size={16} />
            <span>Next.js</span>
            <span>•</span>
            <SiTypescript className="text-[#3178C6]" size={16} />
            <span>TypeScript</span>
            <span>•</span>
            <SiTailwindcss className="text-[#06B6D4]" size={16} />
            <span>Tailwind</span>
            <span>•</span>
            <SiReact className="text-[#61DAFB]" size={16} />
            <span>React</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={
                commitUrl ||
                "https://github.com/himonshuuu/himonshuuu.co/commits"
              }
              className="font- hover:text-foreground/90 transition-colors"
            >
              {commitHash || "development"}
            </a>
            <span>•</span>
            <span>
              {deploymentStatus === "success"
                ? "Deployed"
                : deploymentStatus === "pending"
                ? "Pending"
                : "Failed"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
