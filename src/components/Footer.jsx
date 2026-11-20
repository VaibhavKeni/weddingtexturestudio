import { Link } from 'react-router-dom'
import './Footer.css'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Weddings', path: '/weddings' },
  { label: 'Couple Shoots', path: '/couple-shoots' },
  { label: 'Wedding Films', path: '/wedding-films' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Wedding<span>Texture</span>Studio</Link>
          <p>Capturing love stories across India with artistry and heart.</p>
        </div>
        <div className="footer-links">
          <strong>Quick Links</strong>
          <ul>
            {links.map(l => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-social">
          <strong>Follow Us</strong>
          <div className="social-links">
            <a href="#" aria-label="Instagram">📸 Instagram</a>
            <a href="#" aria-label="Facebook">👍 Facebook</a>
            <a href="#" aria-label="YouTube">▶️ YouTube</a>
          </div>
          <div className="footer-contact">
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@weddingtexturestudio.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wedding Texture Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
