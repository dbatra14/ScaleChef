"use client";

import { useState } from "react";
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageColor: string;
  imageBw: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Chadrack",
    role: "director of photography",
    imageColor: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    imageBw: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&sat=-100",
    social: { twitter: "#", linkedin: "#", behance: "#" },
  },
  {
    id: "2",
    name: "Mak VieSAinte",
    role: "FOUNDER",
    imageColor: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    imageBw: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&sat=-100",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "3",
    name: "Osiris Balonga",
    role: "LEAD FRONT-END",
    imageColor: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    imageBw: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&sat=-100",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "4",
    name: "Jacques",
    role: "PRODUCT OWNER",
    imageColor: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop",
    imageBw: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop&sat=-100",
    social: { linkedin: "#" },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const fourMembers = members.slice(0, 4);
  const col1 = fourMembers.filter((_, i) => i % 2 === 0);
  const col2 = fourMembers.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-4xl mx-auto py-8 px-4 md:px-6 font-sans">
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
  const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

  return (
    <div className={cn("cursor-pointer transition-opacity duration-300", isDimmed ? "opacity-50" : "opacity-100")} onMouseEnter={() => onHover(member.id)} onMouseLeave={() => onHover(null)}>
      <div className="flex items-center gap-2.5">
        <span className={cn("w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300", isActive ? "bg-white w-5" : "bg-white/25")} />
        <span className={cn("text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300", isActive ? "text-white" : "text-white/70")}>{member.name}</span>
        {hasSocial && (
          <div className={cn("flex items-center gap-1.5 ml-0.5 transition-all duration-200", isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none")}>
            {member.social?.twitter && (
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-1 rounded text-white hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110">
                <FaTwitter size={10} color="white" />
              </a>
            )}
            {member.social?.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-1 rounded text-white hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110">
                <FaLinkedinIn size={10} color="white" />
              </a>
            )}
            {member.social?.instagram && (
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-1 rounded text-white hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110">
                <FaInstagram size={10} color="white" />
              </a>
            )}
            {member.social?.behance && (
              <a href={member.social.behance} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-1 rounded text-white hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110">
                <FaBehance size={10} color="white" />
              </a>
            )}
          </div>
        )}
      </div>
      <p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">{member.role}</p>
    </div>
  );
}
