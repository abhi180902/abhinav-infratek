import founder from '../assets/images/founder.jpg'

function About() {
  return (
    <section className="section-shell about-grid" id="about">
      <div>
        <p className="eyebrow">About Company</p>
        <h2>Built for owners who need quality, transparency, and dependable timelines.</h2>
        <p>Abhinav Infratek Engineers & Architects provides civil construction, structural planning, interior work, renovation, and end-to-end project management for residential, commercial, industrial, road, and bridge assignments.</p>
        <div className="mission-grid">
          <article><h3>Vision</h3><p>To become a trusted regional infrastructure partner known for precise execution and long-lasting work.</p></article>
          <article><h3>Mission</h3><p>To deliver technically sound projects with clear communication, documented progress, and disciplined site safety.</p></article>
        </div>
      </div>
      <aside className="founder-card">
        <img src={founder} alt="Company owner" />
        <div>
          <p className="eyebrow">Founder</p>
          <h3>Abhinav Infratek Leadership</h3>
          <p>5+ years of product management experience, bringing disciplined planning, client communication, and execution tracking into every construction engagement.</p>
          <ul className="qualification-list">
            <li>B.E. in Civil Engineering, SSIT Tumakuru</li>
            <li>M.Tech in Transportation Engineering, SIT Tumakuru</li>
          </ul>
          <a href="mailto:prasadsangamad162@gmail.com">prasadsangamad162@gmail.com</a>
        </div>
      </aside>
    </section>
  )
}

export default About
