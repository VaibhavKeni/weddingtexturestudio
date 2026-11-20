import { useNavigate } from 'react-router-dom'
import './PageHero.css'
import './Weddings.css'

const photos = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80' },
  { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80' },
]

const packages = [
  { name: 'Silver', price: '₹35,000', features: ['8 Hours Coverage', '1 Photographer', '500+ Edited Photos', 'Online Gallery', 'USB Delivery'] },
  { name: 'Gold', price: '₹65,000', features: ['Full Day Coverage', '2 Photographers', '1000+ Edited Photos', 'Premium Album', 'Online Gallery', 'USB Delivery'], popular: true },
  { name: 'Platinum', price: '₹1,10,000', features: ['2-Day Coverage', '2 Photographers + 1 Videographer', 'Unlimited Edited Photos', 'Luxury Album', 'Highlight Film', 'Online Gallery', 'USB Delivery'] },
]

export default function Weddings() {
  const navigate = useNavigate()

  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="label">Our Craft</p>
          <h1>Wedding Photography</h1>
          <p>Every glance, every tear, every laugh — preserved forever</p>
        </div>
      </section>

      {/* Intro */}
      <section className="page-intro">
        <div className="intro-text">
          <p className="label">The Experience</p>
          <h2>More Than Just Photos</h2>
          <div className="divider" style={{ margin: '20px 0' }} />
          <p>We believe your wedding photos should feel like reliving the day — not just looking at it. Our documentary-style approach captures the raw, unscripted moments alongside the beautifully composed ones.</p>
          <p>From the quiet morning preparations to the last dance of the night, we're there for every chapter of your story.</p>
        </div>
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=80" alt="Wedding photography" />
        </div>
      </section>

      {/* Gallery */}
      <section className="weddings-gallery">
        <div className="section-header">
          <p className="label">Portfolio</p>
          <h2>Wedding Gallery</h2>
          <div className="divider" />
        </div>
        <div className="masonry-grid">
          {photos.map((p, i) => (
            <div key={i} className={`masonry-item ${p.span || ''}`}>
              <img src={p.src} alt={`Wedding ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="packages">
        <div className="section-header">
          <p className="label">Pricing</p>
          <h2>Wedding Packages</h2>
          <div className="divider" />
        </div>
        <div className="packages-grid">
          {packages.map(pkg => (
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
