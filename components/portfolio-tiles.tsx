import { PROJECTS, type Project } from "@/lib/projects";

export default function PortfolioTiles({ projects = PROJECTS }: { projects?: Project[] }) {
  return (
    <div className="portfolio-tiles">
      {projects.map((p) => (
        <a
          key={p.id}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-tile"
          aria-label={`View ${p.name} (opens in new tab)`}
        >
          <div className="portfolio-tile-media">
            <img src={p.image} alt={p.alt} loading="lazy" className="portfolio-tile-img" />
          </div>
          <div className="portfolio-tile-body">
            <span className="portfolio-tile-kicker">{p.category}</span>
            <h3 className="portfolio-tile-title">{p.name}</h3>
            <p className="portfolio-tile-desc">{p.desc}</p>
            <span className="portfolio-tile-scope">{p.scope ?? p.categories.join(" · ")}</span>
            <span className="portfolio-tile-cta">
              View project <span aria-hidden="true" className="portfolio-tile-arrow">→</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
