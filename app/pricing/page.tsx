import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PricingContent } from '@/components/pricing/pricing-content'

export const metadata = {
  title: 'Pricing | Viking Restaurant Consultants',
  description: 'Simple, transparent pricing for Odin\'s Almanac. Starting at $29/mo. Save $3,500/month on average.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingContent />
      <Footer />
    </main>
  )
}
