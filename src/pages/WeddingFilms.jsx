import { useNavigate } from 'react-router-dom'
import './PageHero.css'
import './WeddingFilms.css'

const films = [
  {
    title: 'Priya & Arjun',
    location: 'Udaipur, Rajasthan',
    thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    duration: '4:32',
  },
  {
    title: 'Sneha & Rahul',
    location: 'Goa',
    thumb: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
    duration: '5:10',
  },
  {
    title: 'Meera & Karan',
    location: 'Mumbai',
    thumb: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    duration: '3:58',
  },
  {
    title: 'Ananya & Dev',
    location: 'Jaipur, Rajasthan',
    thumb: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
    duration: '6:15',
  },
]

const features = [
  { icon: '🎬', title: 'Cinematic Style', desc: 'Shot on professional cinema cameras with anamorphic lenses for that film-like quality.' },
  { icon: '🎵', title: 'Custom Soundtrack', desc: 'Music carefully chosen or composed to match the mood and emotion of your day.' },
  { icon: '✂️', title: 'Expert Editing', desc: 'Color graded and edited to create a seamless, emotional narrative of your wedding.' },
  { icon: '📦', title: 'Multiple Deliverables', desc: 'Feature film, highlight reel, ceremony edit, and social media cuts — all included.' },
]

export default function WeddingFilms() {
  const navigate = useNavigate()

  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1600&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="label">Cinematic Storytelling</p>
          <h1>Wedding Films</h1>
          <p>Your love story, told like a movie</p>
        </div>
      </section>

      <section className="page-intro">
        <div className="intro-text">
          <p className="label">The Art</p>
          <h2>Cinema-Quality Wedding Films</h2>
          <div className="divider" style={{ margin: '20px 0' }} />
          <p>A wedding film is more than a recording — it's a cinematic experience. We capture the vows you whispered, the music that moved you, and the moments that made your day unforgettable.</p>
          <p>Years from now, you'll press play and be transported right back to that day.</p>
          <button className="btn-primary" style={{ marginTop: '28px' }} onClick={() => navigate('/contact')}>Enquire About Films</button>
        </div>
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80" alt="Wedding film" />
        </div>
      </section>

      {/* Features */}
      <section className="film-features">
        <div className="section-header">
          <p className="label">Our Approach</p>
          <h2>What Sets Us Apart</h2>
          <div className="divider" />
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <span className="feat-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Film Showcase */}
      <section className="films-showcase">
        <div className="section-header">
          <p className="label">Portfolio</p>
          <h2>Featured Films</h2>
          <div className="divider" />
        </div>
        <div className="films-grid">
          {films.map(film => (
            <div key={film.title} className="film-card">
              <div className="film-thumb">
                <img src={film.thumb} alt={film.title} loading="lazy" />
                <div className="play-overlay">
                  <div className="play-btn">▶</div>
                </div>
                <span className="film-duration">{film.duration}</span>
              </div>
              <div className="film-info">
                <h3>{film.title}</h3>
                <p>📍 {film.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="film-packages">
        <div className="section-header">
          <p className="label">Pricing</p>
          <h2>Film Packages</h2>
          <div className="divider" />
        </div>
        <div className="film-pkg-grid">
          {[
            { name: 'Highlight Film', price: '₹25,000', features: ['3–5 Min Highlight Reel', '1 Videographer', 'Professional Color Grade', 'Online Delivery'] },
            { name: 'Feature Film', price: '₹50,000', features: ['15–20 Min Feature Film', '5 Min Highlight Reel', '2 Videographers', 'Ceremony Edit', 'Color Grade + Sound Mix', 'USB + Online Delivery'], popular: true },
            { name: 'Cinematic Suite', price: '₹85,000', features: ['Full Feature Film', 'Highlight Reel', 'Social Media Cuts', '2 Videographers + Drone', 'Custom Soundtrack', 'USB + Online Delivery'] },
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
