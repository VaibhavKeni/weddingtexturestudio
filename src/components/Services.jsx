import './Services.css'

const services = [
  {
    icon: '💍',
    title: 'Wedding Photography',
    desc: 'Full-day coverage of your wedding — from getting ready to the last dance. Every emotion, beautifully preserved.',
    price: 'Starting at ₹35,000',
  },
  {
    icon: '👫',
    title: 'Pre-Wedding Shoots',
    desc: 'Romantic outdoor or studio sessions that capture your chemistry before the big day.',
    price: 'Starting at ₹12,000',
  },
  {
    icon: '🎉',
    title: 'Event Coverage',
    desc: 'Engagements, receptions, sangeet, mehendi — we cover every celebration with care.',
    price: 'Starting at ₹8,000',
  },
  {
    icon: '🖼️',
    title: 'Portrait Sessions',
    desc: 'Individual, couple, or family portraits crafted with artistic lighting and composition.',
    price: 'Starting at ₹5,000',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <p className="section-label">What We Offer</p>
        <h2>Our Services</h2>
        <div className="divider" />
      </div>
      <div className="services-grid">
        {services.map(s => (
          <div key={s.title} className="service-card">
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span className="service-price">{s.price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
