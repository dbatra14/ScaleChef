import Navbar from "@/components/navbar";
import ContactForm from "./contact-form";

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

      {/* Form + Info */}
      <section className="bg-white px-[4.2vw] py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.35fr_0.85fr]">
          {/* Form Card */}
          <div className="rounded-[20px] border border-[rgba(29,29,31,0.11)] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:p-8">
            <div className="mb-6">
              <h2 className="text-[20px] font-normal tracking-tight text-[#1D1D1F]" style={{ fontFamily: "Prata, Georgia, serif" }}>Tell us what you&apos;re cooking.</h2>
              <p className="mt-1 text-[13px] leading-5 text-[#6B6B72]">Fill the form and we&apos;ll get back within 24h. Prefer WhatsApp? Use the number on the right.</p>
            </div>
            <ContactForm />
          </div>

          {/* Info Card */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[20px] border border-[#19B86A]/15 bg-[#F5F5F7] p-6 md:p-7">
              <h3 className="text-[14px] font-normal tracking-tight text-[#1D1D1F]" style={{ fontFamily: "Prata, Georgia, serif" }}>Reach us directly</h3>
              <div className="mt-4 grid gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide inline-block rounded bg-[#9BE6BE] px-1.5 py-0.5 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Email</div>
                  <a href="mailto:growth.scalechefs@gmail.com" className="mt-1 inline-block text-[14px] font-semibold text-[#1D1D1F] hover:underline hover:decoration-[#19B86A]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>growth.scalechefs@gmail.com</a>
                  <div className="mt-1 text-[12px] text-[#6B6B72]">We reply within 24h, Mon–Sat.</div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide inline-block rounded bg-[#9BE6BE] px-1.5 py-0.5 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>WhatsApp</div>
                  <a href="https://wa.me/918860822800?text=Hello%20ScaleChefs%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[14px] font-semibold text-[#1D1D1F] hover:underline hover:decoration-[#19B86A]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>+91 88608 22800</a>
                  <div className="mt-1 text-[12px] text-[#6B6B72]">Instant reply • Avg. 2 min • 10am–7pm IST</div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide inline-block rounded bg-[#9BE6BE] px-1.5 py-0.5 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Response time</div>
                  <div className="mt-1 text-[14px] font-semibold text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>14 days to first ship</div>
                  <div className="mt-1 text-[12px] text-[#6B6B72]">Average time-to-first-ship. We count days, not hours billed.</div>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#1D1D1F] p-6 text-white md:p-7">
              <h3 className="text-[14px] font-normal" style={{ fontFamily: "Prata, Georgia, serif" }}>What happens next?</h3>
              <ol className="mt-3 grid gap-3 text-[13px] leading-5 text-white/70">
                <li><span className="font-bold text-white">01</span> — We review your message within 24h.</li>
                <li><span className="font-bold text-white">02</span> — 15-min call to align on goals & scope.</li>
                <li><span className="font-bold text-white">03</span> — Proposal with timeline, no 40-slide deck.</li>
              </ol>
              <div className="mt-4 text-[11px] italic text-white/50">No spam. No account managers. Just the team that ships.</div>
            </div>
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
