import Navbar from "@/components/navbar";
import PortfolioTiles from "@/components/portfolio-tiles";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import ContactWithGlobe from "@/components/ui/contact-with-globe";
import Services01 from "@/components/ui/services-01";
import WaveLettering from "@/components/ui/wave-lettering";
import { PROJECTS } from "@/lib/projects";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="hero" id="home">
        {/* Decorative layer. The canvas is pointer-events:none and the copy
            sits at z-index 10 above it, so the wave can never intercept the
            headline, paragraph or buttons. */}
        <div className="hero-wave" aria-hidden="true">
          <WaveLettering />
        </div>

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Built for ambitious businesses
          </div>

          <h1>
            We mix tech,
            <br />
            marketing &amp; <span className="accent-word">AI.</span>
          </h1>

          <p className="hero-description">
            ScaleChefs is your growth partner—combining smart technology,
            standout marketing and practical AI to turn momentum into scale.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="mailto:growth.scalechefs@gmail.com">
              Cook up growth <Arrow />
            </a>
            <a className="text-link" href="#services">
              See our services <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>

      </section>

      <Services01 />

      <section className="section portfolio-section" id="portfolio">
        <div className="section-head">
          <span className="section-kicker">Portfolio</span>
          <h2>Work that speaks for scale.</h2>
          <p>A glimpse of momentum we have cooked for ambitious teams.</p>
        </div>
        <PortfolioTiles projects={PROJECTS.slice(0, 3)} />
        <div className="portfolio-more">
          <a className="text-link" href="/portfolio">
            View all {PROJECTS.length} projects <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="section-head">
          <span className="section-kicker">Testimonials</span>
          <h2>What our clients say.</h2>
          <p>Straight from the teams we have cooked with.</p>
        </div>
        <div className="testimonials-frame">
          <StaggerTestimonials />
        </div>
      </section>

      <section className="contact-globe-section" id="contact">
        <ContactWithGlobe
          title="Let&rsquo;s cook something great."
          description="Tell us about your project, goals and timeline. We reply within 24h &mdash; no pitch deck required."
        />
      </section>

    </main>
  );
}
