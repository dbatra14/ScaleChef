"use client";

import { useState } from "react";

const SERVICES = [
  "Website Development",
  "Technology AMC Management (Website / Software Management)",
  "AI Solutions",
  "Software Development and Custom Tech Solutions",
  "Branding and UI/UX Designing",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[ContactForm] submit", form);
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#19B86A]/20 bg-[#F5F5F7] p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#19B86A] text-[20px] font-bold text-[#1D1D1F]">✓</div>
        <h3 className="mt-4 text-[18px] font-normal text-[#1D1D1F]" style={{ fontFamily: "Prata, Georgia, serif" }}>Message received!</h3>
        <p className="mt-2 text-[13px] leading-5 text-[#6B6B72]">Thanks for reaching out — we&apos;ll get back within 24 hours. Check your email for a confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Name *</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            autoComplete="name"
            className="rounded-xl border border-[rgba(29,29,31,0.10)] bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-[#6B6B72] focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            autoComplete="email"
            className="rounded-xl border border-[rgba(29,29,31,0.10)] bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-[#6B6B72] focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Phone</span>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 ..."
            autoComplete="tel"
            className="rounded-xl border border-[rgba(29,29,31,0.10)] bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-[#6B6B72] focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Company</span>
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Company name"
            autoComplete="organization"
            className="rounded-xl border border-[rgba(29,29,31,0.10)] bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-[#6B6B72] focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Service interested in</span>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="rounded-xl border border-[rgba(29,29,31,0.10)] bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Message *</span>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your project, goals, timeline..."
          rows={5}
          className="rounded-xl border border-[rgba(29,29,31,0.10)] bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-[#6B6B72] focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
        />
      </label>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <button type="submit" className="bg-[#19B86A] px-6 py-3 text-[13px] font-semibold text-[#1D1D1F] hover:bg-[#9BE6BE]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
          Send message ↗
        </button>
        <a
          href="https://wa.me/918860822800?text=Hello%20ScaleChefs%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] font-semibold text-[#1D1D1F] underline underline-offset-4 hover:decoration-[#19B86A]"
          style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
        >
          Or chat on WhatsApp
        </a>
      </div>

      <p className="text-[11px] text-[#6B6B72]">By submitting, you agree we can contact you about your request. No spam.</p>
    </form>
  );
}
