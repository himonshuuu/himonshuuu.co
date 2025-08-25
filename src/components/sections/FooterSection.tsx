"use client";
import { useEffect, useState } from "react";
import { SiNextdotjs, SiTailwindcss, SiReact, SiVercel } from "react-icons/si";
import { MdOutlineCommit } from "react-icons/md";
import Image from "next/image";

import packageJson from "../../../package.json";

interface CommitData {
  sha: string;
  html_url: string;
  message: string;
  commit: {
    committer: {
      name: string;
      email: string;
      date: string;
    };
  };
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

export default function FooterSection() {
  const [commitHash, setCommitHash] = useState("");
  const [commitUrl, setCommitUrl] = useState("");
  const [commitData, setCommitData] = useState<CommitData | null>(null);

  useEffect(() => {
    // Get latest commit info
    fetch("https://api.github.com/repos/himonshuuu/himonshuuu.co/commits")
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          setCommitHash(data[0].sha.slice(0, 7));
          setCommitUrl(data[0].html_url);
          setCommitData(data[0] as CommitData);
        }
      })
      .catch((error) => {
        console.error("Error fetching commit:", error);
      });
  }, []);

  return (
    <footer className="py-8 bg-gradient-to-t from-foreground/5 to-transparent border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center gap-2 text-sm text-foreground/60">
          {/* Built with */}
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <SiNextdotjs className="text-black dark:text-white" size={16} />
            <span>{packageJson.dependencies["next"]}</span>
            <span>•</span>
            <SiTailwindcss className="text-[#06B6D4]" size={16} />
            <span>{packageJson.devDependencies["tailwindcss"]}</span>
            <span>•</span>
            <SiReact className="text-[#61DAFB]" size={16} />
            <span>{packageJson.dependencies["react"]}</span>
            <span>•</span>
            <span>powered by</span>
            <SiVercel size={14} className="text-white" />
          </div>

          <div className="flex group items-center gap-2">
            <a
              href={
                commitUrl ||
                "https://github.com/himonshuuu/himonshuuu.co/commits"
              }
              className="flex items-center gap-2 bg-foreground/10 rounded-full px-2 py-1 group relative hover:bg-foreground/20"
            >
              <MdOutlineCommit size={16} />
              <div className="relative group">
                <span className="text-xs hover:text-foreground/90 transition-colors">
                  {commitHash || "loading..."}
                </span>
                {commitData?.message && (
                  <div className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-foreground/90 text-background rounded-lg text-xs whitespace-nowrap">
                    {commitData.message.slice(0, 50) +
                      (commitData.message.length > 50 ? "..." : "")}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-foreground/90"></div>
                  </div>
                )}
              </div>
              {commitData?.author?.avatar_url && (
                <Image
                  src={commitData.author.avatar_url}
                  className="w-4 h-4 rounded-full"
                  alt="Commit Creator Avatar"
                  height={16}
                  width={16}
                />
              )}
              <span className="text-xs">
                {commitData?.commit?.committer?.date
                  ? new Date(
                      commitData.commit.committer.date
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })
                  : "—"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
