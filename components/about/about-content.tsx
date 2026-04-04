'use client'

import { SectionAnimate } from '@/components/section-animate'
import { CounterAnimation } from '@/components/counter-animation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Users, Award, Star, Play, Brain, ChefHat, Video, Lightbulb, ExternalLink } from 'lucide-react'

const values = [
  { icon: Lightbulb, title: 'Innovation First', description: 'We don’t follow industry playbooks — we write new ones with AI and automation.' },
  { icon: Target, title: 'Precision', description: 'Every data point, every algorithm, every recommendation is built on accuracy and rigor.' },
  { icon: Users, title: 'Partnership', description: 'We work alongside the people we build for — operators, learners, and creators.' },
  { icon: Award, title: 'Proven Results', description: 'Measured outcomes and real ROI. Not promises — performance.' },
]

export function AboutContent() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <SectionAnimate>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-wider mb-3">Our Story</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
              From Restaurant Floors to AI Platforms
            </h1>
            <p className="text-[hsl(220,12%,55%)] text-lg max-w-3xl mx-auto">
              Viking Restaurant Consultants started with one mission: help restaurants succeed. Today, we’re building AI-powered tools that are changing how entire industries learn, operate, and grow.
            </p>
          </div>
        </SectionAnimate>

        {/* Founder */}
        <SectionAnimate>
          <div className="grid lg:grid-cols-5 gap-12 items-center mb-28">
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl shadow-black/30 border border-[hsl(220,18%,18%)] bg-[hsl(220,22%,11%)]">
                <Image
                  src="https://cdn.abacus.ai/images/999c2c68-bf3a-4636-a7b0-c7e83b713b14.png"
                  alt="William Huffstetler, Founder of Viking Restaurant Consultants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-2">William Huffstetler</h2>
              <p className="text-[hsl(217,91%,60%)] font-semibold mb-6">Founder & CEO</p>
              <p className="text-[hsl(220,12%,65%)] leading-relaxed mb-4">
                With over 25 years of hands-on restaurant management experience and a degree in Hotel Restaurant Management from Georgia Southern University, William knows the daily grind of running a restaurant — because he’s lived it.
              </p>
              <p className="text-[hsl(220,12%,65%)] leading-relaxed mb-4">
                But William’s story didn’t stop at the kitchen line. When he saw how much time operators wasted on reporting, guesswork, and outdated tools, he taught himself to code — entirely through YouTube tutorials. No bootcamp. No second degree. Just thousands of hours of video learning.
              </p>
              <p className="text-[hsl(220,12%,65%)] leading-relaxed mb-8">
                That self-taught journey didn’t just produce one product — it produced two. And it revealed a bigger truth: <span className="text-white font-medium">video is the most powerful learning medium on the planet, but it’s broken.</span> So William set out to fix both problems: how restaurants operate and how people learn.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]">
                  <div className="text-3xl font-bold text-[hsl(217,91%,60%)] font-mono">
                    <CounterAnimation end={25} suffix="+" />
                  </div>
                  <div className="text-sm text-[hsl(220,12%,55%)] mt-1">Years Experience</div>
                </div>
                <div className="p-5 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]">
                  <div className="text-3xl font-bold text-[hsl(217,91%,60%)] font-mono">4</div>
                  <div className="text-sm text-[hsl(220,12%,55%)] mt-1">Patents Pending</div>
                </div>
                <div className="p-5 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]">
                  <div className="text-3xl font-bold text-[hsl(217,91%,60%)] font-mono">2</div>
                  <div className="text-sm text-[hsl(220,12%,55%)] mt-1">AI Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </SectionAnimate>

        {/* The Vision - Bridging Section */}
        <SectionAnimate>
          <div className="rounded-3xl p-12 sm:p-16 bg-gradient-to-br from-[hsl(220,22%,13%)] via-[hsl(220,22%,15%)] to-[hsl(217,30%,17%)] border border-[hsl(220,18%,18%)] mb-28 text-center">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-wider mb-4">The Bigger Picture</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto">
              It’s Not Just About Restaurants Anymore
            </h2>
            <p className="text-[hsl(220,12%,65%)] text-lg max-w-3xl mx-auto leading-relaxed mb-4">
              What started as coaching and teaching restaurant owners has evolved into something far bigger. William didn’t just build tools for one industry — he discovered a universal problem: <span className="text-white font-medium">the way we learn from video content is fundamentally inefficient.</span>
            </p>
            <p className="text-[hsl(220,12%,65%)] text-lg max-w-3xl mx-auto leading-relaxed">
              Today, Viking Restaurant Consultants is the force behind two AI platforms that are redefining how people operate businesses and how they learn from video. Same founder. Same relentless drive. Two industries transformed.
            </p>
          </div>
        </SectionAnimate>

        {/* Two Platforms Section */}
        <SectionAnimate>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-wider mb-3">Our Platforms</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Two Platforms. One Mission: Smarter Through AI.
            </h2>
          </div>
        </SectionAnimate>

        <div className="grid lg:grid-cols-2 gap-8 mb-28">
          {/* Odin's Almanac Card */}
          <SectionAnimate delay={0.1}>
            <div className="group relative p-8 sm:p-10 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] h-full flex flex-col card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] flex items-center justify-center">
                  <Image
                    src="https://cdn.abacus.ai/images/f9b6f0cc-208d-4e06-9bba-0956441574db.png"
                    alt="Odin’s Almanac logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">Odin’s Almanac</h3>
                  <p className="text-sm text-[hsl(217,91%,60%)]">AI Restaurant Operations</p>
                </div>
              </div>
              <p className="text-[hsl(220,12%,65%)] leading-relaxed mb-6 flex-1">
                The AI-powered restaurant operations platform that prevents problems instead of reporting on them. Six integrated modules — from zero-touch P&Ls to predictive ordering — that save operators an average of <span className="text-white font-medium">$3,500 per month</span> and give back 5+ hours every week.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Zero-Touch P&L', 'Invoice OCR', 'Predictive AI', 'Food Safety', 'Menu Engineering', 'AI Assistant'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-[hsl(217,91%,60%)]/10 text-[hsl(217,91%,70%)] rounded-full border border-[hsl(217,91%,60%)]/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/odins-almanac"
                  className="inline-flex items-center gap-2 text-[hsl(217,91%,60%)] font-semibold hover:text-[hsl(217,91%,70%)] transition-colors group/link"
                >
                  Explore Platform
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
                <span className="text-[hsl(220,12%,35%)]">&bull;</span>
                <span className="text-[hsl(220,12%,55%)]">4 Patents Pending</span>
              </div>
            </div>
          </SectionAnimate>

          {/* ClipSifter Card */}
          <SectionAnimate delay={0.2}>
            <div className="group relative p-8 sm:p-10 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] h-full flex flex-col card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] flex items-center justify-center">
                  <Image
                    src="https://cdn.abacus.ai/images/61c6321f-7122-48fe-b5ce-c2f6baa90268.png"
                    alt="ClipSifter logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">ClipSifter</h3>
                  <p className="text-sm text-[hsl(217,91%,60%)]">AI Video Answer Engine</p>
                </div>
              </div>
              <p className="text-[hsl(220,12%,65%)] leading-relaxed mb-6 flex-1">
                The AI-powered video answer engine that eliminates learning friction. Ask any question in plain English and ClipSifter reads transcripts from the best YouTube tutorials, finds the exact timestamped moments that answer it, and compiles them into a seamless, watchable answer. <span className="text-white font-medium">Stop scrubbing. Start learning.</span>
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['AI Answers', 'Clip Playback', 'Multi-Source', 'Timestamped Notes', 'YouTube Search', 'Instant Results'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-[hsl(217,91%,60%)]/10 text-[hsl(217,91%,70%)] rounded-full border border-[hsl(217,91%,60%)]/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="https://tubesift.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[hsl(217,91%,60%)] font-semibold hover:text-[hsl(217,91%,70%)] transition-colors group/link"
                >
                  Try ClipSifter
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>
                <span className="text-[hsl(220,12%,35%)]">&bull;</span>
                <span className="text-[hsl(220,12%,55%)]">Free to Start</span>
              </div>
            </div>
          </SectionAnimate>
        </div>

        {/* The Thread - Why Both */}
        <SectionAnimate>
          <div className="max-w-3xl mx-auto mb-28">
            <div className="rounded-2xl p-10 bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] relative">
              <div className="absolute -top-4 left-8 px-4 py-1.5 bg-[hsl(217,91%,60%)] text-white text-xs font-bold rounded-full">
                The Connection
              </div>
              <p className="text-[hsl(220,12%,70%)] text-lg leading-relaxed mb-4">
                “I taught myself everything — Python, JavaScript, machine learning, cloud architecture — by watching YouTube videos. Thousands of hours of tutorials. But I wasted so much time scrubbing through 45-minute videos just to find the 90 seconds I actually needed.”
              </p>
              <p className="text-[hsl(220,12%,70%)] text-lg leading-relaxed mb-4">
                “That experience built Odin’s Almanac. And the frustration of that experience built ClipSifter. One platform automates restaurant operations. The other automates how you learn from video. Both exist because I refused to accept that ‘this is just how it works.’”
              </p>
              <p className="text-white font-semibold mt-6">— William Huffstetler</p>
            </div>
          </div>
        </SectionAnimate>

        {/* Values */}
        <SectionAnimate>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-wider mb-3">What Drives Us</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">
              Our Core Values
            </h2>
          </div>
        </SectionAnimate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {values?.map?.((v: any, i: number) => {
            const Icon = v?.icon
            return (
              <SectionAnimate key={v?.title ?? i} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] text-center card-hover h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[hsl(217,91%,60%)]/10 mb-5">
                    {Icon && <Icon className="w-7 h-7 text-[hsl(217,91%,60%)]" />}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-white">{v?.title ?? ''}</h3>
                  <p className="text-sm text-[hsl(220,12%,55%)] leading-relaxed">{v?.description ?? ''}</p>
                </div>
              </SectionAnimate>
            )
          }) ?? []}
        </div>

        {/* Consulting Services */}
        <SectionAnimate>
          <div className="rounded-3xl p-12 sm:p-16 bg-[hsl(220,20%,13%)] border border-[hsl(220,18%,18%)] mb-28">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-wider mb-3">Beyond Software</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                Consulting Services
              </h2>
              <p className="text-[hsl(220,12%,55%)] max-w-2xl mx-auto mt-4">
                Beyond our platforms, we offer hands-on restaurant consulting backed by decades of operational expertise.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Strategic Growth', description: 'Market analysis, expansion planning, revenue optimization strategies, and brand positioning to take your restaurant to the next level.' },
                { title: 'Culinary Innovation', description: 'Menu development, food cost optimization, seasonal strategy, and kitchen workflow improvements that boost both quality and margins.' },
                { title: 'Operational Excellence', description: 'Staff training, process optimization, compliance auditing, and technology implementation for peak efficiency.' },
              ]?.map?.((s: any, i: number) => (
                <div key={i} className="p-7 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] card-hover">
                  <h3 className="font-display text-lg font-semibold mb-3 text-white">{s?.title ?? ''}</h3>
                  <p className="text-sm text-[hsl(220,12%,55%)] leading-relaxed">{s?.description ?? ''}</p>
                </div>
              )) ?? []}
            </div>
          </div>
        </SectionAnimate>

        {/* CTA */}
        <SectionAnimate>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-5">
              Ready to Work Together?
            </h2>
            <p className="text-[hsl(220,12%,55%)] text-lg max-w-xl mx-auto mb-10">
              Whether you need restaurant software, video learning tools, or hands-on consulting &mdash; we&apos;re building the future of how people work and learn.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-[hsl(217,91%,60%)] text-white rounded-xl hover:bg-[hsl(217,91%,68%)] transition-all shadow-lg shadow-[hsl(217,91%,60%)]/25 group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://tubesift.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-[hsl(220,20%,18%)] text-[hsl(220,12%,70%)] rounded-xl hover:bg-[hsl(220,20%,22%)] transition-all border border-[hsl(220,18%,22%)] group"
              >
                Try ClipSifter Free
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </SectionAnimate>
      </div>
    </div>
  )
}
