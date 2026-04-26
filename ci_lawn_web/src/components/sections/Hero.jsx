import { FaArrowRight, FaPhone, FaUsers, FaShieldAlt, FaStar } from 'react-icons/fa'

const STATS = [
  { icon: <FaStar />, value: '10+', label: 'Years Experience' },
  { icon: <FaUsers />, value: '100+', label: 'Happy Clients' },
  { icon: <FaShieldAlt />, value: '100%', label: 'Insured & Licensed' },
]

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="container-xl hero-content text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="hero-title text-white">
              Professional Lawn Care{' '}
              <span style={{ color: '#8BC34A' }}>You Can Trust</span>
            </h1>
            <p className="hero-subtitle mx-auto">
              Capital Lawn Care is a full-service lawn care company serving the Edmonton area since 2020.
              Scheduled and efficient service, working to meet customer expectations.
              We have employees who care and customers who are satisfied.
            </p>

            <div className="hero-cta-group justify-content-center">
              <button className="btn-hero-primary" onClick={scrollToContact}>
                Book Free Estimate <FaArrowRight />
              </button>
              <a href="tel:7809893987" className="btn-hero-secondary">
                <FaPhone size={14} /> Call 780-989-3987
              </a>
            </div>

            <div className="hero-trust-row justify-content-center">
              {STATS.map((s) => (
                <div className="trust-badge" key={s.label}>
                  <span className="trust-icon">{s.icon}</span>
                  <strong style={{ marginRight: '0.3rem' }}>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
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
