"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotifyPlayer {
  is_playing: boolean;
  item: {
    name: string;
    external_urls: {
      spotify: string;
    };
    artists: Array<{ name: string }>;
    album: {
      images: Array<{ url: string }>;
    };
    duration_ms: number;
  };
  progress_ms: number;
}

export default function SpotifyWidget({ className }: { className?: string }) {
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

        // clear existing interval
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

            // if we've reached the end of the song
            if (percentage >= 100) {
              if (progressInterval.current) {
                clearInterval(progressInterval.current);
              }
              fetchSpotifyPlayer(); // fetch new song data
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
    const fetchInterval = setInterval(fetchSpotifyPlayer, 30000); // fetch every 30 seconds

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
        <div
          className={cn(
            "w-full sm:w-auto bg-foreground/5 rounded-md p-2 relative overflow-hidden cursor-pointer",
            className
          )}
          onClick={() => {
            window.open(spotifyPlayer?.item?.external_urls?.spotify, "_blank");
          }}
        >
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
