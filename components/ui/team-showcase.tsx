"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageColor?: string;
  imageBw?: string;
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Dhiraj Batra",
    role: "Full Stack Developer",
  },
  {
    id: "2",
    name: "Akshat Jain",
    role: "Head of Operations and Marketing",
  },
  {
    id: "3",
    name: "Aditya",
    role: "Head of Operations and Marketing",
  },
  {
    id: "4",
    name: "Sudhanshu",
    role: "Full Stack Developer",
  },
];

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/);
  const letters = parts.length > 1 ? [parts[0][0], parts[parts.length - 1][0]] : [parts[0][0]];
  return letters.join("").toUpperCase();
}

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const fourMembers = members.slice(0, 4);
  const col1 = fourMembers.filter((_, i) => i % 2 === 0);
  const col2 = fourMembers.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-4xl mx-auto py-8 px-4 md:px-6">
      <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard key={member.id} member={member} className="w-[140px] h-[150px] sm:w-[165px] sm:h-[175px] md:w-[190px] md:h-[200px]" hoveredId={hoveredId} onHover={setHoveredId} />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((member) => (
            <PhotoCard key={member.id} member={member} className="w-[150px] h-[160px] sm:w-[178px] sm:h-[188px] md:w-[204px] md:h-[214px]" hoveredId={hoveredId} onHover={setHoveredId} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
        {fourMembers.map((member) => (
          <MemberRow key={member.id} member={member} hoveredId={hoveredId} onHover={setHoveredId} />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasPhoto = Boolean(member.imageBw && member.imageColor);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400",
        className,
        isDimmed ? "opacity-60" : "opacity-100"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {hasPhoto ? (
        <>
          <img
            src={member.imageBw}
            alt={member.name}
            className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-500", isActive ? "opacity-0" : "opacity-100")}
          />
          <img
            src={member.imageColor}
            alt={member.name}
            className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-500", isActive ? "opacity-100" : "opacity-0")}
          />
        </>
      ) : (
        <div
          className={cn(
            "absolute inset-0 w-full h-full flex items-center justify-center transition-colors duration-500",
            isActive ? "bg-[#19B86A]" : "bg-[#F5F5F7]"
          )}
        >
          <span
            className={cn(
              "font-semibold tracking-tight transition-colors duration-500 select-none",
              isActive ? "text-white" : "text-[#19B86A]"
            )}
            style={{ fontSize: "clamp(32px, 4.2vw, 44px)", lineHeight: 1 }}
          >
            {initialsFor(member.name)}
          </span>
        </div>
      )}
    </div>
  );
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div className={cn("cursor-pointer transition-opacity duration-300", isDimmed ? "opacity-50" : "opacity-100")} onMouseEnter={() => onHover(member.id)} onMouseLeave={() => onHover(null)}>
      <div className="flex items-center gap-2.5">
        <span className={cn("w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300", isActive ? "bg-white w-5" : "bg-white/25")} />
        <span className={cn("text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300", isActive ? "text-white" : "text-white/70")}>{member.name}</span>
      </div>
      <p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">{member.role}</p>
    </div>
  );
}
