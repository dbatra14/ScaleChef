import { ArrowUpRight } from "lucide-react";

import {
  Section,
  SectionHeader,
} from "@/components/ui/services-01-utils/section";

const header = {
  eyebrow: "Services",
  title: "Everything you need to scale.",
  description:
    "Pick the engine you need — we plug it into your growth kitchen.",
};

/**
 * `price` is optional and deliberately unpopulated. Publishing figures on
 * the site is a commercial decision, so the slot renders only for services
 * that actually define one.
 */
const services = [
  {
    title: "Website Development",
    description:
      "High-performance, SEO-ready websites built to convert, on a stack your team can maintain after handover.",
    deliverables: ["Next.js / React", "SEO", "CMS"],
    price: "",
    href: "#contact",
  },
  {
    title: "Technology AMC Management",
    description:
      "Annual maintenance contracts for websites and software — monitored, patched and kept running, with a fixed monthly scope.",
    deliverables: ["Monitoring", "Backups", "Security patches"],
    price: "",
    href: "#contact",
  },
  {
    title: "AI Solutions",
    description:
      "Applied intelligence wired into real workflows, so it saves hours instead of winning a demo.",
    deliverables: ["Automation", "Chatbots", "Internal tools"],
    price: "",
    href: "#contact",
  },
  {
    title: "Software Development and Custom Tech Solutions",
    description:
      "Tailored systems and integrations built around how your team actually works, scaling with you as you grow.",
    deliverables: ["Integrations", "Dashboards", "Internal tools"],
    price: "",
    href: "#contact",
  },
  {
    title: "Branding and UI/UX Designing",
    description:
      "Identity and interface design that keeps every screen consistent, from the logo through to the design system.",
    deliverables: ["Brand identity", "Design system", "Prototypes"],
    price: "",
    href: "#contact",
  },
];

export default function Services01({ id = "services" }: { id?: string }) {
  return (
    <Section id={id} className="bg-gradient-to-b from-[#DCF8E8] to-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader {...header} align="left" />
        <ul className="mt-14 divide-y divide-[rgba(29,29,31,0.11)] border-y border-[rgba(29,29,31,0.11)]">
          {services.map((service, index) => (
            <li key={service.title}>
              <a
                href={service.href}
                className="group grid grid-cols-1 gap-4 py-8 transition-colors sm:grid-cols-[3rem_1fr_auto] sm:gap-6 lg:grid-cols-[3rem_1fr_1.5fr_auto] lg:gap-10"
              >
                <span className="text-xs text-[#6B6B72] tabular-nums sm:pt-2" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="text-[22px] font-normal leading-tight tracking-tight text-[#1D1D1F] md:text-[26px]"
                    style={{ fontFamily: "Prata, Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  {service.price ? (
                    <p
                      className="mt-2 text-sm text-[#6B6B72]"
                      style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                    >
                      {service.price}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-start-2 lg:col-start-auto">
                  <p
                    className="text-sm leading-6 text-[#6B6B72]"
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <ul aria-label="Deliverables" className="mt-4 flex flex-wrap gap-2">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="rounded-full bg-[#DCF8E8] px-3 py-1 text-xs text-[#1D1D1F]"
                        style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="hidden size-10 items-center justify-center rounded-full border border-[rgba(29,29,31,0.11)] text-[#1D1D1F] transition-colors group-hover:bg-[#1D1D1F] group-hover:text-white sm:col-start-3 sm:row-start-1 sm:flex lg:col-start-4">
                  <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}