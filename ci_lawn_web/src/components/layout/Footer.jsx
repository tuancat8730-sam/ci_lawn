import { Link } from 'react-router-dom'
import { FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa'

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
      <div className="container-xl">
        <div className="row g-5">
          {/* Col 1: Brand */}
          <div className="col-lg-3 col-md-6">
            <Link to="/" className="footer-brand">
              <FaLeaf style={{ marginRight: 6 }} />CI<span>Lawn</span>
            </Link>
            <p className="footer-tagline">
              Edmonton's trusted lawn care experts. Professional, reliable, and eco-friendly services for residential and commercial properties.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="Google"><FaGoogle /></a>
            </div>
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
              <span>(780) 000-0000</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope />
              <span>info@cilawn.ca</span>
            </div>
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>Edmonton, Alberta, Canada</span>
            </div>
            <div className="footer-contact-item">
              <FaClock />
              <div>
                <div>Mon–Fri: 7:00 AM – 7:00 PM</div>
                <div>Sat: 8:00 AM – 5:00 PM</div>
                <div>Sun: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span>© {new Date().getFullYear()} CI Lawn. All Rights Reserved.</span>
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
