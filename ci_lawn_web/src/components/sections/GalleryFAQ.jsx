import { useState } from 'react'
import { FaCloudRain, FaBagShopping, FaCreditCard, FaChevronDown } from 'react-icons/fa6'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

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
