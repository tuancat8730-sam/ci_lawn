import { useState } from 'react'
import { FaCloudRain, FaBagShopping, FaCreditCard, FaChevronDown } from 'react-icons/fa6'
import { FaSearchPlus } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1550159930-40066082a4fc?w=600&q=80', alt: 'Freshly mowed lawn', label: 'Lawn Mowing' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Hedge trimming service', label: 'Hedge Trimming' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: 'Beautiful garden lawn', label: 'Full Maintenance' },
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80', alt: 'Garden landscaping', label: 'Landscaping' },
  { src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80', alt: 'Lawn aeration', label: 'Aeration' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Backyard cleanup', label: 'Seasonal Cleanup' },
]

const FAQS = [
  {
    icon: <FaCloudRain />,
    q: 'What happens if it is raining on my scheduled cut day?',
    a: 'If we are unable to cut on our usual day, we will complete your cut as soon as we are able and the weather has dried. There will be weeks where we need to work into the evenings to catch up.',
  },
  {
    icon: <FaBagShopping />,
    q: 'Can my grass clippings be bagged?',
    a: 'We can bag your clippings or mulch them back into your lawn. Bagged clippings are either put into the city-provided green bin or left in a plastic bag for the customer to dispose of. Unfortunately, we are unable to take your clippings away from your house.',
  },
  {
    icon: <FaCreditCard />,
    q: 'How do I pay my invoice?',
    a: 'We will email your invoice, which will include payment options. We accept e-transfer, cheque, or credit card payment through our website or over the phone.',
  },
]

export default function GalleryFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section-gallery-faq">
      <div className="container-xl">

        {/* Gallery */}
        <ScrollReveal>
          <SectionHeader
            label="Our Work"
            title="Recent Projects"
            subtitle="A glimpse at the transformations we create for our clients every day."
          />
        </ScrollReveal>

        <div className="gallery-grid mb-5">
          {IMAGES.map((img, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 5)}>
              <div className="gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="gallery-item-overlay">
                  <div className="d-flex align-items-center gap-2 gallery-item-label">
                    <FaSearchPlus size={14} />
                    {img.label}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ */}
        <ScrollReveal>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before booking your service."
          />
        </ScrollReveal>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className={`faq-item${openIndex === i ? ' faq-item--open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="faq-question-icon">{faq.icon}</span>
                  <span className="faq-question-text">{faq.q}</span>
                  <FaChevronDown className="faq-chevron" />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
