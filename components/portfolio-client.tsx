"use client";

import { useState } from "react";

type Project = {
  id: string;
  name: string;
  category: string;
  categories: string[];
  desc: string;
  url: string;
  image: string;
  alt: string;
  scope?: string;
  meta?: string;
};

const PROJECTS: Project[] = [
  {
    id: "misaki",
    name: "Misaki Med Spa",
    category: "Healthcare / Brand Website",
    categories: ["WEB", "BRAND"],
    desc: "A refined digital presence designed to present treatments, atmosphere and services.",
    url: "https://misaki-medspa.vercel.app/",
    image: "/portfolio-misaki.png",
    alt: "Misaki Med Spa website",
    scope: "Web Design · Development · UX",
  },
  {
    id: "drishtivision",
    name: "DrishtiVision CRM",
    category: "CRM / Business Software",
    categories: ["CRM", "WEB"],
    desc: "A purpose-built CRM experience to organize workflows and customer management.",
    url: "https://drishtivision-crm.vercel.app/",
    image: "/portfolio-drishtivision.png",
    alt: "DrishtiVision CRM interface",
    scope: "Product Design · Development",
  },
  {
    id: "dayhr",
    name: "Day HR",
    category: "HR Technology / SaaS",
    categories: ["HR TECH", "WEB"],
    desc: "A focused HR platform to simplify everyday people and workforce workflows.",
    url: "https://dayhr.vercel.app/",
    image: "/portfolio-dayhr.png",
    alt: "Day HR platform",
    scope: "Web App · Design · Development",
  },
  {
    id: "riverview",
    name: "Riverview Roofing",
    category: "Local Business / Lead Generation",
    categories: ["WEB", "BRAND"],
    desc: "A conversion-focused digital presence built to communicate services and make it easier to get in touch.",
    url: "https://riverview-roofing.vercel.app/",
    image: "/portfolio-riverview.png",
    alt: "Riverview Roofing website",
    scope: "Web Design · Development",
  },
  {
    id: "extngo",
    name: "Extngo",
    category: "Product / Industrial Design",
    categories: ["PRODUCT"],
    desc: "A product-focused digital experience for a retractable flat CAT6 cable reel engineered around cleaner storage and safer spaces.",
    url: "https://extngo-iota.vercel.app/",
    image: "/portfolio-extngo.png",
    alt: "Extngo product website",
    scope: "Product Website · Industrial Detail",
    meta: "50 FT · ZERO TANGLES · ZERO TRIP HAZARDS",
  },
  {
    id: "aurum",
    name: "AURUM",
    category: "Luxury / Fragrance",
    categories: ["BRAND", "ECOMMERCE"],
    desc: "An editorial digital experience for a heritage-inspired perfume house built around five rare fragrance compositions.",
    url: "https://aurum-maison-noir-theta.vercel.app/",
    image: "/portfolio-aurum.png",
    alt: "AURUM heritage perfume house website",
    scope: "Brand · Editorial · Commerce",
  },
];

const FILTERS = ["ALL", "WEB", "PRODUCT", "CRM", "HR TECH", "BRAND"];

