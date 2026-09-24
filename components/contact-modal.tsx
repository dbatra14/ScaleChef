"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SERVICES = [
  "Web Development",
  "Custom Software Development",
  "AI Solutions",
  "UI/UX Design",
  "Digital Marketing",
  "SEO & GEO",
  "PPC & Advertising",
  "Other",
];

export default function ContactModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Local-only: no backend yet. Show success, log payload, reset.
    // TODO: wire to API / mail when backend ready
    console.log("[ContactModal] submit", form);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setSubmitted(false);
    }, 1800);
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose} aria-modal="true" role="dialog" aria-label="Get in touch form">
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="contact-modal-close" onClick={onClose} aria-label="Close contact form">×</button>

        {!submitted ? (
          <>
            <div className="contact-modal-head">
              <p className="contact-modal-kicker">Let&apos;s scale — Get in touch</p>
              <h3>Tell us what you&apos;re cooking.</h3>
              <p>Fill the form and we&apos;ll get back within 24h. Or chat instantly on WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-modal-form">
              <div className="contact-grid-2">
                <label>
                  <span>Name *</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label>
                  <span>Email *</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <div className="contact-grid-2">
                <label>
                  <span>Phone</span>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 ..."
                    autoComplete="tel"
                  />
                </label>
                <label>
                  <span>Company</span>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <label>
                <span>Service interested in</span>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label>
                <span>Message *</span>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project, goals, timeline..."
                  rows={4}
                />
              </label>

              <div className="contact-modal-actions">
                <button type="submit" className="contact-submit">Send message ↗</button>
                <a
                  href="https://wa.me/9188607822800?text=Hello%20ScaleChefs%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-wa-link"
                >
                  Or chat on WhatsApp
                </a>
              </div>

              <p className="contact-modal-footnote">By submitting, you agree we can contact you about your request. No spam.</p>
            </form>
          </>
        ) : (
          <div className="contact-success">
            <div className="contact-success-icon">✓</div>
            <h3>Message received!</h3>
            <p>Thanks for reaching out — we&apos;ll get back within 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
}
