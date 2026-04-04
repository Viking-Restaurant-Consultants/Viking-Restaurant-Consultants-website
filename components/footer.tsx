import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-[hsl(220,18%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.abacus.ai/images/166ba2e9-2d0c-4e54-a501-dd4428875881.png"
                  alt="Viking Restaurant Consultants logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-lg font-bold text-white">Viking Restaurant Consultants</span>
            </div>
            <p className="text-sm text-[hsl(220,12%,55%)] max-w-xs leading-relaxed">
              Building AI-powered platforms that change how people operate businesses and learn from video.
            </p>
            <p className="text-xs text-[hsl(217,91%,60%)] font-semibold tracking-[0.15em] uppercase">Strength &bull; Quality &bull; Results</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[hsl(220,12%,45%)]">Quick Links</h4>
            <div className="space-y-2.5">
              <Link href="/odins-almanac" className="block text-sm text-[hsl(220,12%,65%)] hover:text-[hsl(217,91%,60%)] transition-colors">Odin&apos;s Almanac</Link>
              <Link href="/pricing" className="block text-sm text-[hsl(220,12%,65%)] hover:text-[hsl(217,91%,60%)] transition-colors">Pricing</Link>
              <Link href="/about" className="block text-sm text-[hsl(220,12%,65%)] hover:text-[hsl(217,91%,60%)] transition-colors">About</Link>
              <Link href="/contact" className="block text-sm text-[hsl(220,12%,65%)] hover:text-[hsl(217,91%,60%)] transition-colors">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[hsl(220,12%,45%)]">Get Started</h4>
            <div className="space-y-2.5">
              <Link href="/contact?demo=true" className="block text-sm text-[hsl(220,12%,65%)] hover:text-[hsl(217,91%,60%)] transition-colors">Book a Demo</Link>
              <Link href="/contact" className="block text-sm text-[hsl(220,12%,65%)] hover:text-[hsl(217,91%,60%)] transition-colors">Contact Us</Link>
              <a href="https://tubesift.web.app" target="_blank" rel="noopener noreferrer" className="block text-sm text-[hsl(220,12%,65%)] hover:text-[hsl(217,91%,60%)] transition-colors">ClipSifter &rarr;</a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[hsl(220,18%,18%)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[hsl(220,12%,40%)]">&copy; 2026 Viking Restaurant Consultants. All rights reserved.</p>
          <p className="text-xs text-[hsl(220,12%,40%)]">Patent-pending technology</p>
        </div>
      </div>
    </footer>
  )
}
