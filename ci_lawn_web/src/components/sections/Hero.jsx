import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhone, FaStar, FaShieldAlt, FaTag } from 'react-icons/fa'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="container-xl hero-content">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="hero-title text-white">
              Professional Lawn Care That Makes Your{' '}
              <span style={{ color: '#8BC34A' }}>Neighbours</span>{' '}
              Look Twice
            </h1>
            <p className="hero-subtitle">
              Edmonton's trusted lawn maintenance experts — mowing, fertilization, aeration, and more.
              Fully insured. Satisfaction guaranteed.
            </p>

            <div className="hero-cta-group">
              <button className="btn-hero-primary" onClick={scrollToContact}>
                Book Free Estimate <FaArrowRight />
              </button>
              <a href="tel:7800000000" className="btn-hero-secondary">
                <FaPhone size={14} /> Call (780) 000-0000
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="trust-badge">
                <FaStar className="trust-icon" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="trust-badge">
                <FaShieldAlt className="trust-icon" />
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="trust-badge">
                <FaTag className="trust-icon" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <svg className="hero-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="white">
        <path d="M0,40 C360,70 1080,10 1440,40 L1440,60 L0,60 Z" />
      </svg>
    </section>
  )
}
