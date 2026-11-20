import { useNavigate } from 'react-router-dom'
import './PageHero.css'
import './AboutPage.css'

const team = [
  {
    name: 'Vaibhav Sharma',
    role: 'Lead Photographer & Founder',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'With 8+ years of experience, Vaibhav brings a cinematic eye and a calm presence to every wedding he shoots.',
  },
  {
    name: 'Priya Mehta',
    role: 'Co-Photographer & Creative Director',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Priya specialises in candid moments and emotional storytelling, with a background in fine art photography.',
  },
  {
    name: 'Arjun Nair',
    role: 'Videographer & Film Editor',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Arjun crafts cinematic wedding films that feel like short movies, with a deep passion for visual storytelling.',
  },
]

const values = [
  { icon: '❤️', title: 'Authenticity', desc: 'We capture real moments, not posed performances.' },
  { icon: '🎨', title: 'Artistry', desc: 'Every frame is composed with intention and beauty.' },
  { icon: '🤝', title: 'Trust', desc: 'We become part of your day, not just observers.' },
  { icon: '⭐', title: 'Excellence', desc: 'We never compromise on quality, ever.' },
]

const stats = [
  { value: '500+', label: 'Weddings Covered' },
  { value: '8+', label: 'Years Experience' },
  { value: '12', label: 'Awards Won' },
  { value: '100%', label: 'Happy Clients' },
]

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="label">Who We Are</p>
          <h1>About Us</h1>
          <p>The people behind the lens</p>
        </div>
      </section>

      {/* Story */}
      <section className="page-intro">
        <div className="intro-text">
          <p className="label">Our Story</p>
          <h2>Born From a Love of Storytelling</h2>
          <div className="divider" style={{ margin: '20px 0' }} />
          <p>Wedding Texture Studio was founded with one belief: every love story deserves to be told beautifully. Based in Mumbai, we've had the privilege of documenting over 500 weddings across India and beyond.</p>
          <p>We're not just photographers — we're storytellers, artists, and on your wedding day, we become part of your family.</p>
          <button className="btn-primary" style={{ marginTop: '28px' }} onClick={() => navigate('/contact')}>Work With Us</button>
        </div>
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80" alt="Our story" />
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        {stats.map(s => (
          <div key={s.label} className="stat-item">
            <span className="stat-val">{s.value}</span>
            <span className="stat-lbl">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="section-header">
          <p className="label">What Drives Us</p>
          <h2>Our Values</h2>
          <div className="divider" />
        </div>
        <div className="values-grid">
          {values.map(v => (
            <div key={v.title} className="value-card">
              <span className="val-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="section-header">
          <p className="label">The Crew</p>
          <h2>Meet the Team</h2>
          <div className="divider" />
        </div>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.name} className="team-card">
              <div className="team-img">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
