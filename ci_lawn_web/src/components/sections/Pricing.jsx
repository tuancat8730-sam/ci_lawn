import { useRef, useState } from 'react'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import { PRICING_TIERS } from '../../data/pricing'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

function PricingCard({ tier }) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`pricing-card${tier.isHighlighted ? ' highlighted' : ''}`}>
      {tier.isHighlighted && <span className="popular-badge">Most Popular</span>}
      <p className="pricing-name">{tier.name}</p>
      <div className="pricing-price">
        {tier.originalPrice && (
          <span style={{ textDecoration: 'line-through', fontSize: '1rem', color: 'var(--color-gray-text)', marginRight: '0.4rem', fontWeight: 500 }}>
            {tier.originalPrice}
          </span>
        )}
        {tier.price}
        {tier.priceNote && <span>/{tier.priceNote}</span>}
      </div>
      {tier.priceNote
        ? <p className="pricing-note">Starting at</p>
        : <p className="pricing-note">No hidden fees</p>
      }

      <ul className="pricing-features">
        {tier.features.map((f) => (
          <li key={f}>
            <FaCheck className="check" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={scrollToContact}
        className={`w-100 btn fw-semibold py-2 rounded-pill${tier.isHighlighted ? ' btn-success text-white' : ' btn-outline-success'}`}
      >
        {tier.ctaText} <FaArrowRight size={12} />
      </button>
    </div>
  )
}

export default function Pricing() {
  const sliderRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    setActiveSlide(idx)
  }

  const goToSlide = (i) => {
    const el = sliderRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
    setActiveSlide(i)
  }

  return (
    <section id="pricing" className="section-pricing">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Transparent Pricing"
            title="Simple, Honest Packages"
            subtitle="No hidden fees. No surprise charges. Just great lawn care at fair prices."
          />
        </ScrollReveal>

        {/* Desktop: 3-column grid */}
        <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center d-none d-md-flex">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i + 1}>
              <div className="h-100">
                <PricingCard tier={tier} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: scroll-snap slider */}
        <div className="pricing-slider-wrap d-md-none">
          <div
            className="pricing-slider"
            ref={sliderRef}
            onScroll={handleScroll}
          >
            {PRICING_TIERS.map((tier) => (
              <div className="pricing-slide" key={tier.id}>
                <PricingCard tier={tier} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="pricing-dots">
            {PRICING_TIERS.map((_, i) => (
              <button
                key={i}
                className={`pricing-dot${i === activeSlide ? ' pricing-dot--active' : ''}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal>
          <p className="text-center mt-4" style={{ color: 'var(--color-gray-text)', fontSize: '0.9rem' }}>
            All packages include our 100% satisfaction guarantee.{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-link p-0 fw-semibold"
              style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}
            >
              Contact us for a custom quote.
            </button>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
