import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Layout primitives used by services-01.
 *
 * Colours are expressed through the brand palette so this stays inside the
 * 9 permitted brand colours. Note in particular that section headings use
 * Prata at font-weight 400 — the brand sets a single weight and never bolds
 * the serif.
 */

export function Section({
  id,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"section">) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-[rgba(29,29,31,0.11)] px-[4.2vw] py-16 md:py-20",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className="inline-block rounded px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1D1D1F] bg-[#9BE6BE]"
          style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2
        className="mt-3 text-[28px] font-normal leading-[1.15] tracking-tight text-[#1D1D1F] md:text-[40px]"
        style={{ fontFamily: "Prata, Georgia, serif" }}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-6 text-[#6B6B72] md:text-[16px]",
            align === "center" ? "max-w-[620px]" : "max-w-[560px]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}