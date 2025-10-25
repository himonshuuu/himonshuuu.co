"use client";

import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";

type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
};

const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    location: "Remote",
    startDate: "Aug 2020",
    endDate: "Present",
    description: [
      "Built custom web applications for 7+ clients across e-commerce and SaaS domains.",
      "Architected scalable backend APIs and responsive UIs.",
      "Delivered robust solutions on budget and within deadlines.",
    ]
  },
];

export default function ExperienceSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-[4px] w-[20px] bg-foreground/20 my-3 rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Experience</h2>
      </div>
      <ol className="relative border-s border-foreground/20 mt-8">
        {experiences.map((exp, i) => (
          <li
            key={exp.company + exp.role}
            className={`ms-6 ${i !== experiences.length - 1 ? "mb-10" : ""}`}
          >
            <span className="absolute flex items-center justify-center w-6 h-6 bg-foreground/10 rounded-full -start-3 ring-8 ring-background dark:ring-background dark:bg-foreground/10">
              <FaBriefcase className="w-4 h-4 text-foreground/60" />
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-center mb-1">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  {exp.role}
                  <span className="hidden sm:inline text-foreground/60 font-normal mx-1">|</span>
                  <Link
                    href={exp.companyUrl || "#"}
                    target={exp.companyUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 font-medium text-foreground/80 hover:underline ${
                      exp.companyUrl ? "" : "pointer-events-none text-foreground/40"
                    }`}
                    tabIndex={exp.companyUrl ? 0 : -1}
                    aria-disabled={!exp.companyUrl}
                  >
                    {exp.company}
                    {exp.companyUrl && (
                      <HiExternalLink className="w-4 h-4 ml-1 inline text-foreground/70" />
                    )}
                  </Link>
                  {i === 0 && (
                    <span className="bg-foreground/10 text-foreground/80 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full ms-3">
                      Latest
                    </span>
                  )}
                </h3>
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-foreground/50">
                <span className="flex gap-2 items-center">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 mr-1 text-foreground/60" />
                  {exp.location}
                  <span className="mx-2 text-foreground/30">|</span>
                  <FaCalendarAlt className="w-3.5 h-3.5 mr-1 text-foreground/60" />
                  {exp.startDate} - {exp.endDate}
                </span>
              </time>
              <ul className="mb-4 text-base font-normal text-foreground/70 list-disc list-inside pl-0">
                {exp.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
              {exp.companyUrl && (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-background border border-foreground/20 rounded-lg hover:bg-foreground/5 hover:text-foreground focus:z-10 focus:ring-4 focus:outline-none focus:ring-foreground/10 dark:border-foreground/20 dark:hover:bg-foreground/10 w-fit transition-colors"
                >
                  <HiExternalLink className="w-4 h-4 me-2.5 text-foreground/70" aria-hidden="true" />
                  Visit company
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
