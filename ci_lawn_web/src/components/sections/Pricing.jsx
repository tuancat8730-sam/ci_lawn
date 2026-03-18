import { FaCheck, FaArrowRight } from 'react-icons/fa'
import { PRICING_TIERS } from '../../data/pricing'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'
import { Link } from 'react-router-dom'

function PricingCard({ tier }) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`pricing-card${tier.isHighlighted ? ' highlighted' : ''}`}>
      {tier.isHighlighted && <span className="popular-badge">Most Popular</span>}
      <p className="pricing-name">{tier.name}</p>
      <div className="pricing-price">
        {tier.price}
        {tier.price !== 'Custom' && <span>/{tier.priceNote}</span>}
      </div>
      {tier.price === 'Custom' && <p className="pricing-note">Tailored to your property</p>}
      {tier.price !== 'Custom' && <p className="pricing-note">Starting from</p>}

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

        <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i + 1}>
              <div className="h-100">
                <PricingCard tier={tier} />
              </div>
            </ScrollReveal>
          ))}
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
