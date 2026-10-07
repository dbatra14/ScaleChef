import Navbar from "@/components/navbar";
import PortfolioTiles from "@/components/portfolio-tiles";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import ContactWithGlobe from "@/components/ui/contact-with-globe";
import { PROJECTS } from "@/lib/projects";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Built for ambitious businesses
          </div>

          <h1>
            We mix tech,<br />
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
              See our services <span aria-hidden="true">↓</span>
            </a>
          </div>


        </div>

        <div className="hero-visual" aria-label="ScaleChefs growth system visual">
          <div className="visual-topline">
            <span>THE SCALE KITCHEN</span>
            <span>EST. 2026</span>
          </div>

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-core">
            <span>GROWTH</span>
            <strong>×3.4</strong>
            <small>AVG. MOMENTUM</small>
          </div>

          <div className="signal-card signal-tech">
            <span className="signal-icon">01</span>
            <div><strong>Technology</strong><small>Built to perform</small></div>
          </div>
          <div className="signal-card signal-marketing">
            <span className="signal-icon">02</span>
            <div><strong>Marketing</strong><small>Made to connect</small></div>
          </div>
          <div className="signal-card signal-ai">
            <span className="signal-icon">03</span>
            <div><strong>AI</strong><small>Applied intelligently</small></div>
          </div>
          <div className="signal-card" style={{ right: "5%", bottom: "18%", transform: "rotate(-1.8deg)" }}>
            <span className="signal-icon">04</span>
            <div><strong>Growth Ops</strong><small>Systems that scale</small></div>
          </div>

          <div className="visual-footer">
            <span>STRATEGY</span><i />
            <span>SYSTEMS</span><i />
            <span>STORIES</span>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-head">
          <span className="section-kicker">Services</span>
          <h2>Everything you need to scale.</h2>
          <p>Pick the engine you need — we plug it into your growth kitchen.</p>
        </div>
        <div className="service-grid">
          <article className="service-card"><h3>Website Development</h3><p>High-performance, SEO-ready websites built to convert.</p></article>
          <article className="service-card"><h3>Technology AMC Management (Website / Software Management)</h3><p>Annual maintenance contracts that keep your website and software monitored, patched and running.</p></article>
          <article className="service-card"><h3>AI Solutions</h3><p>Applied intelligence that delivers real ROI.</p></article>
          <article className="service-card"><h3>Software Development and Custom Tech Solutions</h3><p>Tailored systems and integrations that scale with you.</p></article>
          <article className="service-card"><h3>Branding and UI/UX Designing</h3><p>Identity and interface design that turns users into fans.</p></article>
        </div>
      </section>

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
