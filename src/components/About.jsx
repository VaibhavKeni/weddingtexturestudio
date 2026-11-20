import './About.css'

const stats = [
  { value: '500+', label: 'Weddings Covered' },
  { value: '8+', label: 'Years Experience' },
  { value: '12', label: 'Awards Won' },
  { value: '100%', label: 'Happy Clients' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80"
          alt="Photographer at work"
        />
      </div>
      <div className="about-content">
        <p className="section-label">Our Story</p>
        <h2>Passion Behind Every Frame</h2>
        <div className="divider" style={{ margin: '20px 0' }} />
        <p>
          Wedding Texture Studio was born from a deep love for storytelling through light and
          emotion. Based in India, we specialize in capturing the raw, unscripted moments that
          make your wedding day truly yours.
        </p>
        <p>
          Our approach blends cinematic aesthetics with candid documentary style — ensuring
          every laugh, tear, and glance is preserved with authenticity and artistry.
        </p>
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
