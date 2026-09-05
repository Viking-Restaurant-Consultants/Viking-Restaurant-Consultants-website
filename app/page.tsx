import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CompanyHero } from '@/components/company/company-hero'
import { MissionSection } from '@/components/company/mission-section'
import { ProductsSection } from '@/components/company/products-section'
import { FounderBrief } from '@/components/company/founder-brief'
import { CompanyCta } from '@/components/company/company-cta'

/**
 * The company homepage.
 *
 * This page used to be eight sections of Odin's Almanac product marketing — savings
 * stats, a module grid, a dashboard tour, pricing tiers and a demo CTA — which
 * duplicated /odins-almanac and left the company itself with no homepage at all. A
 * visitor who searched the firm's name found a pitch for one of its products and no
 * way to learn anything about the business behind it.
 *
 * What belongs here is the business: who the firm is, what it stands for, what it
 * sells, and who runs it. The product sections still exist under components/home, and
 * /odins-almanac already covers that ground properly.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CompanyHero />
      <MissionSection />
      <ProductsSection />
      <FounderBrief />
      <CompanyCta />
      <Footer />
    </main>
  )
}
