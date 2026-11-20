import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PageHero.css'
import './FAQ.css'

const faqs = [
  {
    category: 'Booking',
    items: [
      { q: 'How far in advance should I book?', a: 'We recommend booking at least 6–12 months in advance for weddings, especially for peak season (October–February). Couple shoots can usually be booked 4–6 weeks ahead.' },
      { q: 'How do I confirm my booking?', a: 'A 30% advance payment secures your date. We\'ll send you a booking confirmation and a detailed questionnaire to understand your vision.' },
      { q: 'Do you travel for destination weddings?', a: 'Absolutely! We love destination weddings. Travel and accommodation costs are billed separately. Contact us for a custom quote.' },
    ],
  },
  {
    category: 'Photography',
    items: [
      { q: 'How many photos will we receive?', a: 'For a full-day wedding, you can expect 600–1000+ professionally edited photos. Couple shoots typically yield 100–300 images depending on the package.' },
      { q: 'How long does editing take?', a: 'Wedding galleries are delivered within 4–6 weeks. Couple shoot galleries are ready in 2–3 weeks. Rush delivery is available for an additional fee.' },
      { q: 'What editing style do you use?', a: 'We use a timeless, natural editing style with warm tones and soft contrast. We avoid heavy filters that may look dated in years to come.' },
      { q: 'Do you shoot in RAW format?', a: 'Yes, we always shoot in RAW for maximum quality and editing flexibility. You receive fully edited JPEGs in your final gallery.' },
    ],
  },
  {
    category: 'Films',
    items: [
      { q: 'How long is a wedding highlight film?', a: 'Highlight films are typically 3–6 minutes. Feature films run 15–25 minutes. We also create short social media cuts (60–90 seconds) upon request.' },
      { q: 'When will we receive our wedding film?', a: 'Films are delivered within 8–12 weeks after your wedding. The editing process is detailed and we never rush it.' },
      { q: 'Can we choose the music for our film?', a: 'Yes! We\'ll share a curated playlist and you can choose your favourites. We use licensed music to ensure your film can be shared on all platforms.' },
    ],
  },
  {
    category: 'Pricing & Packages',
    items: [
      { q: 'Are your prices negotiable?', a: 'Our packages are carefully priced to reflect the quality and time invested. However, we do offer customised packages — reach out and we\'ll find something that works for you.' },
      { q: 'What payment methods do you accept?', a: 'We accept bank transfers, UPI, and all major credit/debit cards. A 30% advance is required to confirm the booking, with the balance due 7 days before the event.' },
      { q: 'Is there a cancellation policy?', a: 'Advance payments are non-refundable if cancelled within 60 days of the event. For cancellations made earlier, we offer a credit towards a future booking.' },
    ],
  },
]

export default function FAQ() {
  const [open, setOpen] = useState({})
  const navigate = useNavigate()

  const toggle = (cat, i) => {
    const key = `${cat}-${i}`
    setOpen(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="label">Got Questions?</p>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before booking</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          {faqs.map(group => (
            <div key={group.category} className="faq-group">
              <h2 className="faq-category">{group.category}</h2>
              <div className="faq-items">
                {group.items.map((item, i) => {
                  const key = `${group.category}-${i}`
                  return (
                    <div key={i} className={`faq-item ${open[key] ? 'open' : ''}`}>
                      <button className="faq-question" onClick={() => toggle(group.category, i)}>
                        <span>{item.q}</span>
                        <span className="faq-icon">{open[key] ? '−' : '+'}</span>
                      </button>
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>We're happy to chat — reach out and we'll get back to you within 24 hours.</p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>Contact Us</button>
        </div>
      </section>
    </main>
  )
}
