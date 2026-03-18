import { SERVICES } from '../../data/services'
import ServiceCard from './ServiceCard'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  return (
    <section id="services" className="section-services">
      <div className="container-xl">
        <ScrollReveal>
          <SectionHeader
            label="What We Offer"
            title="Complete Lawn Care Services"
            subtitle="From routine mowing to full-season maintenance packages — we handle every aspect of your outdoor space."
          />
        </ScrollReveal>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={Math.min(i + 1, 5)}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
