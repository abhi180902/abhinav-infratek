import { stats } from '../../data'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-media" role="img" aria-label="Modern construction site"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content section-shell">
        <p className="eyebrow">Construction | Architecture | Project Management</p>
        <h1>Reliable infrastructure execution for homes, commercial spaces, roads, and industrial projects.</h1>
        <p className="hero-copy">Abhinav Infratek brings engineering discipline, architectural clarity, and site-level accountability to every build.</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View Projects</a>
          <a className="button ghost" href="#contact">Talk to Us</a>
        </div>
        <div className="stats-row" aria-label="Company statistics">
          {stats.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </div>
    </section>
  )
}

export default Hero
