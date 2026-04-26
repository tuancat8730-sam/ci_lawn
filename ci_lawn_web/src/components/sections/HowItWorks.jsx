import { FaClipboardList, FaCalendarCheck, FaSmile } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const STEPS = [
  {
    num: '01',
    icon: <FaClipboardList />,
    title: 'Request a Quote',
    desc: 'Fill out our quick online form or give us a call. Tell us about your lawn and the services you need — it only takes 2 minutes.',
  },
  {
    num: '02',
    icon: <FaCalendarCheck />,
    title: 'Lawn Care Confirmed',
    desc: "We'll confirm your service and let you know ahead of time when we will be at your house.",
  },
  {
    num: '03',
    icon: <FaSmile />,
    title: 'Enjoy Your Perfect Lawn',
    desc: 'Sit back and relax while our certified crew transforms your lawn. We clean up completely before we leave.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-how-it-works">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="Simple Process"
            title="How It Works"
            subtitle="Getting started is easy. Three simple steps and you'll have a beautiful lawn without lifting a finger."
          />
        </ScrollReveal>

        <div className="row g-4 position-relative align-items-stretch">
          {/* Connector line (desktop) */}
          <div className="how-connector d-none d-lg-block" />

          {STEPS.map((step, i) => (
            <div className="col-lg-4 d-flex" key={step.num}>
              <ScrollReveal delay={i + 1} className="h-100 w-100">
                <div className="how-step-card text-center h-100">
                  <div className="how-step-num">{step.num}</div>
                  <div className="how-step-icon">{step.icon}</div>
                  <h4 className="how-step-title">{step.title}</h4>
                  <p className="how-step-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-5">
            <button
              className="btn btn-lg rounded-pill px-5 fw-bold"
              style={{ background: 'var(--color-primary)', color: '#fff' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Your Free Quote
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
