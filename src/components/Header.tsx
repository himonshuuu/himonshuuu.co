"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import {
  MdNightlight,
  MdOutlineCoffee,
  MdOutlineWbSunny,
} from "react-icons/md";
import { GitCommitGraph } from "@/components/gitCommit";

interface SpotifyPlayer {
  is_playing: boolean;
  item: {
    name: string;
    artists: Array<{ name: string }>;
    album: {
      images: Array<{ url: string }>;
    };
    duration_ms: number;
  };
  progress_ms: number;
}

function LocationTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentTimeIcon, setCurrentTimeIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 8) {
      setCurrentTimeIcon(<BsSunrise />);
    } else if (hours >= 8 && hours < 12) {
      setCurrentTimeIcon(<MdOutlineWbSunny />);
    } else if (hours >= 12 && hours < 17) {
      setCurrentTimeIcon(<BsSunset />);
    } else if (hours >= 17 && hours < 20) {
      setCurrentTimeIcon(<MdOutlineCoffee />);
    } else {
      setCurrentTimeIcon(<MdNightlight />);
    }
  }, [currentTime]);

  return (
    <div className="w-full sm:w-auto items-center gap-2 bg-foreground/5 rounded-md p-2">
      <div className="flex items-center gap-2">
        <CiLocationOn />
        <span className="text-[10px] lg:text-sm font-medium text-foreground/60 whitespace-nowrap">
          Assam, India, AS-03
        </span>
      </div>
      <div className="flex items-center gap-2">
        {currentTimeIcon}
        <span className="text-[10px] lg:text-sm font-medium text-foreground/60">
          {currentTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: "Asia/Kolkata",
            hour12: false,
          })}{" "}
          GMT+5:30
        </span>
      </div>
    </div>
  );
}

function SpotifyWidget() {
  const [spotifyPlayer, setSpotifyPlayer] = useState<SpotifyPlayer | null>(
    null
  );
  const [progressPercentage, setProgressPercentage] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchSpotifyPlayer = async () => {
      try {
        const response = await fetch("/api/spotify/player");
        const data = await response.json();
        setSpotifyPlayer(data);

        // Clear existing interval
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }

        // If music is playing, start progress tracking
        if (data?.is_playing) {
          const startProgress = data.progress_ms;
          const startTime = Date.now();

          progressInterval.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const currentProgress = startProgress + elapsed;
            const percentage = (currentProgress / data.item.duration_ms) * 100;

            // If we've reached the end of the song
            if (percentage >= 100) {
              if (progressInterval.current) {
                clearInterval(progressInterval.current);
              }
              fetchSpotifyPlayer(); // Fetch new song data
            } else {
              setProgressPercentage(percentage);
            }
          }, 100);
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchSpotifyPlayer();
    const fetchInterval = setInterval(fetchSpotifyPlayer, 30000); // Fetch every 30 seconds

    return () => {
      clearInterval(fetchInterval);
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  return (
    <>
      {spotifyPlayer?.is_playing ? (
        <div className="w-full sm:w-auto bg-foreground/5 rounded-md p-2 relative overflow-hidden">
          {spotifyPlayer?.item && (
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-foreground/60"
              style={{
                width: `${progressPercentage}%`,
                transition: "width 1s linear",
              }}
            />
          )}
          <div className="flex items-center gap-2">
            <Image
              src={spotifyPlayer?.item?.album?.images[0]?.url || ""}
              alt={`${spotifyPlayer?.item?.artists[0]?.name} - ${spotifyPlayer?.item?.name}`}
              width={34}
              height={34}
              className="rounded-lg"
            />
            <div className="flex flex-col px-2">
              <span className="text-[8px] lg:text-sm font-medium text-foreground/60 flex items-center gap-3">
                Listening to{" "}
              </span>
              <marquee
                className="text-[8px] w-16 lg:w-20 lg:text-sm font-medium text-foreground/60"
                direction="left"
                scrollamount={5}
              >
                {spotifyPlayer?.item
                  ? `${spotifyPlayer.item.artists[0].name} - ${spotifyPlayer.item.name}`
                  : "Loading..."}
              </marquee>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full sm:w-auto bg-foreground/5 rounded-md p-2 relative overflow-hidden">
          <div className="flex items-center gap-2">
            <Image
              src={
                spotifyPlayer?.item?.album?.images[0]?.url ||
                "https://github.com/himonshuuu.png"
              }
              alt={`${spotifyPlayer?.item?.artists[0]?.name} - ${spotifyPlayer?.item?.name}`}
              width={34}
              height={34}
              className="rounded-lg"
            />
            <div className="flex flex-col px-2">
              <span className="text-[8px] lg:text-sm font-medium text-foreground/60 flex items-center gap-3">
                Listening to{" "}
              </span>
              <marquee
                className="text-[8px] w-16 lg:w-20 lg:text-sm font-medium text-foreground/60"
                direction="left"
                scrollamount={5}
              >
                {spotifyPlayer?.item
                  ? `${spotifyPlayer.item.artists[0].name} - ${spotifyPlayer.item.name}`
                  : "Loading..."}
              </marquee>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProfileHeader() {
  return (
    <div className="space-y-2 w-full">
      <span className="text-sm sm:text-base font-medium text-foreground/70">
        Hello, I&apos;m
      </span>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter">
        Himanshu Saikia
      </h1>
    </div>
  );
}

export default function Header() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12">
      <div className="space-y-4 sm:space-y-6 w-full ">
        <div className="flex flex-row gap-4 w-full justify-between">
          <div className="flex flex-col gap-2 w-full">
            <ProfileHeader />

            <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/80 leading-relaxed">
              A self-taught developer passionate about crafting digital
              experiences
            </p>
            <div className="flex flex-row gap-3 sm:gap-2">
              <LocationTime />
              <SpotifyWidget />
              <GitCommitGraph className="hidden md:flex lg:flex" />
            </div>
            <GitCommitGraph className="flex md:hidden lg:hidden" />
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
