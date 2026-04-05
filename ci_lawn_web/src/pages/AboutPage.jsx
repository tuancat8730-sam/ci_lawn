import { FaUsers, FaStar, FaLeaf, FaShieldAlt } from 'react-icons/fa'
import SectionHeader from '../components/ui/SectionHeader'
import ScrollReveal from '../components/ui/ScrollReveal'

const STATS = [
  { icon: <FaUsers />, value: '100+', label: 'Happy Clients' },
  { icon: <FaStar />, value: '5★', label: 'Average Rating' },
  { icon: <FaLeaf />, value: '10+', label: 'Years Experience' },
  { icon: <FaShieldAlt />, value: '100%', label: 'Insured & Licensed' },
]

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '7.5rem' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))', padding: '5rem 0' }}>
        <div className="container-xl text-center text-white">
          <span className="section-label" style={{ color: 'var(--color-accent)' }}>Our Story</span>
          <h1 className="display-5 fw-bold">About Capital Lawn Care</h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 540, margin: '0 auto' }}>
            Edmonton's trusted lawn care team — built on hard work, honesty, and a genuine love for great-looking lawns.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: 'var(--section-py) 0', background: 'var(--color-white)' }}>
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <ScrollReveal direction="left">
                <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                    alt="Capital Lawn Care team"
                    style={{ width: '100%', height: 420, objectFit: 'cover' }}
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="col-lg-6">
              <ScrollReveal direction="right">
                <SectionHeader
                  label="Who We Are"
                  title="Passionate About Every Lawn We Touch"
                  center={false}
                />
                <p style={{ color: 'var(--color-gray-text)', lineHeight: 1.75 }}>
                  Capital Lawn Care is a full-service lawn care company serving the Edmonton area since 2020. We started with one simple goal: to give homeowners back their weekends while keeping their lawns looking their absolute best — with employees who care and customers who are satisfied.
                </p>
                <p style={{ color: 'var(--color-gray-text)', lineHeight: 1.75, marginTop: '1rem' }}>
                  Today, we're proud to serve hundreds of properties across the greater Edmonton area. Our certified lawn care professionals bring expertise, eco-conscious practices, and genuine care to every job — with scheduled, efficient service that meets your expectations every time.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <a
                    href="tel:7809893987"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      background: 'var(--color-primary)', color: '#fff',
                      padding: '0.6rem 1.5rem', borderRadius: '2rem',
                      fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
                    }}
                  >
                    Call 780-989-3987
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'var(--section-py) 0', background: 'var(--color-light-bg)' }}>
        <div className="container-xl">
          <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i + 1}>
                <div className="col">
                  <div style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{s.icon}</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-dark-text)' }}>{s.value}</div>
                  <div style={{ color: 'var(--color-gray-text)', fontWeight: 500 }}>{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
