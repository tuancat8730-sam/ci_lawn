import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaArrowRight, FaSpinner } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'
import { useFormSubmit } from '../../api/hooks'

const HOW_HEAR_OPTIONS = [
  'Web Search',
  'Referral',
  'Yellow Pages',
  'Online Ad',
  'Superbowl Commercial',
  'Other',
]

const CONTACT_TYPE_OPTIONS = ['Phone', 'Email']

const CONTACT_INFO = [
  { icon: <FaPhone />, title: 'Phone', value: '780-989-3987', href: 'tel:7809893987' },
  { icon: <FaEnvelope />, title: 'Email', value: 'lawncare@capitalirrigation.com', href: 'mailto:lawncare@capitalirrigation.com' },
  { icon: <FaMapMarkerAlt />, title: 'Location', value: '4505 97 St NW, Edmonton, AB T6E 5Y8', href: null },
  { icon: <FaClock />, title: 'Hours', value: 'Monday – Friday: 9am – 4pm', href: null },
]

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postal: '',
  cellPhone: '',
  workPhone: '',
  homePhone: '',
  email: '',
  contactType: 'Phone',
  howHear: [],
  comments: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const { submitting, submitComplete, error, submitForm } = useFormSubmit()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleCheckbox = (option) => {
    setForm((prev) => {
      const already = prev.howHear.includes(option)
      return {
        ...prev,
        howHear: already
          ? prev.howHear.filter((v) => v !== option)
          : [...prev.howHear, option],
      }
    })
  }

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.address.trim()) e.address = 'Address is required'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.cellPhone.trim() && !form.workPhone.trim() && !form.homePhone.trim())
      e.cellPhone = 'At least one phone number is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    // Map form fields → ci_snow FormFields schema
    const payload = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.cellPhone || form.workPhone || form.homePhone,
      address: [form.address, form.city].filter(Boolean).join(', '),
      postal: form.postal,
      contact_type: form.contactType,
      how_hear: form.howHear.length > 0 ? form.howHear.join(', ') : '',
      request_description: form.comments,
    }

    submitForm(payload)
  }

  return (
    <section id="contact" className="section-contact">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Get in Touch"
            title="Request a Quote"
            subtitle="Ready for a greener lawn? Reach out today and we'll get back to you within 24 hours."
            light
          />
        </ScrollReveal>

        <div className="row g-5 align-items-start">
          {/* Left: contact info + map */}
          <div className="col-lg-4">
            <ScrollReveal direction="left">
              {CONTACT_INFO.map((item) => (
                <div key={item.title} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-title">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value" style={{ color: 'inherit', textDecoration: 'none' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '1.5rem', borderRadius: '0.75rem', overflow: 'hidden' }}>
                <iframe
                  title="Capital Lawn Care Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.7!2d-113.4955!3d53.4903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224a8b5f1b3d%3A0x1!2s4505+97+St+NW%2C+Edmonton%2C+AB+T6E+5Y8!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <div className="col-lg-8">
            <ScrollReveal direction="right">
              <div className="contact-form-card">

                {submitComplete ? (
                  <div className="text-center py-4">
                    <FaCheckCircle size={52} color="var(--color-primary)" style={{ marginBottom: 16 }} />
                    <h4 className="fw-bold" style={{ color: 'var(--color-dark-text)' }}>
                      Thank You, {form.firstName}!
                    </h4>
                    <p style={{ color: 'var(--color-gray-text)' }}>
                      We've received your request and will be in touch within 24 hours to confirm your free estimate.
                    </p>
                    <button
                      className="btn btn-outline-success mt-3 rounded-pill px-4"
                      onClick={() => setForm(EMPTY_FORM)}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">

                      {/* First Name / Last Name */}
                      <div className="col-md-6">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text" name="firstName"
                          className={`form-control${errors.firstName ? ' is-invalid' : ''}`}
                          placeholder="John" value={form.firstName} onChange={handleChange}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text" name="lastName"
                          className={`form-control${errors.lastName ? ' is-invalid' : ''}`}
                          placeholder="Smith" value={form.lastName} onChange={handleChange}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                      </div>

                      {/* Address / City */}
                      <div className="col-md-8">
                        <label className="form-label">Address *</label>
                        <input
                          type="text" name="address"
                          className={`form-control${errors.address ? ' is-invalid' : ''}`}
                          placeholder="123 Main St" value={form.address} onChange={handleChange}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">City *</label>
                        <input
                          type="text" name="city"
                          className={`form-control${errors.city ? ' is-invalid' : ''}`}
                          placeholder="Edmonton" value={form.city} onChange={handleChange}
                        />
                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                      </div>

                      {/* Postal */}
                      <div className="col-md-4">
                        <label className="form-label">Postal</label>
                        <input
                          type="text" name="postal" className="form-control"
                          placeholder="T5A 0A1" value={form.postal} onChange={handleChange}
                        />
                      </div>

                      {/* Phones */}
                      <div className="col-md-4">
                        <label className="form-label">
                          Cell Phone {!form.workPhone && !form.homePhone && '*'}
                        </label>
                        <input
                          type="tel" name="cellPhone"
                          className={`form-control${errors.cellPhone ? ' is-invalid' : ''}`}
                          placeholder="(780) 000-0000" value={form.cellPhone} onChange={handleChange}
                        />
                        {errors.cellPhone && <div className="invalid-feedback">{errors.cellPhone}</div>}
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Work Phone</label>
                        <input
                          type="tel" name="workPhone" className="form-control"
                          placeholder="(780) 000-0000" value={form.workPhone} onChange={handleChange}
                        />
                      </div>

                      {/* Home Phone / Email */}
                      <div className="col-md-4">
                        <label className="form-label">Home Phone</label>
                        <input
                          type="tel" name="homePhone" className="form-control"
                          placeholder="(780) 000-0000" value={form.homePhone} onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">Email *</label>
                        <input
                          type="email" name="email"
                          className={`form-control${errors.email ? ' is-invalid' : ''}`}
                          placeholder="john@example.com" value={form.email} onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>

                      {/* How to contact */}
                      <div className="col-12">
                        <label className="form-label">How should we contact you?</label>
                        <select name="contactType" className="form-select" value={form.contactType} onChange={handleChange}>
                          {CONTACT_TYPE_OPTIONS.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>

                      {/* How did you hear */}
                      <div className="col-12">
                        <label className="form-label">How did you hear about us?</label>
                        <div className="d-flex flex-wrap gap-3 mt-1">
                          {HOW_HEAR_OPTIONS.map((opt) => (
                            <div className="form-check" key={opt}>
                              <input
                                className="form-check-input" type="checkbox" id={`hear-${opt}`}
                                checked={form.howHear.includes(opt)}
                                onChange={() => handleCheckbox(opt)}
                              />
                              <label className="form-check-label" htmlFor={`hear-${opt}`}>{opt}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Comments */}
                      <div className="col-12">
                        <label className="form-label">Comments</label>
                        <textarea
                          name="comments" className="form-control" rows="4"
                          placeholder="Tell us about your lawn, property size, or any specific concerns…"
                          value={form.comments} onChange={handleChange}
                        />
                      </div>

                      {/* API error */}
                      {error && (
                        <div className="col-12">
                          <div className="alert alert-danger py-2 mb-0" style={{ fontSize: '0.9rem' }}>
                            {error}
                          </div>
                        </div>
                      )}

                      {/* Submit */}
                      <div className="col-12">
                        <button type="submit" className="btn-submit btn" disabled={submitting}>
                          {submitting ? (
                            <><FaSpinner className="spin me-2" />Sending…</>
                          ) : (
                            <>Send My Free Quote Request <FaArrowRight style={{ marginLeft: 6 }} /></>
                          )}
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
