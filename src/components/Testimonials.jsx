import './Testimonials.css'

const testimonials = [
  {
    name: 'Priya & Arjun',
    text: 'Wedding Texture Studio captured our day beyond our imagination. Every photo tells a story. We cry happy tears every time we look at our album.',
    location: 'Mumbai',
  },
  {
    name: 'Sneha & Rahul',
    text: 'Absolutely professional and so easy to work with. They blended into our guests and caught the most candid, beautiful moments.',
    location: 'Delhi',
  },
  {
    name: 'Meera & Karan',
    text: 'The pre-wedding shoot was magical. They knew exactly how to make us feel comfortable and the results were stunning.',
    location: 'Bangalore',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-header">
        <p className="section-label">Kind Words</p>
        <h2>What Couples Say</h2>
        <div className="divider" />
      </div>
      <div className="testimonials-grid">
        {testimonials.map(t => (
          <div key={t.name} className="testimonial-card">
            <span className="quote">"</span>
            <p>{t.text}</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
