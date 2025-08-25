import { BiData, BiWind } from "react-icons/bi";
import {
  SiAiohttp,
  SiAlmalinux,
  SiAlpinelinux,
  SiArchlinux,
  SiBootstrap,
  SiC,
  SiDebian,
  SiDocker,
  SiDrizzle,
  SiEndeavouros,
  SiExpress,
  SiFastapi,
  SiFedora,
  SiFigma,
  SiFlask,
  SiGentoo,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHono,
  SiJavascript,
  SiKalilinux,
  SiLinuxmint,
  SiLua,
  SiManjaro,
  SiMongodb,
  SiNeovim,
  SiNginx,
  SiNixos,
  SiNodedotjs,
  SiOpensuse,
  SiParrotsecurity,
  SiPopos,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiQemu,
  SiRailway,
  SiReact,
  SiRedhat,
  SiRedis,
  SiRedux,
  SiRender,
  SiRockylinux,
  SiSanic,
  SiShadcnui,
  SiSlackware,
  SiSqlite,
  SiSupabase,
  SiTmux,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

import { Marquee } from "@/components/ui/marquee";
import React from "react";
import { CgVercel } from "react-icons/cg";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import { VscCodeOss } from "react-icons/vsc";

interface Item {
  name: string;
  icon: React.ElementType;
  url: string;
  color: string;
}

const languageCategories: Item[] = [
  {
    name: "C",
    icon: SiC,
    url: "https://www.gnu.org/software/gnu-c-manual",
    color: "#A8B9CC",
  },
  {
    name: "Python",
    icon: SiPython,
    url: "https://www.python.org/",
    color: "#3776AB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org/",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "#F7DF1E",
  },
  {
    name: "Lua",
    icon: SiLua,
    url: "https://www.lua.org/",
    color: "#2C2D72",
  },
];

const frontendCategories: Item[] = [
  {
    name: "React",
    icon: SiReact,
    url: "https://reactjs.org/",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    url: "https://nextjs.org/",
    color: "#000000",
  },
  {
    name: "Redux",
    icon: SiRedux,
    url: "https://redux.js.org/",
    color: "#764ABC",
  },
  {
    name: "Tailwind CSS",
    icon: BiWind,
    url: "https://tailwindcss.com/",
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    url: "https://getbootstrap.com/",
    color: "#7952B3",
  },
  {
    name: "ShadCN",
    icon: SiShadcnui,
    url: "https://shadcn.com/",
    color: "#000000",
  },
  {
    name: "Framer Motion",
    icon: FiFramer,
    url: "https://www.framer.com/motion/",
    color: "#0055FF",
  },
];

const backendCategories: Item[] = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    url: "https://nodejs.org/",
    color: "#339933",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    url: "https://fastapi.tiangolo.com/",
    color: "#009688",
  },
  {
    name: "Flask",
    icon: SiFlask,
    url: "https://flask.palletsprojects.com/",
    color: "#000000",
  },
  {
    name: "Hono",
    icon: SiHono,
    url: "https://hono.dev",
    color: "#E36002",
  },
  {
    name: "Express",
    icon: SiExpress,
    url: "https",
    color: "#000000",
  },
  {
    name: "Sanic",
    icon: SiSanic,
    url: "https://sanic.dev/en/",
    color: "#FF2D20",
  },
  {
    name: "Aiohttp",
    icon: SiAiohttp,
    url: "https://docs.aiohttp.org/",
    color: "#2C5BB4",
  },
];

const databaseCategories: Item[] = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    url: "https://www.postgresql.org/",
    color: "#336791",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    url: "https://www.prisma.io/",
    color: "#2D3748",
  },
  {
    name: "SQLAlchemy",
    icon: BiData,
    url: "https://www.sqlalchemy.org/",
    color: "#D71F00",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    url: "https://www.sqlite.org/",
    color: "#003B57",
  },
  {
    name: "Drizzle",
    icon: SiDrizzle,
    url: "https://orm.drizzle.team/",
    color: "#000000",
  },
  {
    name: "Redis",
    icon: SiRedis,
    url: "https://redis.io/",
    color: "#DC382D",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    url: "https://supabase.com/",
    color: "#3FCF8E",
  },
];

