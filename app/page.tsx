// app/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <main style={{ background: "var(--brand-bg, #FFFFFF)" }}>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p
          className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium"
          style={{
            background: "rgba(20,20,20,0.04)",
            color: "var(--brand-ink, #141414)",
            border: "1px solid rgba(20,20,20,0.08)",
          }}
        >
          junova • independent, human-first consulting
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
          <span
            className="bg-clip-text text-transparent"
            style={{ background: "var(--brand-gradient, linear-gradient(45deg,#6E3AFF,#21D07A))" }}
          >
            Human. Clear. Shipped.
          </span>
        </h1>

        <p
          className="mt-4 max-w-2xl text-lg md:text-xl"
          style={{ color: "color-mix(in srgb, var(--brand-ink, #141414) 80%, transparent)" }}
        >
          We untangle ecommerce, ERP, and AI workflows with senior hands on keyboards and zero fluff.
          Advisory that actually implements.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-3 rounded-lg text-white font-medium"
            style={{
              background: "var(--brand-gradient, linear-gradient(45deg,#6E3AFF,#21D07A))",
              boxShadow: "var(--shadow-md, 0 6px 20px rgba(17,24,39,0.08))",
            }}
          >
            Start a scope
          </a>
          <Link
            href="#services"
            className="px-5 py-3 rounded-lg font-medium"
            style={{
              color: "var(--brand-ink, #141414)",
              border: "1px solid rgba(20,20,20,0.12)",
              background: "var(--brand-bg, #FFFFFF)",
            }}
          >
            See how we work
          </Link>
        </div>
      </section>

      {/* Trust blips */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {[
            "ERP & ecommerce expertise",
            "AI + automation, not theatre",
            "Vendor-neutral advisory",
            "Measured in weeks, not quarters",
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-lg px-3 py-2"
              style={{ background: "rgba(20,20,20,0.04)", color: "var(--brand-ink, #141414)" }}
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-12">
        <h2
          className="text-2xl font-semibold mb-6"
          style={{ color: "var(--brand-ink, #141414)" }}
        >
          What we do
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Advisory",
              body:
                "Audits, roadmaps, vendor-neutral selection. Clear scope, honest trade-offs, real timelines.",
            },
            {
              title: "Implementation",
              body:
                "ERP/ecommerce integration, payments, and data flows. We ship clean, well-documented systems.",
            },
            {
              title: "AI & Automation",
              body:
                "AR/AP automation and internal tools that save hours, not just look good in a slide deck.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-xl border"
              style={{
                borderColor: "rgba(20,20,20,0.08)",
                background: "var(--brand-bg, #FFFFFF)",
                boxShadow: "var(--shadow-md, 0 6px 20px rgba(17,24,39,0.08))",
              }}
            >
              <h3 className="text-lg font-semibold" style={{ color: "var(--brand-ink, #141414)" }}>
                {card.title}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "color-mix(in srgb, var(--brand-ink, #141414) 75%, transparent)" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--brand-ink, #141414)" }}>
          How we work
        </h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Clarity",
              body: "We map reality, not fantasy. Short discovery, ruthless scope, visible decisions.",
            },
            {
              title: "2. Build",
              body: "Senior hands on keyboards. Prototype early, iterate fast, document as we go.",
            },
            {
              title: "3. Value",
              body: "Ship, measure, improve. If it doesn’t move a KPI, it’s theatre and it doesn’t ship.",
            },
          ].map((step) => (
            <li
              key={step.title}
              className="p-6 rounded-xl border"
              style={{ borderColor: "rgba(20,20,20,0.08)", background: "var(--brand-bg, #FFFFFF)" }}
            >
              <h3 className="text-lg font-semibold" style={{ color: "var(--brand-ink, #141414)" }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "color-mix(in srgb, var(--brand-ink, #141414) 75%, transparent)" }}>
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Callout */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div
          className="rounded-2xl p-8 md:p-10 text-white"
          style={{
            background: "var(--brand-gradient, linear-gradient(45deg,#6E3AFF,#21D07A))",
            boxShadow: "var(--shadow-lg, 0 12px 34px rgba(17,24,39,0.10))",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold">The calm in your stack.</h3>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Bring us the messy threads. We’ll leave you with a system your team actually likes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg font-medium bg-white/10 backdrop-blur"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              Start a scope
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg font-medium bg-white text-black"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* Contact stub */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div
          className="rounded-xl p-6 border"
          style={{ borderColor: "rgba(20,20,20,0.08)", background: "var(--brand-bg, #FFFFFF)" }}
        >
          <h2 className="text-xl font-semibold" style={{ color: "var(--brand-ink, #141414)" }}>
            Get in touch
          </h2>
          <p className="mt-2 text-sm" style={{ color: "color-mix(in srgb, var(--brand-ink, #141414) 75%, transparent)" }}>
            Drop a note and we’ll reply with next steps.
          </p>
          <form className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              className="w-full rounded-lg border px-3 py-2"
              placeholder="Name"
              style={{ borderColor: "rgba(20,20,20,0.15)", background: "#fff" }}
            />
            <input
              className="w-full rounded-lg border px-3 py-2"
              placeholder="Email"
              type="email"
              style={{ borderColor: "rgba(20,20,20,0.15)", background: "#fff" }}
            />
            <textarea
              className="md:col-span-2 w-full rounded-lg border px-3 py-2 min-h-[120px]"
              placeholder="What do you want to build or fix?"
              style={{ borderColor: "rgba(20,20,20,0.15)", background: "#fff" }}
            />
            <button
              type="submit"
              className="md:col-span-2 rounded-lg text-white px-4 py-3 font-medium"
              style={{ background: "var(--brand-gradient, linear-gradient(45deg,#6E3AFF,#21D07A))" }}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
