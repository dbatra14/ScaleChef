"use client";

import { useState } from "react";

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
      <div className="rounded-2xl border border-[#19B86A]/20 bg-[#EEFAF3] p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#19B86A] text-[20px] font-bold text-white">✓</div>
        <h3 className="mt-4 text-[18px] font-bold text-[#1D1D1F]" style={{ fontFamily: "Inter, sans-serif" }}>Message received!</h3>
        <p className="mt-2 text-[13px] leading-5 text-zinc-600">Thanks for reaching out — we&apos;ll get back within 24 hours. Check your email for a confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-500" style={{ fontFamily: "Inter, sans-serif" }}>Name *</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            autoComplete="name"
            className="rounded-xl border border-black/10 bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-zinc-400 focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-500" style={{ fontFamily: "Inter, sans-serif" }}>Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            autoComplete="email"
            className="rounded-xl border border-black/10 bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-zinc-400 focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-500" style={{ fontFamily: "Inter, sans-serif" }}>Phone</span>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 ..."
            autoComplete="tel"
            className="rounded-xl border border-black/10 bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-zinc-400 focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-500" style={{ fontFamily: "Inter, sans-serif" }}>Company</span>
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Company name"
            autoComplete="organization"
            className="rounded-xl border border-black/10 bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-zinc-400 focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-500" style={{ fontFamily: "Inter, sans-serif" }}>Service interested in</span>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="rounded-xl border border-black/10 bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-500" style={{ fontFamily: "Inter, sans-serif" }}>Message *</span>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your project, goals, timeline..."
          rows={5}
          className="rounded-xl border border-black/10 bg-white px-3.5 py-3 text-[13px] text-[#1D1D1F] placeholder:text-zinc-400 focus:border-[#19B86A] focus:outline-none focus:ring-4 focus:ring-[#19B86A]/15"
        />
      </label>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <button type="submit" className="bg-[#19B86A] px-6 py-3 text-[13px] font-bold text-white hover:bg-[#109556]" style={{ fontFamily: "Inter, sans-serif" }}>
          Send message ↗
        </button>
        <a
          href="https://wa.me/9188607822800?text=Hello%20ScaleChefs%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] font-bold text-[#1D1D1F] underline underline-offset-4 hover:text-[#19B86A]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Or chat on WhatsApp
        </a>
      </div>

      <p className="text-[11px] text-zinc-400">By submitting, you agree we can contact you about your request. No spam.</p>
    </form>
  );
}
