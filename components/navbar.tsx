"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (!isAboutPage) {
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
  }, [isAboutPage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
        <Link href="/" className="brand" aria-label="ScaleChef home">
          <img src="/logo.png" alt="ScaleChef logo" width={84} height={64} className="brand-logo" />
          <span>ScaleChef</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <Link href="/" onClick={() => setMenuOpen(false)} className={activeId === "home" && !isAboutPage ? "is-active" : ""}>
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
              className={activeId === "services" && !isAboutPage ? "is-active" : ""}
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
                    <strong>Web Development <span>→</span></strong>
                    <small>High-performance websites</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Custom Software Development <span>→</span></strong>
                    <small>Tailored systems that scale</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>AI Solutions <span>→</span></strong>
                    <small>Applied intelligence, real ROI</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>UI/UX Design <span>→</span></strong>
                    <small>Human-centered product design</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>Digital Marketing <span>→</span></strong>
                    <small>Growth &amp; performance</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>SEO &amp; GEO <span>→</span></strong>
                    <small>Be found everywhere</small>
                  </Link>
                  <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }} role="menuitem">
                    <strong>PPC &amp; Advertising <span>→</span></strong>
                    <small>Paid growth that converts</small>
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
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Web Development</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Custom Software Development</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>AI Solutions</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>UI/UX Design</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>Digital Marketing</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>SEO &amp; GEO</Link>
              <Link href="/#services" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>PPC &amp; Advertising</Link>
            </div>
          </div>

          <Link href="/#portfolio" onClick={() => setMenuOpen(false)} className={activeId === "portfolio" && !isAboutPage ? "is-active" : ""}>
            Portfolio
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className={isAboutPage ? "is-active" : ""}>
            About Us
          </Link>
          <a href="mailto:hello@scalechef.com" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </nav>

        <div className="nav-right">
          <a className="nav-cta" href="mailto:hello@scalechef.com" onClick={() => setMenuOpen(false)}>
            Let&apos;s scale <Arrow />
          </a>
          <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav-overlay ${menuOpen ? "is-visible" : ""} ${servicesOpen ? "is-dropdown-open" : ""}`} onClick={() => { setMenuOpen(false); setServicesOpen(false); }} aria-hidden="true" />
    </>
  );
}
