import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-sub">Capturing Timeless Moments</p>
        <h1>Wedding Texture Studio</h1>
        <p className="hero-desc">
          Elegant wedding & portrait photography that tells your unique love story
        </p>
        <div className="hero-btns">
          <button onClick={() => scrollTo('gallery')} className="btn-primary">View Gallery</button>
          <button onClick={() => scrollTo('contact')} className="btn-outline">Book a Session</button>
        </div>
      </div>
      <div className="hero-scroll" onClick={() => scrollTo('services')}>
        <span />
      </div>
    </section>
  )
}
