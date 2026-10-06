import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-brand-name" aria-label="ScaleChefs home">
              <img src="/logo-footer.png" alt="ScaleChefs" width={133} height={41} className="footer-logo" />
            </Link>
            <p className="footer-brand-desc">
              Technology, marketing and AI—combined<br />
              to help ambitious businesses scale.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">SERVICES</h4>
            <ul className="footer-links">
              <li><Link href="/#services">Website Development</Link></li>
              <li><Link href="/#services">Technology AMC Management</Link></li>
              <li><Link href="/#services">AI Solutions</Link></li>
              <li><Link href="/#services">Software Development &amp; Custom Tech</Link></li>
              <li><Link href="/#services">Branding &amp; UI/UX Designing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">CONTACT</h4>
            <ul className="footer-links">
              <li><a href="mailto:growth.scalechefs@gmail.com">growth.scalechefs@gmail.com</a></li>
              <li>
                <a
                  href="https://wa.me/918860822800?text=Hello%20ScaleChefs%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li><a href="#" aria-label="LinkedIn (coming soon)">LinkedIn</a></li>
              <li><a href="#" aria-label="Instagram (coming soon)">Instagram</a></li>
              <li><span className="footer-contact-meta">India · Worldwide</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <span>© 2026 ScaleChefs. All rights reserved.</span>
          <span>From strategy to scale.</span>
        </div>
      </div>
    </footer>
  );
}
