import { useState } from 'react'
import './PageHero.css'
import './ContactPage.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', date: '', service: '', message: '' })
  }

  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="label">Let's Connect</p>
          <h1>Contact Us</h1>
          <p>We'd love to hear about your special day</p>
        </div>
      </section>

      <section className="contact-page">
        <div className="contact-details">
          <p className="label">Reach Out</p>
          <h2>Get In Touch</h2>
          <div className="divider" style={{ margin: '20px 0 36px' }} />

          <div className="detail-items">
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <strong>Studio Location</strong>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <div>
                <strong>Phone / WhatsApp</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>hello@weddingtexturestudio.com</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🕐</span>
              <div>
                <strong>Working Hours</strong>
                <p>Monday – Saturday: 9am – 7pm</p>
              </div>
            </div>
          </div>

          <div className="social-row">
            <a href="#" className="social-btn">📸 Instagram</a>
            <a href="#" className="social-btn">👍 Facebook</a>
            <a href="#" className="social-btn">▶️ YouTube</a>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send an Enquiry</h2>
          <div className="divider" style={{ margin: '20px 0 36px' }} />

          {sent ? (
            <div className="success-box">
              <span className="success-check">✓</span>
              <h3>Thank You!</h3>
              <p>We've received your message and will get back to you within 24 hours.</p>
              <button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                </div>
                <div className="form-group">
                  <label>Event Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  <option>Wedding Photography</option>
                  <option>Couple / Pre-Wedding Shoot</option>
                  <option>Wedding Film</option>
                  <option>Photography + Film Combo</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tell Us About Your Event *</label>
                <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Venue, guest count, any special requests..." required />
              </div>
              <button type="submit" className="btn-primary submit-btn">Send Enquiry</button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
