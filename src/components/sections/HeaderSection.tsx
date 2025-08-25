"use client";
import GithubCommits from "@/components/widgets/GithubCommits";
import Image from "next/image";
import LocationTime from "../widgets/LocationAndTime";
import SpotifyWidget from "../widgets/SpotifyPlayer";

export default function HeaderSection() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12">
      <div className="space-y-4 sm:space-y-6 w-full ">
        <div className="flex flex-row gap-4 w-full justify-between">
          <div className="flex flex-col gap-2 w-full">
            <div className="space-y-2 w-full">
              <span className="text-sm sm:text-base font-medium text-foreground/70">
                Hello, I&apos;m
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter">
                Himanshu Saikia
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/80 leading-relaxed">
              A self-taught developer passionate about crafting digital
              experiences
            </p>
            <div className="flex flex-row gap-3 sm:gap-2">
              <LocationTime />
              <SpotifyWidget />
              <GithubCommits className="hidden md:flex lg:flex" />
            </div>
            <GithubCommits className="flex md:hidden lg:hidden" />
          </div>

          <Image
            src="https://github.com/himonshuuu.png"
            alt="Himanshu Saikia"
            width={64}
            height={64}
            priority
            className="rounded-full w-16 h-16 lg:w-48 lg:h-48"
          />
        </div>
      </div>
    </section>
  );
}
