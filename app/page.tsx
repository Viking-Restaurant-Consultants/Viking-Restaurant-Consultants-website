'use client';

import { 
  Award, 
  TrendingUp, 
  Users, 
  Settings, 
  ChefHat, 
  DollarSign,
  ArrowRight,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import Image from "next/image";
import { useState, FormEvent } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    
    // Note: In a production environment, this would send data to a backend API
    // For now, this is a demo form that logs data to console
    console.log('Form data:', data);
    setFormStatus('Thank you! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
    
    // Clear status message after 5 seconds
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1e3a5f] text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.PNG"
                alt="Viking Restaurant Consultants"
                width={50}
                height={50}
                className="rounded"
              />
              <span className="ml-3 text-xl font-bold">Viking Restaurant Consultants</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-[#d4af37] transition-colors">About</a>
              <a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a>
              <a href="#odins-almanac" className="hover:text-[#d4af37] transition-colors">Odin&apos;s Almanac</a>
              <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1e3a5f] border-t border-[#2c5f8d]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#about" 
                className="block px-3 py-2 rounded-md hover:bg-[#2c5f8d] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="block px-3 py-2 rounded-md hover:bg-[#2c5f8d] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#odins-almanac" 
                className="block px-3 py-2 rounded-md hover:bg-[#2c5f8d] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Odin&apos;s Almanac
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 rounded-md hover:bg-[#2c5f8d] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#1e3a5f] via-[#2c5f8d] to-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Viking Restaurant Consultants
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Expert Restaurant Operations Consulting for Maximum Profitability
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Transform your restaurant operations with battle-tested strategies in P&L management, 
              staff training, and process optimization. Conquer the challenges of restaurant management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-[#d4af37] text-[#0f1d2e] hover:bg-[#c19d2e] transition-all shadow-lg hover:shadow-xl"
              >
                Learn More <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-[#1e3a5f] hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">About Viking Restaurant Consultants</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Award className="text-[#d4af37]" size={64} />
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Viking Restaurant Consultants brings decades of expertise in restaurant operations management 
                to help your establishment thrive in a competitive market. Our founder has extensive experience 
                in the restaurant industry, having worked with establishments ranging from small independent 
                restaurants to large-scale operations.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a deep understanding of the complexities of restaurant management, we specialize in 
                P&L optimization, operational efficiency, staff development, and cost control strategies 
                that deliver measurable results. Our battle-tested approach combines industry best practices 
                with innovative solutions tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re launching a new concept, struggling with profitability, or looking to scale 
                your operations, Viking Restaurant Consultants provides the strategic guidance and hands-on 
                support you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Our Consulting Services</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restaurant operations consulting to drive profitability and operational excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#d4af37]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#1e3a5f] rounded-lg mb-6">
                <TrendingUp className="text-[#d4af37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">P&L Management & Financial Analysis</h3>
              <p className="text-gray-700">
                Comprehensive profit and loss analysis, cost control strategies, and financial optimization 
                to maximize your bottom line and ensure sustainable growth.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#d4af37]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#1e3a5f] rounded-lg mb-6">
                <Users className="text-[#d4af37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Staff Training & Development</h3>
              <p className="text-gray-700">
                Build a high-performing team with comprehensive training programs, leadership development, 
                and employee retention strategies that enhance service quality.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#d4af37]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#1e3a5f] rounded-lg mb-6">
                <Settings className="text-[#d4af37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Process Optimization</h3>
              <p className="text-gray-700">
                Streamline operations, improve efficiency, and reduce waste with proven process improvements 
                that enhance productivity and customer satisfaction.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#d4af37]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#1e3a5f] rounded-lg mb-6">
                <ChefHat className="text-[#d4af37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Menu Engineering</h3>
              <p className="text-gray-700">
                Optimize your menu for profitability with data-driven analysis, pricing strategies, 
                and menu design that drives sales and customer satisfaction.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#d4af37]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#1e3a5f] rounded-lg mb-6">
                <DollarSign className="text-[#d4af37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Cost Control Strategies</h3>
              <p className="text-gray-700">
                Implement effective cost control measures, vendor negotiations, and inventory management 
                systems to protect your margins and increase profitability.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#d4af37]">
              <div className="flex items-center justify-center w-16 h-16 bg-[#1e3a5f] rounded-lg mb-6">
                <Award className="text-[#d4af37]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Restaurant Operations Consulting</h3>
              <p className="text-gray-700">
                End-to-end operational consulting covering concept development, opening procedures, 
                daily operations, and scaling strategies for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Odin's Almanac Section */}
      <section id="odins-almanac" className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f1d2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Odin&apos;s Almanac</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
            <p className="text-xl text-gray-200">Your Complete Restaurant P&L Management Solution</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Transform Your Restaurant Financial Management</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Odin&apos;s Almanac is a powerful, intuitive web application designed specifically for restaurant 
                operators to track, analyze, and optimize their profit and loss statements. Built by restaurant 
                professionals for restaurant professionals.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#0f1d2e] font-bold">✓</span>
                  </div>
                  <p className="text-gray-200">Real-time P&L tracking and analysis</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#0f1d2e] font-bold">✓</span>
                  </div>
                  <p className="text-gray-200">Comprehensive financial reporting and insights</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#0f1d2e] font-bold">✓</span>
                  </div>
                  <p className="text-gray-200">Cost tracking and variance analysis</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#0f1d2e] font-bold">✓</span>
                  </div>
                  <p className="text-gray-200">Easy-to-use interface designed for busy operators</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#0f1d2e] font-bold">✓</span>
                  </div>
                  <p className="text-gray-200">Secure cloud-based access from anywhere</p>
                </div>
              </div>
              <a 
                href="https://odinsalmanac.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-[#d4af37] text-[#0f1d2e] hover:bg-[#c19d2e] transition-all shadow-lg hover:shadow-xl"
              >
                Visit Odin&apos;s Almanac <ExternalLink className="ml-2" size={20} />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="aspect-video bg-[#0f1d2e] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="text-[#d4af37] mx-auto mb-4" size={80} />
                  <p className="text-xl font-semibold text-gray-300">Powerful Financial Analytics</p>
                  <p className="text-gray-400 mt-2">For Restaurant Success</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Revenue Tracking</span>
                  <span className="text-[#d4af37] font-bold">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Cost Analysis</span>
                  <span className="text-[#d4af37] font-bold">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Performance Metrics</span>
                  <span className="text-[#d4af37] font-bold">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Ready to transform your restaurant operations?</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5f8d] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Let&apos;s Discuss Your Needs</h3>
                <p className="text-gray-200 mb-8">
                  Whether you&apos;re looking to improve profitability, streamline operations, or scale your 
                  restaurant business, Viking Restaurant Consultants is here to help. Contact us today for 
                  a consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-[#0f1d2e]" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Email</p>
                      <p className="font-semibold">contact@vikingrestaurantconsultants.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-[#0f1d2e]" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Phone</p>
                      <p className="font-semibold">Available upon request</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Quick Contact Form</h3>
                {formStatus && (
                  <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                    {formStatus}
                  </div>
                )}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                      placeholder="Tell us about your restaurant..."
                      aria-describedby="message-help"
                    ></textarea>
                    <p id="message-help" className="sr-only">
                      Tell us about your restaurant and how we can help you
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 text-lg font-semibold rounded-lg bg-[#d4af37] text-[#0f1d2e] hover:bg-[#c19d2e] transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1d2e] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Viking Restaurant Consultants</h3>
              <p className="text-gray-400">
                Expert restaurant operations consulting for maximum profitability and operational excellence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-[#d4af37] transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors">Services</a></li>
                <li><a href="#odins-almanac" className="text-gray-400 hover:text-[#d4af37] transition-colors">Odin&apos;s Almanac</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#d4af37] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://odinsalmanac.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#d4af37] transition-colors inline-flex items-center"
                  >
                    Odin&apos;s Almanac <ExternalLink className="ml-1" size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Viking Restaurant Consultants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
