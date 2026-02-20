import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/logo.PNG"
                alt="Viking Restaurant Consultants Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              />
            </div>
            <span className="hidden md:block font-heading text-lg tracking-[0.2em] text-[#D4AF37] uppercase">
              Viking Consultants
            </span>
          </div>
          <nav>
            <ul className="flex items-center gap-8">
              <li><a href="#services" className="font-heading text-xs uppercase tracking-[0.2em] hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#software" className="font-heading text-xs uppercase tracking-[0.2em] hover:text-[#D4AF37] transition-colors">Software</a></li>
              <li><a href="#about" className="font-heading text-xs uppercase tracking-[0.2em] hover:text-[#D4AF37] transition-colors">About</a></li>
              <li>
                <a href="#contact" className="hidden sm:inline-block px-6 py-2 border border-[#D4AF37] text-[#D4AF37] font-heading text-[10px] uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#0B1120] transition-all duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center text-center px-6 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Restaurant Terrace View"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B1120]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center animate-in fade-in zoom-in duration-1000">
            {/* Logo centered above text as requested */}
            <div className="w-32 h-32 md:w-48 md:h-48 relative mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.6)] animate-pulse-slow">
              <Image
                src="/logo.PNG"
                alt="Odin's Almanac Crest"
                fill
                className="object-contain"
              />
            </div>

            <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCEDA5] to-[#D4AF37] drop-shadow-lg mb-4 text-center leading-tight">
              VIKING RESTAURANT <br /> CONSULTANTS
            </h1>

            <div className="h-px w-32 bg-[#D4AF37] my-6 opacity-80" />

            <h2 className="font-heading text-xl md:text-3xl tracking-[0.3em] text-white/90 uppercase mb-12 drop-shadow-md">
              Odin's Almanac
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <a href="#services" className="px-8 py-4 bg-[#D4AF37] text-[#0B1120] font-heading font-bold tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                Our Services
              </a>
              <a href="#software" className="px-8 py-4 border border-white/30 backdrop-blur-sm hover:border-[#D4AF37] hover:bg-black/40 hover:text-[#D4AF37] font-heading tracking-[0.2em] transition-all duration-300">
                Explore Software
              </a>
            </div>
          </div>
        </section>

        {/* Brand Focus / Kitchen Scene Section */}
        <section id="services" className="relative py-32 px-6 bg-[#0B1120]">
          {/* Background Kitchen Ambience */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80')] bg-cover bg-center filter grayscale contrast-125 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="mb-20">
              <div className="w-16 h-16 mx-auto mb-6 opacity-80 relative">
                <Image src="/logo.PNG" alt="Small Crest" fill className="object-contain" />
              </div>
              <h2 className="font-heading text-3xl md:text-5xl text-[#D4AF37] mb-4 drop-shadow-md">
                Viking Restaurant Consultants
              </h2>
              <p className="font-heading text-xl tracking-[0.2em] text-[#94A3B8] uppercase">
                Odin's Almanac
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8 opacity-50"></div>
            </div>

            {/* Two Main Service Blocks */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-16 max-w-4xl mx-auto">
              {/* Consulting Services Box */}
              <div className="group relative p-1">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] via-transparent to-[#D4AF37] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative border border-[#D4AF37]/30 bg-[#0B1120]/80 backdrop-blur-sm p-12 h-full flex flex-col items-center justify-center text-center rounded-lg hover:border-[#D4AF37]/60 transition-colors duration-300">
                  <h3 className="font-heading text-2xl text-[#D4AF37] mb-6 uppercase tracking-widest border-b border-[#D4AF37]/20 pb-4 w-full">
                    Consulting Services:
                  </h3>
                  <ul className="space-y-4 font-body text-lg text-gray-300 font-light">
                    <li className="flex items-center justify-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span> Strategic Growth
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span> Culinary Innovation
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span> Operational Excellence
                    </li>
                  </ul>
                </div>
              </div>

              {/* Software Services Box */}
              <div className="group relative p-1">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] via-transparent to-[#D4AF37] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative border border-[#D4AF37]/30 bg-[#0B1120]/80 backdrop-blur-sm p-12 h-full flex flex-col items-center justify-center text-center rounded-lg hover:border-[#D4AF37]/60 transition-colors duration-300">
                  <h3 className="font-heading text-2xl text-[#D4AF37] mb-6 uppercase tracking-widest border-b border-[#D4AF37]/20 pb-4 w-full">
                    Odin's Almanac Software:
                  </h3>
                  <ul className="space-y-4 font-body text-lg text-gray-300 font-light">
                    <li className="flex items-center justify-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span> Data-Driven Insights
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span> Staff Scheduling
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span> Inventory Control
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Founder Section */}
        <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#0B1120] to-[#1a2333]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-lg transform rotate-2"></div>
              <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-lg transform -rotate-2"></div>
              <div className="relative bg-[#0B1120] p-8 border border-white/5 rounded-lg shadow-2xl">
                <h3 className="font-heading text-2xl text-white mb-6">Our Core Values</h3>
                <div className="space-y-6">
                  {[
                    { title: "Quality", desc: "Production-ready systems, no shortcuts." },
                    { title: "Accuracy", desc: "Do it right the first time, verify everything." },
                    { title: "Teamwork", desc: "Clear communication, shared understanding." },
                    { title: "Results", desc: "Delivering excellence that you can measure." }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="mt-1 w-2 h-2 bg-[#D4AF37] rotate-45 group-hover:scale-125 transition-transform duration-300"></div>
                      <div>
                        <h4 className="font-heading text-[#D4AF37] text-sm tracking-widest uppercase mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">Built by Experience. <br /><span className="text-[#D4AF37]">Driven by Passion.</span></h2>
              <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
                Founded by <strong className="text-white font-medium">William Huffstetler</strong>, Viking Restaurant Consultants brings over 25 years of restaurant management expertise to your table. With a degree in Hotel Restaurant Management and a deep understanding of operational pain points, we don't just advise—we solve.
              </p>
              <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
                Our flagship software, <strong className="text-[#D4AF37]">Odin's Almanac</strong>, is currently patent-pending and designed to eliminate the daily struggles of owners and operators. We exist to make your business stronger, more efficient, and undeniably profitable.
              </p>
              <a href="#contact" className="inline-flex items-center gap-3 text-[#D4AF37] font-heading tracking-widest hover:text-white transition-colors group">
                Start the conversation <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="contact" className="py-24 px-6 bg-[#0B1120] border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl mb-6">Ready to Conquer?</h2>
            <p className="text-gray-400 mb-12 font-light text-lg">Whether you need expert consulting or powerful software, we are ready to serve.</p>

            <form className="max-w-2xl mx-auto bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="NAME" className="bg-black/20 border border-white/10 p-4 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors font-heading text-xs tracking-widest" />
                <input type="email" placeholder="EMAIL" className="bg-black/20 border border-white/10 p-4 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors font-heading text-xs tracking-widest" />
              </div>
              <textarea rows={4} placeholder="YOUR MESSAGE" className="w-full bg-black/20 border border-white/10 p-4 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors font-heading text-xs tracking-widest mb-8"></textarea>

              <button className="w-full py-4 bg-[#D4AF37] text-black font-heading font-bold tracking-[0.3em] hover:bg-white transition-colors duration-300 uppercase">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-black text-center border-t border-white/10">
        <div className="w-12 h-12 mx-auto mb-6 relative opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <Image src="/logo.PNG" alt="Footer Logo" fill className="object-contain" />
        </div>
        <p className="text-gray-500 text-sm font-heading tracking-wider mb-2">&copy; {new Date().getFullYear()} Viking Restaurant Consultants.</p>
        <p className="text-[#D4AF37]/40 text-xs tracking-[0.3em] uppercase">Strength. Quality. Results.</p>
      </footer>
    </div>
  );
}
