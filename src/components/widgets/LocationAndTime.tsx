"use client";
import { useEffect, useState } from "react";
import { BsSunrise } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsSunset } from "react-icons/bs";
import { MdOutlineCoffee } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { cn } from "@/lib/utils";

export default function LocationTime({ className }: { className?: string }) {
  const [currentTime, setCurrentTime] = useState("");
  const [currentTimeIcon, setCurrentTimeIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();

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

      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZone: "Asia/Kolkata",
          hour12: false,
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "w-full sm:w-auto items-center gap-2 bg-foreground/5 rounded-lg border border-foreground/10 p-2",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <CiLocationOn />
        <span className="text-[10px] lg:text-sm font-medium text-foreground/60 whitespace-nowrap">
          Assam, India, AS-03
        </span>
      </div>
      <div className="flex items-center gap-2">
        {currentTimeIcon}
        <span className="text-[10px] lg:text-sm font-medium text-foreground/60">
          {currentTime} GMT+5:30
        </span>
      </div>
    </div>
  );
}
