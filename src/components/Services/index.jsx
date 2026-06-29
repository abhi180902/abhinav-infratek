import { services } from '../../data'
import { usePublicRecords } from '../../hooks/usePublicRecords'

function normalizeService(record) {
  return {
    icon: record.icon || record.title?.slice(0, 2)?.toUpperCase() || 'AI',
    title: record.title || 'Service',
    text: record.text || record.description || 'Service details will be updated soon.'
  }
}

function Services() {
  const { items } = usePublicRecords('/services', services, normalizeService)
  return (
    <section className="section-band" id="services">
      <div className="section-shell">
        <p className="eyebrow">Services</p>
        <h2>Construction capabilities from concept to completion.</h2>
        <div className="service-grid">
          {items.map((service) => <article className="service-card" key={service.title}><span>{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}
        </div>
      </div>
    </section>
  )
}

export default Services
