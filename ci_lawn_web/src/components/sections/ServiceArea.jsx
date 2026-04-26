import { FaMapMarkerAlt } from 'react-icons/fa'
import { SERVICE_AREAS } from '../../data/serviceAreas'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

export default function ServiceArea() {
  return (
    <section className="section-area">
      <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Text side */}
          <div className="col-lg-5">
            <ScrollReveal direction="left">
              <SectionHeader
                label="Service Area"
                title="Proudly Serving the Edmonton Area"
                subtitle="We service residential and commercial properties across Edmonton and Sherwood Park."
                center={false}
              />

              <div className="mt-3">
                {SERVICE_AREAS.map((city) => (
                  <span key={city} className="area-tag">
                    <FaMapMarkerAlt size={10} style={{ marginRight: 4 }} />
                    {city}
                  </span>
                ))}
              </div>

              <p className="mt-4" style={{ color: 'var(--color-gray-text)', fontSize: '0.93rem' }}>
                Not sure if we service your area?{' '}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn btn-link p-0 fw-semibold"
                  style={{ color: 'var(--color-primary)', fontSize: '0.93rem' }}
                >
                  Send us a message
                </button>{' '}
                and we'll let you know.
              </p>
            </ScrollReveal>
          </div>

          {/* Map placeholder */}
          <div className="col-lg-7">
            <ScrollReveal direction="right">
              <div className="map-placeholder">
                <iframe
                  title="Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150842.7258543944!2d-113.71023!3d53.5460983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00f4f6b5f95!2sEdmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1710000000000"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
