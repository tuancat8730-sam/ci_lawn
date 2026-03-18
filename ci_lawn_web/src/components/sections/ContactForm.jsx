import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const SERVICES_LIST = [
  'Lawn Mowing & Maintenance',
  'Fertilization & Weed Control',
  'Core Aeration',
  'Spring / Fall Cleanup',
  'Hedge & Shrub Trimming',
  'Snow Removal',
  'Multiple Services',
]

const PROPERTY_SIZES = [
  'Under 3,000 sq ft',
  '3,000 – 6,000 sq ft',
  '6,000 – 10,000 sq ft',
  'Over 10,000 sq ft',
]

const CONTACT_INFO = [
  { icon: <FaPhone />, title: 'Phone', value: '(780) 000-0000' },
  { icon: <FaEnvelope />, title: 'Email', value: 'info@cilawn.ca' },
  { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Edmonton, Alberta, Canada' },
  { icon: <FaClock />, title: 'Hours', value: 'Mon–Fri 7am–7pm · Sat 8am–5pm · Sun Closed' },
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', size: '', date: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.service) e.service = 'Please select a service'
    return e
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-contact">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Get in Touch"
            title="Request Your Free Estimate"
            subtitle="Fill out the form below and we'll get back to you within 24 hours."
            light
          />
        </ScrollReveal>

        <div className="row g-5 align-items-start">
          {/* Contact info */}
          <div className="col-lg-4">
            <ScrollReveal direction="left">
              {CONTACT_INFO.map((item) => (
                <div key={item.title} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-title">{item.title}</p>
                    <p className="contact-info-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="col-lg-8">
            <ScrollReveal direction="right">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="text-center py-4">
                    <FaCheckCircle size={52} color="var(--color-primary)" style={{ marginBottom: 16 }} />
                    <h4 className="fw-bold" style={{ color: 'var(--color-dark-text)' }}>
                      Thank You, {form.name.split(' ')[0]}!
                    </h4>
                    <p style={{ color: 'var(--color-gray-text)' }}>
                      We've received your request and will be in touch within 24 hours to confirm your free estimate.
                    </p>
                    <button
                      className="btn btn-outline-success mt-3 rounded-pill px-4"
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', size: '', date: '', notes: '' }) }}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text" name="name" className={`form-control${errors.name ? ' is-invalid' : ''}`}
                          placeholder="John Smith" value={form.name} onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email" name="email" className={`form-control${errors.email ? ' is-invalid' : ''}`}
                          placeholder="john@example.com" value={form.email} onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel" name="phone" className={`form-control${errors.phone ? ' is-invalid' : ''}`}
                          placeholder="(780) 000-0000" value={form.phone} onChange={handleChange}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Service Needed *</label>
                        <select
                          name="service" className={`form-select${errors.service ? ' is-invalid' : ''}`}
                          value={form.service} onChange={handleChange}
                        >
                          <option value="">Select a service...</option>
                          {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Property Size</label>
                        <select name="size" className="form-select" value={form.size} onChange={handleChange}>
                          <option value="">Select size...</option>
                          {PROPERTY_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Preferred Start Date</label>
                        <input
                          type="date" name="date" className="form-control"
                          value={form.date} onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Additional Notes</label>
                        <textarea
                          name="notes" className="form-control" rows="3"
                          placeholder="Any specific requests or details about your property..."
                          value={form.notes} onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn-submit btn">
                          Request My Free Estimate <FaArrowRight style={{ marginLeft: 6 }} />
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
