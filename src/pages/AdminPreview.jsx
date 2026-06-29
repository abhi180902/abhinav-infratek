function AdminPreview() {
  const modules = ['Dashboard', 'Services', 'Projects', 'Gallery', 'Testimonials', 'Team Members', 'Clients', 'Contact Messages', 'Career Applications', 'Company Information']
  return (
    <section className="section-shell admin-preview" id="admin"><p className="eyebrow">Admin Dashboard</p><h2>Owner-managed content modules.</h2><div>{modules.map((module) => <span key={module}>{module}</span>)}</div></section>
  )
}

export default AdminPreview
