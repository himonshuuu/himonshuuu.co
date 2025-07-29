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
  SiHuggingface,
  SiHyprland,
  SiJavascript,
  SiKalilinux,
  SiLinuxmint,
  SiManjaro,
  SiMongodb,
  SiNeovim,
  SiNginx,
  SiNixos,
  SiNodedotjs,
  SiNumpy,
  SiOpensuse,
  SiPandas,
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
  SiSelenium,
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
import { BsDashLg } from "react-icons/bs";
import { CgVercel } from "react-icons/cg";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { FaAws, FaDiscord } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import { VscCodeOss } from "react-icons/vsc";
import { ProgressiveBlur } from "@/components/ui/blur";

interface Item {
  name: string;
  icon: React.ElementType;
  url: string;
  color: string;
}

export const techCategories: Item[] = [
  {
    name: "C",
    icon: SiC,
    url: "https://www.gnu.org/oftware/gnu-c-manual",
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
  {
    name: "discord.js",
    icon: FaDiscord,
    url: "https://github.com/discordjs/discord.js",
    color: "#5865F2",
  },

  {
    name: "Figma",
    icon: SiFigma,
    url: "https://figma.com",
    color: "#F24E1E",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    url: "https://numpy.org/",
    color: "#013243",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    url: "https://pandas.pydata.org/",
    color: "#150458",
  },
  {
    name: "Hugging Face",
    icon: SiHuggingface,
    url: "https://huggingface.co/",
    color: "#FFD21E",
  },
  {
    name: "Beautiful Soup",
    icon: SiPython,
    url: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
    color: "#3776AB",
  },
  {
    name: "Selenium",
    icon: SiSelenium,
    url: "https://www.selenium.dev/",
    color: "#43B02A",
  },

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
    name: "Hyprland",
    icon: SiHyprland,
    url: "https://hyprland.org/",
    color: "#4E9BCD",
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
    <section className="space-y-4">
      <div className="flex items-center justify-center gap-2">
        <BsDashLg size={48} className="text-foreground/30" />
        <h2 className="text-2xl sm:text-3xl font-bold"> My Toolkit</h2>
        <BsDashLg size={48} />
      </div>
      <Marquee className="[--duration:80s]" pauseOnHover>
        {techCategories.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-2 justify-center mx-2 flex-shrink-0"
          >
            <div className="relative z-10 flex items-center gap-2">
              <skill.icon />
              {skill.name}
            </div>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
