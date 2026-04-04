import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata = {
  title: 'Contact | Viking Restaurant Consultants',
  description: 'Get in touch with Viking Restaurant Consultants. Book a demo of Odin\'s Almanac or inquire about consulting services.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}
