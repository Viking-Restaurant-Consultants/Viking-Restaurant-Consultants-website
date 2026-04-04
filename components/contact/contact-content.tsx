'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { SectionAnimate } from '@/components/section-animate'
import { Send, CheckCircle, AlertCircle, MessageSquare, CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'

export function ContactContent() {
  const searchParams = useSearchParams()
  const isDemo = searchParams?.get?.('demo') === 'true'

  const [formType, setFormType] = useState<'contact' | 'demo'>(isDemo ? 'demo' : 'contact')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    restaurantName: '',
    locations: '1',
    interest: '',
    message: '',
  })

  useEffect(() => {
    if (isDemo) setFormType('demo')
  }, [isDemo])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const endpoint = formType === 'demo' ? '/api/demo-request' : '/api/contact'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType }),
      })

      if (!res?.ok) {
        throw new Error('Failed to submit')
      }

      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', company: '', restaurantName: '', locations: '1', interest: '', message: '' })
    } catch (err: any) {
      console.error('Form submission error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...(prev ?? {}), [field]: value }))
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-wider mb-3">
              {formType === 'demo' ? 'Schedule a Demo' : 'Reach Out'}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
              {formType === 'demo' ? (
                <>Book a Free Demo</>
              ) : (
                <>Get in Touch</>
              )}
            </h1>
            <p className="text-[hsl(220,12%,55%)] text-lg max-w-xl mx-auto">
              {formType === 'demo'
                ? 'See how Odin\'s Almanac can save your restaurant $3,500/month. We\'ll walk you through the platform live.'
                : 'Have a question about our consulting services or software? We\'d love to hear from you.'}
            </p>
          </div>
        </SectionAnimate>

        <div className="max-w-2xl mx-auto">
          {/* Toggle */}
          <SectionAnimate delay={0.1}>
            <div className="flex rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] p-1.5 mb-8">
              <button
                onClick={() => { setFormType('contact'); setSuccess(false); setError(''); }}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${
                  formType === 'contact' ? 'bg-[hsl(220,20%,18%)] text-white shadow-sm' : 'text-[hsl(220,12%,55%)] hover:text-[hsl(220,12%,70%)]'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                General Inquiry
              </button>
              <button
                onClick={() => { setFormType('demo'); setSuccess(false); setError(''); }}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${
                  formType === 'demo' ? 'bg-[hsl(220,20%,18%)] text-white shadow-sm' : 'text-[hsl(220,12%,55%)] hover:text-[hsl(220,12%,70%)]'
                }`}
              >
                <CalendarDays className="w-4 h-4" />
                Book a Demo
              </button>
            </div>
          </SectionAnimate>

          {/* Form */}
          <SectionAnimate delay={0.2}>
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-2xl bg-[hsl(220,22%,11%)] border border-emerald-500/30 shadow-md text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-[hsl(220,12%,55%)]">
                  {formType === 'demo'
                    ? 'Your demo request has been received. We\'ll be in touch within 24 hours to schedule your personalized walkthrough.'
                    : 'Your message has been received. We\'ll get back to you as soon as possible.'}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 px-6 py-2.5 bg-[hsl(220,20%,18%)] text-[hsl(220,12%,70%)] rounded-xl text-sm font-semibold hover:bg-[hsl(220,20%,22%)] transition-all border border-[hsl(220,18%,22%)]"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-10 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] shadow-lg shadow-black/20 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[hsl(220,12%,70%)] mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData?.name ?? ''}
                      onChange={(e: any) => updateField('name', e?.target?.value ?? '')}
                      className="w-full px-4 py-3 rounded-xl bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] text-white placeholder:text-[hsl(220,12%,40%)] focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)]/30 focus:border-[hsl(217,91%,60%)]/40 text-sm transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[hsl(220,12%,70%)] mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData?.email ?? ''}
                      onChange={(e: any) => updateField('email', e?.target?.value ?? '')}
                      className="w-full px-4 py-3 rounded-xl bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] text-white placeholder:text-[hsl(220,12%,40%)] focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)]/30 focus:border-[hsl(217,91%,60%)]/40 text-sm transition-all"
                      placeholder="you@restaurant.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[hsl(220,12%,70%)] mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData?.phone ?? ''}
                      onChange={(e: any) => updateField('phone', e?.target?.value ?? '')}
                      className="w-full px-4 py-3 rounded-xl bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] text-white placeholder:text-[hsl(220,12%,40%)] focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)]/30 focus:border-[hsl(217,91%,60%)]/40 text-sm transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[hsl(220,12%,70%)] mb-1.5">
                      {formType === 'demo' ? 'Restaurant Name' : 'Company'}
                    </label>
                    <input
                      type="text"
                      value={formType === 'demo' ? (formData?.restaurantName ?? '') : (formData?.company ?? '')}
                      onChange={(e: any) => updateField(formType === 'demo' ? 'restaurantName' : 'company', e?.target?.value ?? '')}
                      className="w-full px-4 py-3 rounded-xl bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] text-white placeholder:text-[hsl(220,12%,40%)] focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)]/30 focus:border-[hsl(217,91%,60%)]/40 text-sm transition-all"
                      placeholder={formType === 'demo' ? 'Restaurant name' : 'Company name'}
                    />
                  </div>
                </div>

                {formType === 'demo' && (
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[hsl(220,12%,70%)] mb-1.5">Number of Locations</label>
                      <select
                        value={formData?.locations ?? '1'}
                        onChange={(e: any) => updateField('locations', e?.target?.value ?? '1')}
                        className="w-full px-4 py-3 rounded-xl bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] text-white focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)]/30 focus:border-[hsl(217,91%,60%)]/40 text-sm transition-all"
                      >
                        <option value="1">1 location</option>
                        <option value="2">2-3 locations</option>
                        <option value="5">4-5 locations</option>
                        <option value="10">6-10 locations</option>
                        <option value="20">10+ locations</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[hsl(220,12%,70%)] mb-1.5">Most Interested In</label>
                      <select
                        value={formData?.interest ?? ''}
                        onChange={(e: any) => updateField('interest', e?.target?.value ?? '')}
                        className="w-full px-4 py-3 rounded-xl bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] text-white focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)]/30 focus:border-[hsl(217,91%,60%)]/40 text-sm transition-all"
                      >
                        <option value="">Select an area</option>
                        <option value="zero-touch-pl">Zero-Touch P&L</option>
                        <option value="invoice-scanner">Invoice Scanner</option>
                        <option value="odins-answers">Odin&apos;s Answers AI</option>
                        <option value="predictive">Predictive Intelligence</option>
                        <option value="food-safety">Food Safety</option>
                        <option value="full-platform">Full Platform</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-[hsl(220,12%,70%)] mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={formData?.message ?? ''}
                    onChange={(e: any) => updateField('message', e?.target?.value ?? '')}
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(220,20%,15%)] border border-[hsl(220,18%,22%)] text-white placeholder:text-[hsl(220,12%,40%)] focus:outline-none focus:ring-2 focus:ring-[hsl(217,91%,60%)]/30 focus:border-[hsl(217,91%,60%)]/40 text-sm resize-none transition-all"
                    placeholder={formType === 'demo' ? 'Tell us about your restaurant and what challenges you\'re facing...' : 'How can we help?'}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-glow flex items-center justify-center gap-2 px-6 py-3.5 bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-xl font-semibold text-sm hover:bg-[hsl(217,91%,68%)] transition-all disabled:opacity-50 shadow-lg shadow-[hsl(217,91%,60%)]/25"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{formType === 'demo' ? 'Request Demo' : 'Send Message'}</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-[hsl(220,12%,40%)] text-center">
                  Your information is kept secure and will only be used to respond to your inquiry.
                </p>
              </form>
            )}
          </SectionAnimate>
        </div>
      </div>
    </div>
  )
}
