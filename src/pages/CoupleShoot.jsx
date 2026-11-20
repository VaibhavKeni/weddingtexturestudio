import { useNavigate } from 'react-router-dom'
import './PageHero.css'
import './CoupleShoot.css'

const photos = [
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80',
  'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
]

const locations = [
  { name: 'Beach Sunset', icon: '🌅', desc: 'Golden hour magic by the sea' },
  { name: 'Forest & Nature', icon: '🌿', desc: 'Lush greens and natural light' },
  { name: 'Urban & City', icon: '🏙️', desc: 'Modern backdrops and architecture' },
  { name: 'Studio', icon: '📸', desc: 'Controlled lighting, timeless results' },
  { name: 'Heritage Sites', icon: '🏛️', desc: 'Royal backdrops with cultural charm' },
  { name: 'Destination', icon: '✈️', desc: 'Travel together, shoot anywhere' },
]

export default function CoupleShoot() {
  const navigate = useNavigate()

  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="label">Pre-Wedding & Couple</p>
          <h1>Couple Shoots</h1>
          <p>Romantic sessions that celebrate your chemistry</p>
        </div>
      </section>

      <section className="page-intro">
        <div className="intro-text">
          <p className="label">The Session</p>
          <h2>Just the Two of You</h2>
          <div className="divider" style={{ margin: '20px 0' }} />
          <p>A couple shoot is your chance to be yourselves — no ceremony pressure, no guest list. Just you, your partner, and a photographer who knows how to capture genuine connection.</p>
          <p>Whether it's a pre-wedding shoot or an anniversary session, we create images that feel as natural as your love.</p>
          <button className="btn-primary" style={{ marginTop: '28px' }} onClick={() => navigate('/contact')}>Book Your Shoot</button>
        </div>
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=700&q=80" alt="Couple shoot" />
        </div>
      </section>

      {/* Locations */}
      <section className="locations">
        <div className="section-header">
          <p className="label">Where We Shoot</p>
          <h2>Location Options</h2>
          <div className="divider" />
        </div>
        <div className="locations-grid">
          {locations.map(l => (
            <div key={l.name} className="location-card">
              <span className="loc-icon">{l.icon}</span>
              <h3>{l.name}</h3>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="couple-gallery">
        <div className="section-header">
          <p className="label">Portfolio</p>
          <h2>Couple Gallery</h2>
          <div className="divider" />
        </div>
        <div className="couple-grid">
          {photos.map((src, i) => (
            <div key={i} className="couple-item">
              <img src={src} alt={`Couple ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="couple-pricing">
        <div className="section-header">
          <p className="label">Investment</p>
          <h2>Shoot Packages</h2>
          <div className="divider" />
        </div>
        <div className="pricing-cards">
          {[
            { name: 'Essential', price: '₹12,000', features: ['2 Hours', '1 Location', '100+ Edited Photos', 'Online Gallery'] },
            { name: 'Classic', price: '₹20,000', features: ['4 Hours', '2 Locations', '250+ Edited Photos', 'Online Gallery', 'Printed Photobook'], popular: true },
            { name: 'Luxury', price: '₹35,000', features: ['Full Day', '3 Locations', '500+ Edited Photos', 'Premium Album', 'Online Gallery', 'USB Delivery'] },
          ].map(pkg => (
            <div key={pkg.name} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{pkg.name}</h3>
              <p className="pkg-price">{pkg.price}</p>
              <ul>
                {pkg.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
              </ul>
              <button className="btn-primary" onClick={() => navigate('/contact')}>Book Now</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
