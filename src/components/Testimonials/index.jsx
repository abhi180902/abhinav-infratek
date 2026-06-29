import { testimonials } from '../../data'
import { usePublicRecords } from '../../hooks/usePublicRecords'

function normalizeTestimonial(record) {
  return {
    name: record.name || 'Client',
    role: record.role || 'Client',
    quote: record.quote || record.message || 'Feedback will be updated soon.'
  }
}

function Testimonials() {
  const { items } = usePublicRecords('/testimonials', testimonials, normalizeTestimonial)
  return (
    <section className="section-band muted" id="testimonials">
      <div className="section-shell">
        <p className="eyebrow">Testimonials</p>
        <h2>Clear communication from planning desk to construction site.</h2>
        <div className="testimonial-grid">
          {items.map((item) => <figure key={item.name}><blockquote>{item.quote}</blockquote><figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption></figure>)}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
