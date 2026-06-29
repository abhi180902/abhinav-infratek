import { useMemo, useState } from 'react'
import { projects } from '../../data'
import { usePublicRecords } from '../../hooks/usePublicRecords'

const fallbackImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80'

function normalizeProject(record) {
  return {
    title: record.title || 'Project',
    category: record.category || 'Residential',
    location: record.location || 'Karnataka',
    year: record.year || '2026',
    status: record.status || 'Planned',
    description: record.description || 'Project details will be updated soon.',
    image: record.image || record.imageUrl || record.images?.[0] || fallbackImage
  }
}

function Projects() {
  const [active, setActive] = useState('All')
  const { items } = usePublicRecords('/projects', projects, normalizeProject)
  const filters = useMemo(() => ['All', ...Array.from(new Set(items.map((project) => project.category).filter(Boolean)))], [items])
  const visible = useMemo(() => active === 'All' ? items : items.filter((project) => project.category === active), [active, items])
  return (
    <section className="section-shell" id="projects">
      <div className="section-heading"><div><p className="eyebrow">Projects</p><h2>Interactive portfolio with category filters.</h2></div><a className="text-link" href="#contact">Request portfolio PDF</a></div>
      <div className="filter-row" role="tablist" aria-label="Project categories">
        {filters.map((filter) => <button className={active === filter ? 'active' : ''} key={filter} onClick={() => setActive(filter)}>{filter}</button>)}
      </div>
      <div className="project-grid">
        {visible.map((project) => <article className="project-card" key={`${project.title}-${project.year}`}><div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.location} | {project.year} | {project.status}</p><p>{project.description}</p></div></article>)}
      </div>
    </section>
  )
}

export default Projects
