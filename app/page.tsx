import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { FeaturesOverview } from '@/components/home/features-overview'
import { DashboardPreview } from '@/components/home/dashboard-preview'
import { ProductShowcase } from '@/components/home/product-showcase'
import { WhyOdins } from '@/components/home/why-odins'
import { PricingPreview } from '@/components/home/pricing-preview'
import { CtaSection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesOverview />
      <DashboardPreview />
      <ProductShowcase />
      <WhyOdins />
      <PricingPreview />
      <CtaSection />
      <Footer />
    </main>
  )
}
