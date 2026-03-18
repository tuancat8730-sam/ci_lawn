import { FaShieldAlt, FaUsers, FaLeaf, FaCalendarAlt, FaThumbsUp } from 'react-icons/fa'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

const BENEFITS = [
  {
    icon: <FaShieldAlt />,
    title: 'Licensed & Fully Insured',
    desc: 'Complete peace of mind on every visit. We carry full liability and WCB coverage.',
  },
  {
    icon: <FaUsers />,
    title: 'Consistent Crews',
    desc: 'The same experienced team services your property every time — they learn your lawn.',
  },
  {
    icon: <FaLeaf />,
    title: 'Eco-Friendly Products',
    desc: 'Pet and child-safe treatments. We use environmentally responsible products wherever possible.',
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Flexible Scheduling',
    desc: 'Easy online booking, no long-term contracts required. Pause or cancel anytime.',
  },
  {
    icon: <FaThumbsUp />,
    title: '100% Satisfaction Guarantee',
    desc: "Not happy with our work? We'll come back and re-do it — free of charge.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-5">
            <ScrollReveal direction="left">
              <div className="why-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                  alt="Professional lawn care team at work"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Benefits */}
          <div className="col-lg-7">
            <ScrollReveal direction="right">
              <SectionHeader
                label="Why CI Lawn"
                title="We Care About Your Lawn As Much As You Do"
                subtitle="Over 500 satisfied customers trust us with their most prized outdoor space."
                center={false}
              />
            </ScrollReveal>

            {BENEFITS.map((b, i) => (
              <ScrollReveal key={b.title} delay={Math.min(i + 1, 5)} direction="right">
                <div className="benefit-item">
                  <div className="benefit-icon">{b.icon}</div>
                  <div>
                    <p className="benefit-title">{b.title}</p>
                    <p className="benefit-desc">{b.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
