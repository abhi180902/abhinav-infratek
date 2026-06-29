import { clients } from '../../data'

function Clients() {
  return (
    <section className="section-shell clients" id="clients">
      <p className="eyebrow">Clients & Certifications</p>
      <h2>Client logo carousel and certificates module ready for CMS uploads.</h2>
      <div className="logo-strip">{clients.map((client) => <span key={client}>{client}</span>)}</div>
    </section>
  )
}

export default Clients
