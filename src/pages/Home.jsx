import { useNavigate } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import './Home.css'

const services = [
  { title: 'Weddings', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', path: '/weddings' },
  { title: 'Couple Shoots', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80', path: '/couple-shoots' },
  { title: 'Wedding Films', img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', path: '/wedding-films' },
]

const gallery = [
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80',
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&q=80',
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="label">Capturing Timeless Moments</p>
          <h1>Wedding Texture Studio</h1>
          <p className="hero-desc">Elegant wedding & portrait photography that tells your unique love story</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/weddings')}>View Weddings</button>
            <button className="btn-outline" onClick={() => navigate('/contact')}>Book a Session</button>
          </div>
        </div>
        <div className="scroll-arrow" onClick={() => document.getElementById('services-preview')?.scrollIntoView({ behavior: 'smooth' })}>
          <span />
        </div>
      </section>

      {/* Services Preview */}
      <section id="services-preview" className="services-preview">
        <div className="section-header">
          <p className="label">What We Do</p>
          <h2>Our Specialities</h2>
          <div className="divider" />
        </div>
        <div className="services-cards">
          {services.map(s => (
            <div key={s.title} className="service-card" onClick={() => navigate(s.path)}>
              <img src={s.img} alt={s.title} />
              <div className="service-card-overlay">
                <h3>{s.title}</h3>
                <span>Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="gallery-strip">
        <div className="section-header">
          <p className="label">Our Work</p>
          <h2>Recent Captures</h2>
          <div className="divider" />
        </div>
        <div className="strip-grid">
          {gallery.map((src, i) => (
            <div key={i} className="strip-item">
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="center-btn">
          <button className="btn-primary" onClick={() => navigate('/weddings')}>View Full Gallery</button>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Your Love Story Deserves to be Told Beautifully</h2>
          <p>Limited dates available for 2025 — book your session today</p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>Get in Touch</button>
        </div>
      </section>
    </main>
  )
}
