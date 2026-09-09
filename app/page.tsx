"use client";

import { useState, useEffect, useRef } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  // Scroll + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const ids = ["home", "services", "portfolio", "about", "contact"];
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Click outside + Escape for Services dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      // also close mobile if clicking outside nav
      const nav = document.getElementById("navbar");
      const target = e.target as Node;
      if (menuOpen && nav && !nav.contains(target)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const handleServicesEnter = () => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    if (window.innerWidth > 900) setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    if (window.innerWidth > 900) {
      // small delay to allow moving into dropdown (safe area)
      closeTimeoutRef.current = window.setTimeout(() => setServicesOpen(false), 80);
    }
  };
  const handleServicesToggle = () => {
    // Mobile/touch toggle
    if (window.innerWidth <= 900) {
      setServicesOpen((v) => !v);
    }
  };

  return (
    <main className="site-shell">
      <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`} id="navbar">
        <a className="brand" href="#home" aria-label="ScaleChef home">
          <img src="/logo.png" alt="ScaleChef logo" width="84" height="64" className="brand-logo" />
          <span>ScaleChef</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#home" onClick={() => setMenuOpen(false)} className={activeId === "home" ? "is-active" : ""}>
            Home
          </a>

          <div
            className={`nav-item has-dropdown ${servicesOpen ? "is-open" : ""}`}
            ref={servicesRef}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <a
              href="#services"
              className={activeId === "services" ? "is-active" : ""}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              onClick={(e) => {
                // On desktop, allow hover; on mobile, toggle dropdown instead of navigating immediately
                if (window.innerWidth <= 900) {
                  e.preventDefault();
                  handleServicesToggle();
                } else {
                  setMenuOpen(false);
                }
              }}
              onFocus={handleServicesEnter}
            >
              Services <span className="nav-arrow" aria-hidden="true">▾</span>
            </a>

            <div
              id="services-dropdown"
              className="dropdown"
              role="menu"
              aria-label="Services submenu"
              // keep open when hovering dropdown itself
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <div className="dropdown-inner">
                <div className="dropdown-links">
                  <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Web Development <span>→</span></strong>
                    <small>High-performance websites</small>
                  </a>
                  <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Custom Software Development <span>→</span></strong>
                    <small>Tailored systems that scale</small>
                  </a>
                  <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>AI Solutions <span>→</span></strong>
                    <small>Applied intelligence, real ROI</small>
                  </a>
                  <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>UI/UX Design <span>→</span></strong>
                    <small>Human-centered product design</small>
                  </a>
                  <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Digital Marketing <span>→</span></strong>
                    <small>Growth &amp; performance</small>
                  </a>
                  <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>SEO &amp; GEO <span>→</span></strong>
                    <small>Be found everywhere</small>
                  </a>
                  <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>PPC &amp; Advertising <span>→</span></strong>
                    <small>Paid growth that converts</small>
                  </a>
                </div>
              </div>

              {/* Decorative 3D image - overlaps bottom/right edge, overflow visible */}
              <div className="dropdown-decor" aria-hidden="true">
                {/* USE THE PROVIDED 3D IMAGE - exact asset */}
                {/* Place your image at public/services-3d.png */}
                <img
                  src="/services-3d.png"
                  alt=""
                  width={220}
                  height={220}
                  className="decor-image"
                  // fallback if image missing, CSS will show placeholder styling
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const placeholder = target.nextElementSibling as HTMLElement | null;
                    if (placeholder) placeholder.style.display = "flex";
                  }}
                />
                <div className="image-placeholder" style={{ display: "none" }}>
                  {/* Fallback placeholder - replace with /services-3d.png */}
                  3D IMAGE<br />HERE
                </div>
              </div>
            </div>

            {/* Mobile inline sub-pages */}
            <div className={`mobile-services ${servicesOpen ? "is-open" : ""}`}>
              <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Web Development</a>
              <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Custom Software Development</a>
              <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>AI Solutions</a>
              <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>UI/UX Design</a>
              <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Digital Marketing</a>
              <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>SEO &amp; GEO</a>
              <a href="#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>PPC &amp; Advertising</a>
            </div>
          </div>

          <a href="#portfolio" onClick={() => setMenuOpen(false)} className={activeId === "portfolio" ? "is-active" : ""}>
            Portfolio
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className={activeId === "about" ? "is-active" : ""}>
            About Us
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={activeId === "contact" ? "is-active" : ""}>
            Contact Us
          </a>
        </nav>

        <div className="nav-right">
          <a className="nav-cta" href="mailto:hello@scalechef.com" onClick={() => setMenuOpen(false)}>
            Let&apos;s scale <Arrow />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Overlay - mobile menu + subtle Discord-like blur behind Services dropdown */}
      <div
        className={`nav-overlay ${menuOpen ? "is-visible" : ""} ${servicesOpen ? "is-dropdown-open" : ""}`}
        onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
        aria-hidden="true"
      />

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

          <div className="trust-line">
            <span>01</span>
            <p>Strategy that moves at startup speed.<br />Systems that scale with you.</p>
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

          <div className="hindi-note">
            <span>सोच से स्केल तक</span>
            <small>From idea to scale</small>
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

      <section className="section about-section" id="about">
        <div className="section-head">
          <span className="section-kicker">04 — About Us</span>
          <h2>Small team. Big scale mindset.</h2>
          <p>We operate like your on-demand growth kitchen — lean, fast, and obsessed with outcomes.</p>
        </div>
        <div className="about-stats">
          <div><strong>50+</strong><span>Projects shipped</span></div>
          <div><strong>3.4×</strong><span>Avg. momentum lift</span></div>
          <div><strong>98%</strong><span>Client retention</span></div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-head">
          <span className="section-kicker">05 — Contact Us</span>
          <h2>Let&apos;s cook up growth.</h2>
          <p>Tell us where you are. We will map how to scale.</p>
        </div>
        <a className="primary-button contact-cta" href="mailto:hello@scalechef.com">hello@scalechef.com <Arrow /></a>
      </section>

      <div className="bottom-strip">
        <span>Technology</span><i>+</i><span>Marketing</span><i>+</i><span>Artificial Intelligence</span>
      </div>

      <a
        href="https://wa.me/9188607822800?text=Hello%20ScaleChef%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ScaleChef"
      >
        <span className="whatsapp-tooltip">Chat with us</span>
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" fill="none">
          <path
            fill="white"
            d="M26.2 5.8A13.9 13.9 0 0 0 16.1.1C8.5.1 2.3 6.3 2.3 14c0 2.4.6 4.8 1.8 6.9L2 30l9.3-2.4a13.9 13.9 0 0 0 6.6 1.7h.1c7.6 0 13.8-6.2 13.8-13.9 0-3.7-1.4-7.2-4-9.8l.4.2Zm-10.1 21.5h-.1a11.5 11.5 0 0 1-5.9-1.6l-.4-.2-5.6 1.4 1.5-5.4-.3-.5a11.55 11.55 0 0 1-1.8-6.2c0-6.4 5.2-11.6 11.6-11.6 3.1 0 6 1.2 8.2 3.4a11.5 11.5 0 0 1 3.4 8.2c0 6.4-5.2 11.5-11.6 11.5Zm8-8.7c-.4-.2-2.6-1.3-3-1.4-.4-.2-.7-.2-1 .2-.3.4-1.2 1.4-1.4 1.7-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8l.7-.9c.2-.3.3-.5.4-.8.1-.3 0-.6 0-.8l-1.2-3c-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.8.1-1.2.6-.4.4-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 3 4.6 7.4 6.3.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z"
          />
        </svg>
      </a>
    </main>
  );
}
