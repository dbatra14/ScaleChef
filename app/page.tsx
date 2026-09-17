import Navbar from "@/components/navbar";

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
            ScaleChef is your growth partner—combining smart technology,
            standout marketing and practical AI to turn momentum into scale.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="mailto:hello@scalechef.com">
              Cook up growth <Arrow />
            </a>
            <a className="text-link" href="#services">
              See our services <span aria-hidden="true">↓</span>
            </a>
          </div>


        </div>

        <div className="hero-visual" aria-label="ScaleChef growth system visual">
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

          <div className="visual-footer">
            <span>STRATEGY</span><i />
            <span>SYSTEMS</span><i />
            <span>STORIES</span>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-head">
          <span className="section-kicker">02 — Services</span>
          <h2>Everything you need to scale.</h2>
          <p>Pick the engine you need — we plug it into your growth kitchen.</p>
        </div>
        <div className="service-grid">
          <article className="service-card"><h3>Web Development</h3><p>High-performance, SEO-ready websites built to convert.</p></article>
          <article className="service-card"><h3>Custom Software Development</h3><p>Tailored systems that scale with you.</p></article>
          <article className="service-card"><h3>AI Solutions</h3><p>Applied intelligence that delivers real ROI.</p></article>
          <article className="service-card"><h3>UI/UX Design</h3><p>Human-centered design that turns users into fans.</p></article>
          <article className="service-card"><h3>Digital Marketing</h3><p>Performance and brand marketing that compounds.</p></article>
          <article className="service-card"><h3>SEO &amp; GEO</h3><p>Be found everywhere your customers search.</p></article>
          <article className="service-card"><h3>PPC &amp; Advertising</h3><p>Paid growth that converts efficiently.</p></article>
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <div className="section-head">
          <span className="section-kicker">03 — Portfolio</span>
          <h2>Work that speaks for scale.</h2>
          <p>A glimpse of momentum we have cooked for ambitious teams.</p>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-card">SaaS Launch — 3.2× pipeline</div>
          <div className="portfolio-card">D2C Brand — 180% growth</div>
          <div className="portfolio-card">Fintech Platform — AI-led ops</div>
        </div>
      </section>

    </main>
  );
}
