"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Arrow = () => <span aria-hidden="true">↗</span>;
const WHATSAPP_HREF =
  "https://wa.me/9188607822800?text=Hello%20ScaleChef%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details.";

export default function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scaleOpen, setScaleOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const scaleCloseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (!isAboutPage && !isContactPage) {
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
  }, [isAboutPage, isContactPage]);

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
      if (scaleRef.current && !scaleRef.current.contains(e.target as Node)) {
        setScaleOpen(false);
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
        setScaleOpen(false);
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

  const handleScaleEnter = () => {
    if (scaleCloseTimeoutRef.current) window.clearTimeout(scaleCloseTimeoutRef.current);
    if (window.innerWidth > 900) setScaleOpen(true);
  };
  const handleScaleLeave = () => {
    if (window.innerWidth > 900) {
      scaleCloseTimeoutRef.current = window.setTimeout(() => setScaleOpen(false), 80);
    }
  };
  const handleScaleToggle = () => {
    setScaleOpen((v) => !v);
  };

  return (
    <>
      <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`} id="navbar">
        <Link href="/" className="brand" aria-label="ScaleChef home">
          <img src="/logo.png" alt="ScaleChef logo" width={84} height={64} className="brand-logo" />
          <span>ScaleChef</span>
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

          <Link href="/#portfolio" onClick={() => setMenuOpen(false)} className={activeId === "portfolio" && !isAboutPage && !isContactPage ? "is-active" : ""}>
            Portfolio
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className={isAboutPage ? "is-active" : ""}>
            About Us
          </Link>

          {/* Mobile-only Let's Scale inside drawer */}
          <div className={`nav-item has-dropdown mobile-cta-item ${scaleOpen ? "is-open" : ""}`}>
            <a
              href="#"
              aria-haspopup="true"
              aria-expanded={scaleOpen}
              aria-controls="scale-dropdown-mobile"
              onClick={(e) => {
                e.preventDefault();
                handleScaleToggle();
              }}
              className="mobile-scale-trigger"
            >
              Let&apos;s scale <span className="nav-arrow" aria-hidden="true">▾</span>
            </a>
            <div id="scale-dropdown-mobile" className={`mobile-scale-options ${scaleOpen ? "is-open" : ""}`}>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" onClick={() => { setScaleOpen(false); setMenuOpen(false); }} className="mobile-scale-link">
                <strong>Chat on WhatsApp <span>→</span></strong>
                <small>Instant reply • Mon–Sat 10am–7pm IST</small>
              </a>
              <Link href="/contact" onClick={() => { setScaleOpen(false); setMenuOpen(false); }} className="mobile-scale-link mobile-scale-btn">
                <strong>Get in touch — Fill form <span>→</span></strong>
                <small>We reply within 24h</small>
              </Link>
              <div className="mobile-scale-email">Prefer email? <a href="mailto:hello@scalechef.com">hello@scalechef.com</a></div>
            </div>
          </div>
        </nav>

        <div className="nav-right">
          {/* Desktop Let's Scale dropdown - 2-col, links to /contact */}
          <div
            className={`nav-cta-wrap has-dropdown has-cta-dropdown ${scaleOpen ? "is-open" : ""}`}
            ref={scaleRef}
            onMouseEnter={handleScaleEnter}
            onMouseLeave={handleScaleLeave}
          >
            <button
              className="nav-cta nav-cta-trigger"
              type="button"
              aria-haspopup="true"
              aria-expanded={scaleOpen}
              aria-controls="scale-dropdown"
              onClick={() => {
                if (window.innerWidth <= 900) {
                  handleScaleToggle();
                } else {
                  setScaleOpen((v) => !v);
                }
              }}
              onFocus={handleScaleEnter}
            >
              Let&apos;s scale <Arrow />
            </button>

            <div
              id="scale-dropdown"
              className="dropdown dropdown-cta"
              role="menu"
              aria-label="Let's scale options"
              onMouseEnter={handleScaleEnter}
              onMouseLeave={handleScaleLeave}
            >
              <div className="scale-two-col">
                <div className="scale-divider" aria-hidden="true" />
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="scale-col scale-col-wa"
                  onClick={() => setScaleOpen(false)}
                >
                  <div className="scale-col-inner">
                    <strong>Chat on WhatsApp <span>→</span></strong>
                    <small>Instant reply — avg. 2 min<br />Mon–Sat 10am–7pm IST</small>
                  </div>
                </a>
                <Link
                  href="/contact"
                  role="menuitem"
                  className="scale-col scale-col-contact"
                  onClick={() => setScaleOpen(false)}
                >
                  <div className="scale-col-inner">
                    <strong>Get in touch — Fill Form <span>→</span></strong>
                    <small>Tell us about your project.<br />We reply within 24h.</small>
                  </div>
                  <div className="scale-image-wrap" aria-hidden="true">
                    <img
                      src="/contact-3d.png"
                      alt=""
                      width={170}
                      height={170}
                      className="scale-image"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = "none";
                      }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`nav-overlay ${menuOpen ? "is-visible" : ""} ${servicesOpen || scaleOpen ? "is-dropdown-open" : ""} ${scaleOpen ? "is-scale-open" : ""}`}
        onClick={() => { setMenuOpen(false); setServicesOpen(false); setScaleOpen(false); }}
        aria-hidden="true"
      />
    </>
  );
}
