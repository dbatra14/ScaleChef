"use client";

import { useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="ScaleChef home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>ScaleChef</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-cta" href="mailto:hello@scalechef.com" onClick={() => setMenuOpen(false)}>
            Let&apos;s scale <Arrow />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
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
            <a className="text-link" href="#approach">
              See our approach <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="trust-line" id="approach">
            <span>01</span>
            <p>Strategy that moves at startup speed.<br />Systems that scale with you.</p>
          </div>
        </div>

        <div className="hero-visual" id="services" aria-label="ScaleChef growth system visual">
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

      <div className="bottom-strip" id="contact">
        <span>Technology</span><i>+</i><span>Marketing</span><i>+</i><span>Artificial Intelligence</span>
      </div>
    </main>
  );
}
