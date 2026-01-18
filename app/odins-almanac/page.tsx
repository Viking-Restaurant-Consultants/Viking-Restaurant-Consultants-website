// app/odins-almanac/page.tsx
import Link from "next/link";

export default function OdinsAlmanacPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
            Odin&apos;s Almanac
          </p>
          <div className="mt-4 grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-center">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                The AI‑powered restaurant operations platform that prevents problems before they cost you money.
              </h1>
              <p className="mt-5 text-sm text-slate-300 sm:text-base">
                Odin&apos;s Almanac is a restaurant‑specific AI platform that unifies food safety, financial intelligence,
                inventory, labor optimization, and predictive ordering into one closed‑loop system. Built by operators,
                it transforms your operation from reactive reporting to proactive prevention.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                Average customer saves <span className="font-semibold text-amber-300">$3,500/month</span> with a{" "}
                <span className="font-semibold text-amber-300">35x ROI</span>.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="https://odinsalmanac.com"
                  className="inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition"
                >
                  Visit Odin&apos;s Almanac
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-amber-400 hover:text-amber-300 transition"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/40">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
                Prevention over reporting
              </p>
              <h2 className="mt-3 text-lg font-semibold text-slate-50">
                From invoice to profit—fully automated.
              </h2>
              <p className="mt-3 text-xs text-slate-300">
                Odin&apos;s Almanac creates a closed‑loop automation cycle:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li>• Scan invoice → inventory updates automatically</li>
                <li>• Inventory → food cost &amp; COGS sync to P&amp;L</li>
                <li>• POS sales → revenue syncs in real‑time</li>
                <li>• Profit, prime cost, and margins calculated automatically</li>
                <li>• Predictive ordering uses real data to prevent waste</li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">
                No manual data entry. No waiting for end‑of‑month reports. Just real‑time visibility and prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">The problem with traditional restaurant software.</h2>
              <p className="mt-4 text-sm text-slate-300">
                Most platforms are built for generic businesses, not the realities of a kitchen. They&apos;re expensive,
                complex, and overwhelmingly reactive. You only find out what went wrong after the money is already gone:
                over‑ordering, understaffing, missed food safety issues, and late P&amp;Ls that can&apos;t be fixed.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Operators don&apos;t need more reports—they need a system that prevents problems before they happen.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-50">Odin&apos;s Almanac: prevention over reporting.</h2>
              <p className="mt-4 text-sm text-slate-300">
                Odin&apos;s Almanac is built exclusively for restaurants. It understands prime cost, food cost %, table
                turns, and the realities of service. Instead of telling you what went wrong last month, it predicts what
                will go wrong next week—and shows you how to stop it.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                With patent‑pending automation and restaurant‑specific AI, Odin&apos;s Almanac becomes the operational
                backbone of your business—not just another reporting tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core features grid */}
      <section className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <h2 className="text-2xl font-semibold text-slate-50">Core capabilities, built for real operators.</h2>
          <p className="mt-3 text-sm text-slate-300">
            Every feature in Odin&apos;s Almanac is designed around one goal: prevent problems before they cost you
            money—while protecting food safety and strengthening your operation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Odin's Answers */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-xs font-semibold text-amber-300 uppercase">Odin&apos;s Answers</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">Your Restaurant GPT.</h3>
              <p className="mt-2 text-xs text-slate-300">
                Domain‑aware AI trained across 8 restaurant disciplines. Ask anything—from prime cost to health
                inspections—and get expert, actionable guidance in seconds.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Pro &amp; Enterprise tiers connect directly to your P&amp;L for personalized financial analysis.
              </p>
            </div>

            {/* Financial Management */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-xs font-semibold text-amber-300 uppercase">Financial Management</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">Zero‑touch P&amp;L.</h3>
              <p className="mt-2 text-xs text-slate-300">
                Patent‑pending Zero‑Touch P&amp;L Creator automatically syncs invoices, POS data, and labor schedules to
                generate complete P&amp;L statements—no manual entry.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Budget vs actual, variance explanations, and prime cost monitoring in real‑time.
              </p>
            </div>

            {/* Invoice Scanner */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-xs font-semibold text-amber-300 uppercase">Invoice Scanner</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">From paper to profit in minutes.</h3>
              <p className="mt-2 text-xs text-slate-300">
                OCR + fuzzy matching automatically extracts and maps invoice line items to your inventory. No more
                typing line by line.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Saves 2–5 hours per week and feeds the closed‑loop automation system.
              </p>
            </div>

            {/* Predictive Intelligence */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-xs font-semibold text-amber-300 uppercase">Predictive Intelligence</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">Stop problems before they happen.</h3>
              <p className="mt-2 text-xs text-slate-300">
                Predictive ordering, labor optimization, sales forecasting, and waste detection ML—built specifically
                for restaurant patterns.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Reduce waste by 15–20% and labor cost by 15–25% on average.
              </p>
            </div>

            {/* Food Safety */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-xs font-semibold text-amber-300 uppercase">Food Safety &amp; Compliance</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">Proactive protection.</h3>
              <p className="mt-2 text-xs text-slate-300">
                FDA‑aligned workflows, HACCP checklists, temperature logs, and inspection‑ready documentation built
                directly into the platform.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Turn food safety from a checkbox into a competitive advantage.
              </p>
            </div>

            {/* Menu & Inventory */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-xs font-semibold text-amber-300 uppercase">Menu &amp; Inventory</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">Every item, every dollar accounted for.</h3>
              <p className="mt-2 text-xs text-slate-300">
                Proprietary menu profitability matrix, item‑level profit analysis, and advanced inventory orchestration
                with multi‑location support.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Know what to keep, what to push, and what to retire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive advantages */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">Why Odin&apos;s Almanac wins.</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-amber-300">50–80% cheaper</span> than Toast, Square, and other
                  enterprise tools.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">10x more AI features</span> than traditional
                  reporting‑only platforms.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">Restaurant‑specific</span>—built for operators, not
                  generic businesses.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">Prevention over reporting</span> as a core philosophy.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">Closed‑loop automation</span> from invoice to profit.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold text-slate-50">Patentable technology, real competitive moat.</h3>
              <p className="mt-3 text-xs text-slate-300">
                Odin&apos;s Almanac is built on multiple patent‑pending innovations, including:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li>• Zero‑Touch P&amp;L Creator (multi‑source financial aggregation)</li>
                <li>• Invoice Scanner with intelligent fuzzy matching</li>
                <li>• Closed‑loop inventory‑to‑profit automation architecture</li>
                <li>• Restaurant‑specific predictive ordering &amp; labor forecasting engines</li>
                <li>• Waste detection and menu engineering profitability matrix</li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">
                These systems create a durable IP moat that generic tools simply can&apos;t match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing overview */}
      <section className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <h2 className="text-2xl font-semibold text-slate-50">Pricing designed for real operators.</h2>
          <p className="mt-3 text-sm text-slate-300">
            Enterprise‑grade intelligence without enterprise‑grade pricing. Start small, scale as you grow.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-xs font-semibold text-amber-300 uppercase">Essentials</p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">$29</p>
              <p className="text-xs text-slate-400">per month</p>
              <p className="mt-3 text-xs text-slate-300">
                Odin&apos;s Answers, core playbooks, and AI guidance for operators who still manage P&amp;L manually.
              </p>
            </div>
            <div className="flex flex-col rounded-xl border border-amber-400 bg-slate-950/90 p-5 shadow-lg shadow-amber-400/20">
              <p className="text-xs font-semibold text-amber-300 uppercase">Pro</p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">$99</p>
              <p className="text-xs text-slate-400">per month</p>
              <p className="mt-3 text-xs text-slate-300">
                Our most popular tier. Zero‑touch P&amp;L, predictive ordering, labor optimization, menu engineering, and
                waste detection for up to 5 locations.
              </p>
            </div>
            <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-xs font-semibold text-amber-300 uppercase">Enterprise</p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">$299</p>
              <p className="text-xs text-slate-400">per month</p>
              <p className="mt-3 text-xs text-slate-300">
                Unlimited locations, custom AI models, API access, and dedicated support for growing restaurant groups.
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            Most operators recover their subscription cost in the first week through prevented waste and optimized labor.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900 px-6 py-10 text-center lg:px-10">
            <h2 className="text-2xl font-semibold text-slate-50">
              Ready to stop reacting and start preventing?
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Odin&apos;s Almanac gives you the tools to protect guests, control costs, and build a more resilient
              operation—without drowning you in reports.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="https://odinsalmanac.com"
                className="inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition"
              >
                Start your free trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-amber-400 hover:text-amber-300 transition"
              >
                Schedule a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
