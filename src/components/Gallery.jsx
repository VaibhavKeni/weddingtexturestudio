import { useState } from 'react'
import './Gallery.css'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'Wedding couple', span: 'tall' },
  { id: 2, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Bride portrait' },
  { id: 3, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Wedding rings' },
  { id: 4, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Couple walking', span: 'wide' },
  { id: 5, src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', alt: 'Wedding ceremony' },
  { id: 6, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', alt: 'Reception dance', span: 'tall' },
  { id: 7, src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80', alt: 'Bridal details' },
  { id: 8, src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80', alt: 'Outdoor portrait' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="section-header">
        <p className="section-label">Our Work</p>
        <h2>Gallery</h2>
        <div className="divider" />
      </div>

      <div className="gallery-grid">
        {photos.map(photo => (
          <div
            key={photo.id}
            className={`gallery-item ${photo.span || ''}`}
            onClick={() => setActive(photo)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <div className="gallery-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)}>✕</button>
          <img src={active.src.replace('w=600', 'w=1200')} alt={active.alt} />
        </div>
      )}
    </section>
  )
}
