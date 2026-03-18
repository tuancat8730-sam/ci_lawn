import { FaStar, FaRegStar, FaAward, FaGoogle, FaThumbsUp } from 'react-icons/fa'
import { TESTIMONIALS } from '../../data/testimonials'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

function Stars({ rating }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <Stars rating={testimonial.rating} />
      <p className="testimonial-quote">{testimonial.quote}</p>
      <div className="d-flex align-items-center gap-3">
        <div className="testimonial-avatar">{testimonial.initials}</div>
        <div>
          <p className="testimonial-name">{testimonial.name}</p>
          <p className="testimonial-location">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-testimonials">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Reviews"
            title="What Our Customers Say"
            subtitle="Don't just take our word for it — hear from Edmonton homeowners who trust CI Lawn."
          />
        </ScrollReveal>

        {/* Trust bar */}
        <ScrollReveal>
          <div className="trust-bar mb-5">
            <div className="trust-bar-item">
              <FaAward />
              <span>500+ 5-Star Reviews</span>
            </div>
            <div className="trust-bar-item">
              <FaGoogle />
              <span>Google Verified</span>
            </div>
            <div className="trust-bar-item">
              <FaThumbsUp />
              <span>A+ Rated Service</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.id} delay={i + 1}>
              <div className="h-100">
                <TestimonialCard testimonial={t} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
