import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AboutContent } from '@/components/about/about-content'

export const metadata = {
  title: 'About | Viking Restaurant Consultants',
  description: 'Founded by William Huffstetler with 25+ years of restaurant management experience. Learn about our mission and values.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </main>
  )
}
