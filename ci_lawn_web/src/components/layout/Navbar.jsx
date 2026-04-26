import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const scrolled = scrollY > 80
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (to) => {
    setMenuOpen(false)
    if (to.includes('#')) {
      const id = to.split('#')[1]
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <div className={`navbar-wrapper${scrolled ? ' scrolled' : ''}`}>
      {/* Top bar */}
      <div className="navbar-topbar">
        <div className="container-xl d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-credit-card-fill" style={{ fontSize: '0.85rem' }} />
          <span>Pay your invoice online — quick and secure.</span>
          <a
            href="https://capitalirrigation.com/payment/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-topbar-link"
          >
            Pay Now <span>&rarr;</span>
          </a>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-cilawn`}>
        <div className="container-xl">
          {/* Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img
              src="./images/logo4.png"
              alt="Capital Lawn Care"
              style={{ height: 36, width: 'auto', objectFit: 'contain' }}
            />
            <span>Capital <span>Lawn Care</span></span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Collapsible */}
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}>
            <ul className="navbar-nav mx-auto gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to} className="nav-item">
                  <NavLink
                    to={link.to.includes('#') ? '/' : link.to}
                    className={({ isActive }) =>
                      `nav-link${isActive && !link.to.includes('#') ? ' active' : ''}`
                    }
                    onClick={() => handleNavClick(link.to)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right section */}
            <div className="navbar-right-group">
              <a href="tel:7809893987" className="navbar-phone">
                <FaPhone size={13} />
                780-989-3987
              </a>
              <Link to="/contact" className="btn-quote" onClick={() => setMenuOpen(false)}>
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
