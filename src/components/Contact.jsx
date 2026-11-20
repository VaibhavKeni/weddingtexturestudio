import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', date: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <p className="section-label">Get In Touch</p>
        <h2>Book Your Session</h2>
        <div className="divider" style={{ margin: '20px 0 32px' }} />
        <div className="info-items">
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>hello@weddingtexturestudio.com</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div>
              <strong>Hours</strong>
              <p>Mon – Sat: 9am – 7pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-wrap">
        {sent ? (
          <div className="success-msg">
            <span>✓</span>
            <h3>Thank you!</h3>
            <p>We'll get back to you within 24 hours.</p>
            <button onClick={() => setSent(false)} className="btn-primary">Send Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              <input name="date" type="date" placeholder="Wedding Date" value={form.date} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Tell us about your event..." rows={5} value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Enquiry</button>
          </form>
        )}
      </div>
    </section>
  )
}
