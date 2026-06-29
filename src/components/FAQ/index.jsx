const faqs = [
  ['Can the owner update the website?', 'Yes. The backend is structured for an admin dashboard covering projects, services, gallery, team, clients, messages, careers, company info, and blogs.'],
  ['Can PostgreSQL replace MongoDB?', 'Yes. This project uses a PostgreSQL-ready backend with relational tables for users, projects, services, testimonials, gallery, clients, certificates, contact messages, careers, and blogs.'],
  ['Where will images and PDFs be stored?', 'Cloudinary is planned for project images, gallery media, certificates, team images, and PDF resumes.']
]

function FAQ() {
  return (
    <section className="section-band" id="faq"><div className="section-shell"><p className="eyebrow">FAQ</p><h2>Architecture decisions.</h2><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
  )
}

export default FAQ