const cloudCategories: Item[] = [
  {
    name: "Docker",
    icon: SiDocker,
    url: "https://www.docker.com/",
    color: "#2496ED",
  },
  {
    name: "AWS",
    icon: FaAws,
    url: "https://aws.amazon.com/",
    color: "#FF9900",
  },
  {
    name: "GCP",
    icon: DiGoogleCloudPlatform,
    url: "https://console.cloud.google.com",
    color: "#4285F4",
  },
  {
    name: "Vercel",
    icon: CgVercel,
    url: "https://vercel.com/",
    color: "#000000",
  },
  {
    name: "Nginx",
    icon: SiNginx,
    url: "https://nginx.org/",
    color: "#009639",
  },
  {
    name: "Railway",
    icon: SiRailway,
    url: "https://railway.app/",
    color: "#0B0D0E",
  },
  {
    name: "Render",
    icon: SiRender,
    url: "https://render.com/",
    color: "#46E3B7",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    url: "https://github.com/features/actions",
    color: "#2088FF",
  },
];

const toolsCategories: Item[] = [
  {
    name: "Git",
    icon: SiGit,
    url: "https://git-scm.com/",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/",
    color: "#181717",
  },
  {
    name: "Neovim",
    icon: SiNeovim,
    url: "https://neovim.io/",
    color: "#57A143",
  },
  {
    name: "VSCode",
    icon: VscCodeOss,
    url: "https://code.visualstudio.com/",
    color: "#007ACC",
  },
  {
    name: "Postman",
    icon: SiPostman,
    url: "https://www.postman.com/",
    color: "#FF6C37",
  },
  {
    name: "Tmux",
    icon: SiTmux,
    url: "https://github.com/tmux/tmux",
    color: "#1BB91F",
  },
  {
    name: "QEMU",
    icon: SiQemu,
    url: "https://www.qemu.org/",
    color: "#FF6600",
  },
  {
    name: "Figma",
    icon: SiFigma,
    url: "https://figma.com",
    color: "#F24E1E",
  },
];

export const osCategories: Item[] = [
  {
    name: "Arch Linux",
    icon: SiArchlinux,
    url: "https://archlinux.org/",
    color: "#1793D1",
  },
  {
    name: "NixOS",
    icon: SiNixos,
    url: "https://nixos.org/",
    color: "#5277C3",
  },
  {
    name: "Ubuntu",
    icon: SiUbuntu,
    url: "https://ubuntu.com/",
    color: "#E95420",
  },
  {
    name: "Debian",
    icon: SiDebian,
    url: "https://www.debian.org/",
    color: "#A81D33",
  },
  {
    name: "Fedora",
    icon: SiFedora,
    url: "https://getfedora.org/",
    color: "#51A2DA",
  },
  {
    name: "Manjaro",
    icon: SiManjaro,
    url: "https://manjaro.org/",
    color: "#35BF5C",
  },
  {
    name: "Gentoo",
    icon: SiGentoo,
    url: "https://www.gentoo.org/",
    color: "#54487A",
  },
  {
    name: "RHEL",
    icon: SiRedhat,
    url: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux",
    color: "#EE0000",
  },
  {
    name: "Kali Linux",
    icon: SiKalilinux,
    url: "https://www.kali.org/",
    color: "#557C94",
  },
  {
    name: "Pop!_OS",
    icon: SiPopos,
    url: "https://pop.system76.com/",
    color: "#48B9C7",
  },
  {
    name: "Alpine Linux",
    icon: SiAlpinelinux,
    url: "https://www.alpinelinux.org/",
    color: "#0D597F",
  },
  {
    name: "EndeavourOS",
    icon: SiEndeavouros,
    url: "https://endeavouros.com/",
    color: "#7F3FBF",
  },
  {
    name: "OpenSUSE",
    icon: SiOpensuse,
    url: "https://www.opensuse.org/",
    color: "#73BA25",
  },
  {
    name: "Linux Mint",
    icon: SiLinuxmint,
    url: "https://linuxmint.com/",
    color: "#87CF3E",
  },
  {
    name: "Parrot OS",
    icon: SiParrotsecurity,
    url: "https://parrotsec.org/",
    color: "#04BADE",
  },
  {
    name: "Slackware",
    icon: SiSlackware,
    url: "http://www.slackware.com/",
    color: "#3D3D3D",
  },
  {
    name: "Rocky Linux",
    icon: SiRockylinux,
    url: "https://rockylinux.org/",
    color: "#10B981",
  },
  {
    name: "AlmaLinux",
    icon: SiAlmalinux,
    url: "https://almalinux.org/",
    color: "#1D80D3",
  },
  {
    name: "Windows",
    icon: FaWindows,
    url: "https://www.microsoft.com/en-in/windows",
    color: "#0078D6",
  },
];

