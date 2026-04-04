import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AlmanacHero } from '@/components/almanac/almanac-hero'
import { CoreCapabilities } from '@/components/almanac/core-capabilities'
import { HowItWorks } from '@/components/almanac/how-it-works'
import { PatentTech } from '@/components/almanac/patent-tech'
import { AlmanacCta } from '@/components/almanac/almanac-cta'

export const metadata = {
  title: "Odin's Almanac | AI Restaurant Operations Platform",
  description: 'Six powerful modules for restaurant management: AI Answers, Zero-Touch P&L, Invoice Scanner, Predictive Intelligence, Food Safety, and Menu Engineering.',
}

export default function OdinsAlmanacPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AlmanacHero />
      <CoreCapabilities />
      <HowItWorks />
      <PatentTech />
      <AlmanacCta />
      <Footer />
    </main>
  )
}
