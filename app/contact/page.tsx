import Navbar from "@/components/navbar";
import ContactWithGlobe from "@/components/ui/contact-with-globe";

export const metadata = {
  title: "Contact Us — ScaleChefs",
  description: "Get in touch with ScaleChefs — tell us about your project and we reply within 24h.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[rgba(29,29,31,0.10)] bg-gradient-to-b from-[#DCF8E8] to-white px-[4.2vw] py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] inline-block rounded bg-[#9BE6BE] px-2 py-1 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Contact Us</p>
          <h1 className="mt-3 max-w-3xl text-[36px] font-normal leading-[1.1] tracking-tight md:text-[56px]" style={{ fontFamily: "Prata, Georgia, serif" }}>
            Let&apos;s cook <span className="rounded bg-[#9BE6BE] px-1.5 text-[#1D1D1F]">something</span> great.
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-6 text-[#6B6B72]">
            Tell us about your project, goals and timeline. We reply within 24h — no pitch deck required.
          </p>
        </div>
      </section>

      {/* Form + Globe */}
      <section className="contact-globe-section">
        <ContactWithGlobe
          title="Tell us what you’re cooking."
          description="Fill the form and we’ll get back within 24h. Prefer WhatsApp? Use the links on the left."
        />
      </section>

      {/* What happens next */}
      <section className="bg-white px-[4.2vw] pb-14 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[20px] bg-[#1D1D1F] p-6 text-white md:p-8">
            <h3 className="text-[14px] font-normal" style={{ fontFamily: "Prata, Georgia, serif" }}>What happens next?</h3>
            <ol className="mt-3 grid gap-3 text-[13px] leading-5 text-white/70 md:grid-cols-3 md:gap-6">
              <li><span className="font-bold text-white">01</span> — We review your message within 24h.</li>
              <li><span className="font-bold text-white">02</span> — 15-min call to align on goals &amp; scope.</li>
              <li><span className="font-bold text-white">03</span> — Proposal with timeline, no 40-slide deck.</li>
            </ol>
            <div className="mt-4 text-[11px] italic text-white/50">No spam. No account managers. Just the team that ships.</div>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="border-t border-[rgba(29,29,31,0.05)] bg-white px-[4.2vw] py-8">
        <div className="mx-auto max-w-6xl text-center text-[11px] text-[#6B6B72]">
          Prefer email? <a href="mailto:growth.scalechefs@gmail.com" className="font-bold text-[#1D1D1F] underline decoration-[#19B86A] underline-offset-2 hover:decoration-[#109556]">growth.scalechefs@gmail.com</a> — we&apos;re here Mon–Sat, 10am–7pm IST.
        </div>
      </section>
    </main>
  );
}
