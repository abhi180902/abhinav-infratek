export const adminModules = [
  { key: 'projects', label: 'Projects', endpoint: '/projects', sample: { title: 'Premium Villa Construction', category: 'Residential', location: 'Pune', year: '2026', budget: 'Confidential', duration: '6 months', client: 'Private Client', status: 'Ongoing', description: 'Turnkey construction project.', images: [] } },
  { key: 'services', label: 'Services', endpoint: '/services', sample: { title: 'Residential Construction', description: 'Homes, villas, apartments, and renovation work.', icon: 'RC', order: 1, active: true } },
  { key: 'gallery', label: 'Gallery', endpoint: '/gallery', sample: { title: 'Site Progress', type: 'image', category: 'Residential', url: '', description: 'Gallery media uploaded from Cloudinary.' } },
  { key: 'team', label: 'Team Members', endpoint: '/team', sample: { name: 'Team Member', role: 'Site Engineer', image: '', bio: 'Short team profile.' } },
  { key: 'testimonials', label: 'Testimonials', endpoint: '/testimonials', sample: { name: 'Client Name', role: 'Home Owner', quote: 'Great execution and communication.', rating: 5 } },
  { key: 'clients', label: 'Clients', endpoint: '/clients', sample: { name: 'Client Name', logo: '', website: '', active: true } },
  { key: 'certificates', label: 'Certificates', endpoint: '/certificates', sample: { title: 'Certificate Name', issuer: 'Authority', year: '2026', fileUrl: '' } },
  { key: 'messages', label: 'Contact Messages', endpoint: '/contact', readonly: true, sample: { name: 'Visitor', phone: '+91', email: '', message: 'Project enquiry' } },
  { key: 'careers', label: 'Career Applications', endpoint: '/careers', readonly: true, sample: { name: 'Applicant', email: '', role: 'Site Engineer', resumeUrl: '' } },
  { key: 'blogs', label: 'Blogs', endpoint: '/blogs', sample: { title: 'Construction Planning Tips', slug: 'construction-planning-tips', excerpt: 'Short summary.', content: 'Article content.', published: false } },
  { key: 'company', label: 'Company Information', endpoint: '/company-info', sample: { companyName: 'Abhinav Infratek', email: 'prasadsangamad162@gmail.com', phone: '+91 98765 43210', address: 'Maharashtra, India', vision: '', mission: '' } }
]

export const getModule = (key) => adminModules.find((module) => module.key === key) || adminModules[0]
