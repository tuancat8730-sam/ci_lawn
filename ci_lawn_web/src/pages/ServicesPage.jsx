import { FaGripLines, FaSeedling, FaWater, FaBroom, FaCut, FaSnowflake, FaCheck, FaArrowRight } from 'react-icons/fa'
import { GiGrass } from 'react-icons/gi'
import { SERVICES } from '../data/services'
import SectionHeader from '../components/ui/SectionHeader'
import ScrollReveal from '../components/ui/ScrollReveal'

const ICONS = {
  'lawn-mowing': <GiGrass size={28} />,
  'fertilization': <FaSeedling size={28} />,
  'aeration': <FaWater size={28} />,
  'cleanup': <FaBroom size={28} />,
  'hedge-trimming': <FaCut size={28} />,
  'snow-removal': <FaSnowflake size={28} />,
}

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '5rem' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))', padding: '5rem 0' }}>
        <div className="container-xl text-center text-white">
          <span className="section-label" style={{ color: 'var(--color-accent)' }}>What We Do</span>
          <h1 className="display-5 fw-bold">Our Lawn Care Services</h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto' }}>
            Professional, eco-friendly lawn care solutions for Edmonton homeowners and businesses.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section style={{ padding: 'var(--section-py) 0' }}>
        <div className="container-xl">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.id}>
              <div className={`row align-items-center g-4 g-lg-5 mb-5 pb-5 service-detail-row ${i % 2 !== 0 ? 'service-detail-row--reverse' : ''} ${i < SERVICES.length - 1 ? 'border-bottom' : ''}`}>
                <div className="col-lg-6 service-detail-text">
                  <div className="service-icon-circle mb-3">{ICONS[s.id]}</div>
                  {s.badge && <span className="service-badge mb-2">{s.badge}</span>}
                  <h2 className="fw-bold mb-3" style={{ color: 'var(--color-dark-text)' }}>{s.title}</h2>
                  <p style={{ color: 'var(--color-gray-text)', lineHeight: 1.7 }}>{s.shortDesc}</p>
                  <ul className="list-unstyled mt-3">
                    {s.features.map((f) => (
                      <li key={f} className="d-flex align-items-center gap-2 mb-2" style={{ color: 'var(--color-dark-text)', fontSize: '0.93rem' }}>
                        <FaCheck color="var(--color-primary)" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => window.location.assign('/contact')}
                    className="btn btn-success rounded-pill px-4 py-2 mt-3 fw-semibold"
                  >
                    Get a Quote <FaArrowRight size={12} />
                  </button>
                </div>
                <div className="col-lg-6 service-detail-image-col">
                  <div className="service-detail-image-wrap">
                    <img
                      src={`https://images.unsplash.com/photo-${['1558618666-fcd25c85cd64', '1416879595882-3373a0480b5b', '1574323347407-f5e1ad6d020b', '1591840843553-2f2e0756f70c', '1599047777830-27dd11c4d8bf', '1542626991-cbc4e32524cc'][i]}?w=800&q=80`}
                      alt={s.title}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  )
}
