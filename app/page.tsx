// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase">
                Viking Restaurant Consultants
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                AI‑powered restaurant operations, built by industry veterans.
              </h1>
              <p className="mt-6 text-base text-slate-300 sm:text-lg">
                We help operators achieve operational excellence and uncompromising food safety—combining
                hands‑on consulting with Odin&apos;s Almanac, our proprietary AI platform.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Quality is never sacrificed to save a dollar. “Close enough” is never good enough.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://odinsalmanac.com"
                  className="inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-amber-300 transition"
                >
                  Explore Odin&apos;s Almanac
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-amber-400 hover:text-amber-300 transition"
                >
                  Request Consulting
                </Link>
              </div>
              <div className="mt-6 text-xs text-slate-400">
                Average Odin&apos;s Almanac customer saves <span className="font-semibold text-amber-300">$3,500/month</span> with a{" "}
                <span className="font-semibold text-amber-300">35x ROI</span>.
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/40">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
                Odin&apos;s Almanac Snapshot
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-50">
                Prevention over reporting. One platform, complete control.
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Food safety, P&amp;L, inventory, labor, and predictive intelligence—unified in a single,
                restaurant‑specific platform.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold text-slate-400">Restaurant GPT</p>
                  <p className="mt-1 text-sm font-medium text-slate-50">Odin&apos;s Answers</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Domain‑aware AI across 8 restaurant disciplines with 23‑second average response time.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold text-slate-400">Predictive Intelligence</p>
                  <p className="mt-1 text-sm font-medium text-slate-50">Stop problems before they cost money.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Predictive ordering, labor optimization, and waste detection ML built for real kitchens.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold text-slate-400">Food Safety</p>
                  <p className="mt-1 text-sm font-medium text-slate-50">Proactive compliance.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    FDA‑aligned workflows, HACCP checklists, and inspection‑ready documentation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold text-slate-400">ROI</p>
                  <p className="mt-1 text-sm font-medium text-slate-50">Enterprise‑grade, not enterprise‑priced.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    50–80% cheaper than legacy platforms with 10x more AI features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">Built by operators, not just software engineers.</h2>
              <p className="mt-4 text-sm text-slate-300">
                Viking Restaurant Consultants was founded on a simple truth: food safety, quality, and operational
                discipline are the foundation of every successful restaurant. We&apos;ve lived the long nights, tight
                margins, and relentless pressure to deliver excellence.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Our consulting practice and Odin&apos;s Almanac platform are both built to support operators where it
                matters most—on the line, in the books, and in front of the guest.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex text-sm font-semibold text-amber-300 hover:text-amber-200"
              >
                Learn more about our philosophy →
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <div>
                  <p className="text-sm font-semibold text-slate-50">Food safety first.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Systems that protect guests, staff, and brands—never treating safety as a checkbox.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <div>
                  <p className="text-sm font-semibold text-slate-50">Quality over shortcuts.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    We never sacrifice standards to save a dollar. “Close enough” is never good enough.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <div>
                  <p className="text-sm font-semibold text-slate-50">Professionalism with pride.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Helping operators focus on the guest, the staff, and the kitchen—while the systems handle the rest.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <div>
                  <p className="text-sm font-semibold text-slate-50">Experience you can feel.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Decades of real operations, translated into practical consulting and software that actually fits the
                    way restaurants work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Odin's Almanac highlight */}
      <section className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
                Odin&apos;s Almanac Platform
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-50">
                Prevention over reporting. One platform for modern restaurant operations.
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                Odin&apos;s Almanac unifies food safety, inventory, labor optimization, financial intelligence, and
                predictive ordering into a single, restaurant‑specific platform. It&apos;s the tool we wish we had when
                we were running operations.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold text-slate-400">Financial Intelligence</p>
                  <p className="mt-1 text-sm text-slate-50">Prime cost clarity.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Professional P&amp;L, budget vs actual, and variance analysis—before the month is over.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold text-slate-400">Inventory &amp; Waste</p>
                  <p className="mt-1 text-sm text-slate-50">Less waste, more control.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Predictive ordering and waste detection ML to keep product tight and margins protected.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold text-slate-400">Labor Optimization</p>
                  <p className="mt-1 text-sm text-slate-50">Right people, right hours.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    AI‑driven labor planning that reduces cost by 15–25% without burning out your team.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold text-slate-400">Menu Engineering</p>
                  <p className="mt-1 text-sm text-slate-50">Every item pulling its weight.</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Proprietary profitability matrix and pricing recommendations to strengthen contribution margin.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="https://odinsalmanac.com"
                  className="text-sm font-semibold text-amber-300 hover:text-amber-200"
                >
                  View full Odin&apos;s Almanac feature set →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting services */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
                Consulting Services
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-50">
                Restaurant operations consulting with real accountability.
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                We partner with owners and operators to diagnose, prioritize, and execute the changes that actually move
                the needle—backed by data from Odin&apos;s Almanac where appropriate.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-50">Operational Assessments</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Full‑stack reviews of BOH, FOH, and management systems with a prioritized action plan.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-50">Food Safety Leadership</p>
                  <p className="mt-1 text-xs text-slate-400">
                    HACCP, compliance, training, and proactive safety systems that protect guests and brands.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-50">Financial &amp; Prime Cost Work</p>
                  <p className="mt-1 text-xs text-slate-400">
                    P&amp;L analysis, cost structure review, and margin improvement grounded in real operations.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-50">Multi‑Location Scaling</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Systems and standards for groups growing from 1–10 locations without losing control.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold text-slate-50">Ready to talk?</h3>
              <p className="mt-2 text-xs text-slate-400">
                Share where you are today and where you want your operation to be. We&apos;ll tell you honestly whether
                we can help—and how.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition"
              >
                Request a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900 px-6 py-10 text-center lg:px-10">
            <h2 className="text-2xl font-semibold text-slate-50">
              Build a safer, more profitable, more resilient restaurant operation.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Whether you need hands‑on consulting, a modern AI platform, or both—we&apos;re here to support the craft
              of hospitality, not replace it.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="https://odinsalmanac.com"
                className="inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition"
              >
                Explore Odin&apos;s Almanac
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-amber-400 hover:text-amber-300 transition"
              >
                Learn about Viking Restaurant Consultants
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
