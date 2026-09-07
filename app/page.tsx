"use client";

import { useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="ScaleChef home">
          <img src="/logo.svg" alt="ScaleChef logo" width="148" height="60" className="brand-logo" />
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
