function Careers() {
  return (
    <section className="career-section" id="careers">
      <div className="section-shell career-panel">
        <div className="career-copy">
          <p className="eyebrow">Careers</p>
          <h2>Share your profile with Abhinav Infratek.</h2>
          <p>Apply for site, design, project coordination, or operations roles. Upload your PDF resume and the team can review your application from the backend.</p>
        </div>
        <form className="mini-form">
          <input placeholder="Full name" />
          <input placeholder="Email" />
          <input placeholder="Role applying for" />
          <label className="file-field">
            <span>Resume PDF</span>
            <input type="file" accept="application/pdf" />
          </label>
          <button type="button">Submit Application</button>
        </form>
      </div>
    </section>
  )
}

export default Careers
