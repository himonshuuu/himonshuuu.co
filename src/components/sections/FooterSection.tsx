"use client";
import { SiNextdotjs, SiReact, SiTailwindcss, SiVercel } from "react-icons/si";

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
                </div>
            </div>
        </footer>
    );
}
