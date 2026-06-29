export const stats = [
  { value: '75+', label: 'Projects' },
  { value: '40+', label: 'Clients' },
  { value: '10+', label: 'Years Experience' }
]

export const services = [
  { icon: 'RC', title: 'Residential Construction', text: 'Independent homes, villas, apartments, and renovation work with accountable site supervision.' },
  { icon: 'CB', title: 'Commercial Buildings', text: 'Shops, offices, mixed-use spaces, and business facilities planned for durability and function.' },
  { icon: 'IP', title: 'Industrial Projects', text: 'Warehouses, sheds, foundations, and utility-focused construction for operational sites.' },
  { icon: 'RD', title: 'Road Construction', text: 'Road works, paving, drainage coordination, and civil infrastructure execution.' },
  { icon: 'BR', title: 'Bridge Construction', text: 'Bridge and structural civil work with documentation-ready project tracking.' },
  { icon: 'SD', title: 'Structural Design', text: 'Practical structural drawings, planning support, and engineering coordination.' },
  { icon: 'ID', title: 'Interior Design', text: 'Interior planning and finishing for homes, offices, and commercial experiences.' },
  { icon: 'PM', title: 'Project Management', text: 'Budgets, schedules, vendor coordination, progress reporting, and quality checks.' }
]

const img = (seed) => `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=900&q=80`

export const projects = [
  { title: 'Premium Villa Construction', category: 'Residential', location: 'Pune', year: '2025', status: 'Completed', description: 'Turnkey residence with structural, architectural, and finishing scope.', image: img('1600585154340-be6161a56a0c') },
  { title: 'Commercial Complex', category: 'Commercial', location: 'Nashik', year: '2025', status: 'Ongoing', description: 'Multi-floor commercial shell with interior-ready planning.', image: img('1486406146926-c627a92ad1ab') },
  { title: 'Factory Utility Block', category: 'Industrial', location: 'Aurangabad', year: '2024', status: 'Completed', description: 'Industrial utility building with durable materials and site safety controls.', image: img('1504917595217-d4dc5ebe6122') },
  { title: 'Internal Road Package', category: 'Roads', location: 'Solapur', year: '2024', status: 'Completed', description: 'Road leveling, concrete work, drainage support, and finish supervision.', image: img('1503387762-592deb58ef4e') }
]

export const testimonials = [
  { name: 'Residential Client', role: 'Home Owner', quote: 'The team communicated clearly, controlled cost surprises, and delivered a clean finish.' },
  { name: 'Commercial Client', role: 'Developer', quote: 'Their project tracking and site coordination made the build easier to manage.' },
  { name: 'Industrial Client', role: 'Operations Head', quote: 'Practical engineering decisions and reliable execution helped us stay on schedule.' }
]

export const clients = ['Builder Partner', 'Factory Unit', 'Residential Owner', 'Architect Studio', 'Civil Contractor', 'Local Business']