export default function SkillsSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-2">
        <div className="h-[4px] w-[20px] bg-foreground/20 my-3 rounded-full" />
        <h2 className="skills-title text-xl sm:text-3xl font-bold">
          My Toolkit
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[90px] bg-gradient-to-r from-[#0b0a0a] via-background/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[90px] bg-gradient-to-l from-[#0b0a0a] via-background/80  to-transparent" />

        <Marquee className="[--duration:20s]" pauseOnHover>
          {languageCategories.map((skill) => (
            <span
              key={skill.name}
              className="skill-item px-2 sm:px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-1.5 sm:gap-2 justify-center mx-1 sm:mx-2 flex-shrink-0 cursor-pointer hover:bg-foreground/20 transition-colors"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <skill.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {skill.name}
              </div>
            </span>
          ))}
        </Marquee>

        <Marquee className="[--duration:40s]" pauseOnHover reverse>
          {frontendCategories.map((skill) => (
            <span
              key={skill.name}
              className="skill-item px-2 sm:px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-1.5 sm:gap-2 justify-center mx-1 sm:mx-2 flex-shrink-0 cursor-pointer hover:bg-foreground/20 transition-colors"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <skill.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {skill.name}
              </div>
            </span>
          ))}
        </Marquee>

        <Marquee className="[--duration:40s]" pauseOnHover>
          {backendCategories.map((skill) => (
            <span
              key={skill.name}
              className="skill-item px-2 sm:px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-1.5 sm:gap-2 justify-center mx-1 sm:mx-2 flex-shrink-0 cursor-pointer hover:bg-foreground/20 transition-colors"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <skill.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {skill.name}
              </div>
            </span>
          ))}
        </Marquee>

        <Marquee className="[--duration:50s]" pauseOnHover reverse>
          {databaseCategories.map((skill) => (
            <span
              key={skill.name}
              className="skill-item px-2 sm:px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-1.5 sm:gap-2 justify-center mx-1 sm:mx-2 flex-shrink-0 cursor-pointer hover:bg-foreground/20 transition-colors"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <skill.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {skill.name}
              </div>
            </span>
          ))}
        </Marquee>

        <Marquee className="[--duration:40s]" pauseOnHover>
          {cloudCategories.map((skill) => (
            <span
              key={skill.name}
              className="skill-item px-2 sm:px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-1.5 sm:gap-2 justify-center mx-1 sm:mx-2 flex-shrink-0 cursor-pointer hover:bg-foreground/20 transition-colors"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <skill.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {skill.name}
              </div>
            </span>
          ))}
        </Marquee>

        <Marquee className="[--duration:40s]" pauseOnHover reverse>
          {toolsCategories.map((skill) => (
            <span
              key={skill.name}
              className="skill-item px-2 sm:px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-1.5 sm:gap-2 justify-center mx-1 sm:mx-2 flex-shrink-0 cursor-pointer hover:bg-foreground/20 transition-colors"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <skill.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {skill.name}
              </div>
            </span>
          ))}
        </Marquee>

        <Marquee className="[--duration:40s]" pauseOnHover>
          {osCategories.map((skill) => (
            <span
              key={skill.name}
              className="skill-item px-2 sm:px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-1.5 sm:gap-2 justify-center mx-1 sm:mx-2 flex-shrink-0 cursor-pointer hover:bg-foreground/20 transition-colors"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <skill.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {skill.name}
              </div>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
