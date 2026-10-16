"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isPortfolioPage = pathname === "/portfolio";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (!isAboutPage && !isContactPage && !isPortfolioPage) {
        const ids = ["home", "services", "portfolio"];
        let current = "home";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && window.scrollY >= el.offsetTop - 130) current = id;
        }
        setActiveId(current);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isAboutPage, isContactPage, isPortfolioPage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
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
      closeTimeoutRef.current = window.setTimeout(() => setServicesOpen(false), 80);
    }
  };
  const handleServicesToggle = () => {
    if (window.innerWidth <= 900) {
      setServicesOpen((v) => !v);
    }
  };

  return (
    <>
      <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`} id="navbar">
        <Link href="/" className="brand" aria-label="ScaleChefs home">
          <img src="/logo.png" alt="ScaleChefs" width={147} height={44} className="brand-logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <Link href="/" onClick={() => setMenuOpen(false)} className={activeId === "home" && !isAboutPage && !isContactPage ? "is-active" : ""}>
            Home
          </Link>

          <div
            className={`nav-item has-dropdown ${servicesOpen ? "is-open" : ""}`}
            ref={servicesRef}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link
              href="/#services"
              className={activeId === "services" && !isAboutPage && !isContactPage ? "is-active" : ""}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              onClick={(e) => {
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
            </Link>

            <div
              id="services-dropdown"
              className="dropdown"
              role="menu"
              aria-label="Services submenu"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <div className="dropdown-inner">
                <div className="dropdown-links">
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Website Development <span>→</span></strong>
                    <small>High-performance websites</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Technology AMC Management <span>→</span></strong>
                    <small>Website &amp; software management</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>AI Solutions <span>→</span></strong>
                    <small>Applied intelligence, real ROI</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Software Development &amp; Custom Tech <span>→</span></strong>
                    <small>Tailored systems that scale</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Branding &amp; UI/UX Designing <span>→</span></strong>
                    <small>Human-centered product design</small>
                  </Link>
                </div>
              </div>

              <div className="dropdown-decor" aria-hidden="true">
                <img
                  src="/services-3d.png"
                  alt=""
                  width={220}
                  height={220}
                  className="decor-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const placeholder = target.nextElementSibling as HTMLElement | null;
                    if (placeholder) placeholder.style.display = "flex";
                  }}
                />
                <div className="image-placeholder" style={{ display: "none" }}>
                  3D IMAGE<br />HERE
                </div>
              </div>
            </div>

            <div className={`mobile-services ${servicesOpen ? "is-open" : ""}`}>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Website Development</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Technology AMC Management</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>AI Solutions</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Software Development &amp; Custom Tech</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Branding &amp; UI/UX Designing</Link>
            </div>
          </div>

          <Link href="/portfolio" onClick={() => setMenuOpen(false)} className={isPortfolioPage || (activeId === "portfolio" && !isAboutPage && !isContactPage && !isPortfolioPage) ? "is-active" : ""}>
            Portfolio
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className={isAboutPage ? "is-active" : ""}>
            About Us
          </Link>

          {/* Mobile-only Let's Scale inside drawer - links straight to contact form */}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mobile-scale-trigger mobile-scale-direct">
            Let&apos;s scale <Arrow />
          </Link>
        </nav>

        <div className="nav-right">
          {/* Desktop Let's Scale - links directly to the contact form */}
          <Link href="/contact" className="nav-cta nav-cta-direct">
            Let&apos;s scale <Arrow />
          </Link>

          <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`nav-overlay ${menuOpen ? "is-visible" : ""} ${servicesOpen ? "is-dropdown-open" : ""}`}
        onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
        aria-hidden="true"
      />
    </>
  );
}
