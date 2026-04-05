import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const SERVICE_LINKS = [
  'Lawn Mowing & Maintenance',
  'Fertilization & Weed Control',
  'Core Aeration',
  'Spring / Fall Cleanup',
  'Hedge & Shrub Trimming',
  'Snow Removal',
]

const PAGE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Get a Free Quote', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer-cta-band">
        <div className="container-xl d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <h3 className="footer-cta-title">Ready for a Perfect Lawn?</h3>
            <p className="footer-cta-sub mb-0">
              Join 100+ happy clients who trust Capital Lawn Care every season.
            </p>
          </div>
          <a
            href="tel:7809893987"
            className="btn btn-lg d-inline-flex align-items-center gap-2"
            style={{ background: 'var(--color-accent)', color: '#1a1a1a', fontWeight: 700, borderRadius: '2rem', padding: '0.6rem 1.6rem' }}
          >
            <FaPhone size={14} /> Call 780-989-3987
          </a>
        </div>
      </div>

      <div className="container-xl">
        <div className="row g-5">
          {/* Col 1: Brand */}
          <div className="col-lg-3 col-md-6">
            <Link to="/" className="footer-brand d-flex align-items-center gap-2">
              <img src="./images/logo3.png" alt="Capital Lawn Care" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
              <span>Capital <span>Lawn Care</span></span>
            </Link>
            <p className="footer-tagline">
              Professional lawn care services that keep your outdoor spaces beautiful,
              healthy, and thriving — all year long.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Our Services</h6>
            <ul className="footer-links">
              {SERVICE_LINKS.map((s) => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Pages */}
          <div className="col-lg-2 col-md-6">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              {PAGE_LINKS.map((p) => (
                <li key={p.to + p.label}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-heading">Contact Us</h6>
            <div className="footer-contact-item">
              <FaPhone />
              <a href="tel:7809893987" style={{ color: 'inherit', textDecoration: 'none' }}>780-989-3987</a>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope />
              <a href="mailto:lawncare@capitalirrigation.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                lawncare@capitalirrigation.com
              </a>
            </div>
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>4505 97 St NW, Edmonton, AB T6E 5Y8</span>
            </div>
            <div className="footer-contact-item">
              <FaClock />
              <span>Monday – Friday: 9am – 4pm</span>
            </div>

            {/* Pay invoice link */}
            <div style={{ marginTop: '1rem' }}>
              <a
                href="https://capitalirrigation.com/payment/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Pay Invoice Online &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Capital Lawn Care. All Rights Reserved.</span>
          <span>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            {' · '}
            <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
