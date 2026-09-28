"use client";

import { useState } from "react";
import PortfolioTiles from "@/components/portfolio-tiles";
import { FILTERS, PROJECTS } from "@/lib/projects";

export default function PortfolioClient() {
  const [active, setActive] = useState("ALL");
  const filtered = active === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active));

  return (
    <div className="portfolio-page-wrap">
      <div className="portfolio-filter-row" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={`portfolio-filter-btn ${active === f ? "is-active" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="portfolio-empty">
          <p>No projects in this category. Try another filter.</p>
          <button onClick={() => setActive("ALL")} className="portfolio-empty-btn">
            Show all work
          </button>
        </div>
      ) : (
        <PortfolioTiles projects={filtered} />
      )}
    </div>
  );
}
