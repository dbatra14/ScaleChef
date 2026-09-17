import Navbar from "@/components/navbar";
import PortfolioClient from "@/components/portfolio-client";
import Link from "next/link";

export const metadata = {
  title: "ScaleChef — Selected Work & Portfolio",
  description: "Selected digital products, brand experiences and business systems designed and developed by ScaleChef.",
};

export default function PortfolioPage() {
  return (
    <main className="site-shell">
      <Navbar />

      {/* Hero - restrained, fits viewport, max 4 text elements, pt max 24 */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-inner">
          <p className="portfolio-hero-kicker">SELECTED WORK</p>
          <h1 className="portfolio-hero-title">
            Digital work with
            <br />
            something to say.
          </h1>
          <p className="portfolio-hero-sub">
            A selection of digital products, brand experiences and business systems designed and developed by ScaleChef.
          </p>
        </div>
      </section>

      <section className="portfolio-page-section">
        <div className="portfolio-page-inner">
          <PortfolioClient />
        </div>
      </section>

      {/* Compact CTA before footer - single intent Let's scale */}
      <section className="portfolio-cta-section">
        <div className="portfolio-cta-inner">
          <div className="portfolio-cta-copy">
            <h2>Have a project in mind?</h2>
            <p>Let&apos;s build something worth showing.</p>
          </div>
          <Link href="/contact" className="portfolio-cta-btn">
            Let&apos;s scale <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
