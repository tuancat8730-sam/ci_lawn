import { FaGripLines, FaSeedling, FaWater, FaBroom, FaCut, FaSnowflake } from 'react-icons/fa'
import { GiGrass } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const ICONS = {
  'lawn-mowing': <GiGrass />,
  'fertilization': <FaSeedling />,
  'aeration': <FaWater />,
  'cleanup': <FaBroom />,
  'hedge-trimming': <FaCut />,
  'snow-removal': <FaSnowflake />,
}

export default function ServiceCard({ service, delay = 0 }) {
  const icon = ICONS[service.id] || <FaGripLines />

  return (
    <div className="col">
      <div className="card service-card h-100">
        <div className="card-body p-4">
          {service.badge && (
            <span className="service-badge">{service.badge}</span>
          )}
          <div className="service-icon-circle">
            {icon}
          </div>
          <h5 className="card-title">{service.title}</h5>
          <p className="card-text">{service.shortDesc}</p>
          <Link
            to="/services"
            className="mt-3 d-inline-flex align-items-center gap-1 fw-semibold"
            style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  )
}
