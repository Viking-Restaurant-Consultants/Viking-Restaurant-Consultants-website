import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TemplatesContent } from '@/components/templates/templates-content'

export const metadata = {
  title: 'P&L Templates | Viking Restaurant Consultants',
  description:
    'Excel P&L workbooks for restaurants, bars and food trucks. Prime cost, break-even and industry benchmarks with traffic lights. $39, one payment, no subscription.',
}

export default function TemplatesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TemplatesContent />
      <Footer />
    </main>
  )
}