export default function PortfolioClient() {
  const [active, setActive] = useState("ALL");
  const filtered = active === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active));

  const isAll = active === "ALL";

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
      ) : isAll ? (
        <div className="portfolio-editorial">
          {/* Row 1: Misaki large + DrishtiVision */}
          <div className="portfolio-row portfolio-row-1">
            <a
              href={PROJECTS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card portfolio-card-large portfolio-card-misaki"
              aria-label={`View ${PROJECTS[0].name} (opens in new tab)`}
            >
              <div className="portfolio-card-media">
                <img src={PROJECTS[0].image} alt={PROJECTS[0].alt} loading="lazy" className="portfolio-card-img" />
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-card-kicker">{PROJECTS[0].category}</span>
                <h3 className="portfolio-card-title">{PROJECTS[0].name}</h3>
                <p className="portfolio-card-desc">{PROJECTS[0].desc}</p>
                <span className="portfolio-card-cta">
                  View project <span aria-hidden="true" className="portfolio-card-arrow">→</span>
                </span>
              </div>
            </a>
            <a
              href={PROJECTS[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card portfolio-card-compact portfolio-card-drishti"
              aria-label={`View ${PROJECTS[1].name} (opens in new tab)`}
            >
              <div className="portfolio-card-media is-portrait">
                <img src={PROJECTS[1].image} alt={PROJECTS[1].alt} loading="lazy" className="portfolio-card-img" />
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-card-kicker">{PROJECTS[1].category}</span>
                <h3 className="portfolio-card-title">{PROJECTS[1].name}</h3>
                <p className="portfolio-card-desc">{PROJECTS[1].desc}</p>
                <span className="portfolio-card-cta">
                  View project <span aria-hidden="true" className="portfolio-card-arrow">→</span>
                </span>
              </div>
            </a>
          </div>

          {/* Row 2: Day HR + Riverview */}
          <div className="portfolio-row portfolio-row-2">
            <a
              href={PROJECTS[2].url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card portfolio-card-compact"
              aria-label={`View ${PROJECTS[2].name} (opens in new tab)`}
            >
              <div className="portfolio-card-media">
                <img src={PROJECTS[2].image} alt={PROJECTS[2].alt} loading="lazy" className="portfolio-card-img" />
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-card-kicker">{PROJECTS[2].category}</span>
                <h3 className="portfolio-card-title">{PROJECTS[2].name}</h3>
                <p className="portfolio-card-desc">{PROJECTS[2].desc}</p>
                <span className="portfolio-card-cta">
                  View project <span aria-hidden="true" className="portfolio-card-arrow">→</span>
                </span>
              </div>
            </a>
            <a
              href={PROJECTS[3].url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card portfolio-card-large"
              aria-label={`View ${PROJECTS[3].name} (opens in new tab)`}
            >
              <div className="portfolio-card-media">
                <img src={PROJECTS[3].image} alt={PROJECTS[3].alt} loading="lazy" className="portfolio-card-img" />
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-card-kicker">{PROJECTS[3].category}</span>
                <h3 className="portfolio-card-title">{PROJECTS[3].name}</h3>
                <p className="portfolio-card-desc">{PROJECTS[3].desc}</p>
                <span className="portfolio-card-cta">
                  View project <span aria-hidden="true" className="portfolio-card-arrow">→</span>
                </span>
              </div>
            </a>
          </div>

          {/* Row 3: Extngo featured */}
          <a
            href={PROJECTS[4].url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card portfolio-feature portfolio-feature-extngo"
            aria-label={`View ${PROJECTS[4].name} (opens in new tab)`}
          >
            <div className="portfolio-feature-media">
              <img src={PROJECTS[4].image} alt={PROJECTS[4].alt} loading="lazy" className="portfolio-feature-img" />
            </div>
            <div className="portfolio-feature-body">
              <div className="portfolio-feature-head">
                <span className="portfolio-card-kicker">{PROJECTS[4].category}</span>
                <span className="portfolio-feature-meta">{PROJECTS[4].meta}</span>
              </div>
              <h3 className="portfolio-card-title is-feature">{PROJECTS[4].name}</h3>
              <p className="portfolio-card-desc is-feature">{PROJECTS[4].desc}</p>
              <span className="portfolio-card-cta">
                View project <span aria-hidden="true" className="portfolio-card-arrow">→</span>
              </span>
            </div>
          </a>

          {/* Row 4: Aurum editorial */}
          <a
            href={PROJECTS[5].url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card portfolio-feature portfolio-feature-aurum"
            aria-label={`View ${PROJECTS[5].name} (opens in new tab)`}
          >
            <div className="portfolio-feature-media is-aurum">
              <img src={PROJECTS[5].image} alt={PROJECTS[5].alt} loading="lazy" className="portfolio-feature-img" />
            </div>
            <div className="portfolio-feature-body is-aurum">
              <span className="portfolio-card-kicker is-light">{PROJECTS[5].category}</span>
              <h3 className="portfolio-card-title is-feature is-light">{PROJECTS[5].name}</h3>
              <p className="portfolio-card-desc is-feature is-light">{PROJECTS[5].desc}</p>
              <span className="portfolio-card-cta is-light">
                View project <span aria-hidden="true" className="portfolio-card-arrow">→</span>
              </span>
            </div>
          </a>
        </div>
      ) : (
        <div className="portfolio-filtered-grid">
          {filtered.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`portfolio-card ${p.id === "aurum" ? "is-dark" : ""}`}
              aria-label={`View ${p.name} (opens in new tab)`}
            >
              <div className="portfolio-card-media">
                <img src={p.image} alt={p.alt} loading="lazy" className="portfolio-card-img" />
              </div>
              <div className="portfolio-card-body">
                <span className={`portfolio-card-kicker ${p.id === "aurum" ? "is-light" : ""}`}>{p.category}</span>
                <h3 className={`portfolio-card-title ${p.id === "aurum" ? "is-light" : ""}`}>{p.name}</h3>
                <p className={`portfolio-card-desc ${p.id === "aurum" ? "is-light" : ""}`}>{p.desc}</p>
                <span className={`portfolio-card-cta ${p.id === "aurum" ? "is-light" : ""}`}>
                  View project <span aria-hidden="true" className="portfolio-card-arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
