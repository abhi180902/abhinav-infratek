import 'dotenv/config'
import { query, pool } from '../db/pool.js'

const services = [
  { icon: 'RC', title: 'Residential Construction', description: 'Independent homes, villas, apartments, and renovation work with accountable site supervision.' },
  { icon: 'CB', title: 'Commercial Buildings', description: 'Shops, offices, mixed-use spaces, and business facilities planned for durability and function.' },
  { icon: 'IP', title: 'Industrial Projects', description: 'Warehouses, sheds, foundations, and utility-focused construction for operational sites.' },
  { icon: 'RD', title: 'Road Construction', description: 'Road works, paving, drainage coordination, and civil infrastructure execution.' },
  { icon: 'BR', title: 'Bridge Construction', description: 'Bridge and structural civil work with documentation-ready project tracking.' },
  { icon: 'SD', title: 'Structural Design', description: 'Practical structural drawings, planning support, and engineering coordination.' },
  { icon: 'ID', title: 'Interior Design', description: 'Interior planning and finishing for homes, offices, and commercial experiences.' },
  { icon: 'PM', title: 'Project Management', description: 'Budgets, schedules, vendor coordination, progress reporting, and quality checks.' }
]

const projects = [
  { title: 'Premium Villa Construction', category: 'Residential', location: 'Karnataka', year: '2026', status: 'Planned', description: 'Turnkey residence with structural, architectural, and finishing scope.' },
  { title: 'Commercial Complex', category: 'Commercial', location: 'Karnataka', year: '2026', status: 'Ongoing', description: 'Commercial shell with interior-ready planning.' },
  { title: 'Industrial Utility Block', category: 'Industrial', location: 'Karnataka', year: '2026', status: 'Planned', description: 'Industrial utility building with durable materials and site safety controls.' },
  { title: 'Road Construction Package', category: 'Roads', location: 'Karnataka', year: '2026', status: 'Planned', description: 'Road leveling, concrete work, drainage support, and finish supervision.' }
]

const testimonials = [
  { name: 'Residential Client', role: 'Home Owner', quote: 'The team communicated clearly, controlled cost surprises, and delivered a clean finish.' },
  { name: 'Commercial Client', role: 'Developer', quote: 'Their project tracking and site coordination made the build easier to manage.' },
  { name: 'Industrial Client', role: 'Operations Head', quote: 'Practical engineering decisions and reliable execution helped us stay on schedule.' }
]

const companyInfo = {
  companyName: 'Abhinav Infratek',
  email: 'prasadsangamad162@gmail.com',
  address: 'Vageesh Nagar 2nd Cross, Medleri road, Ranebennur, Karnataka',
  founderExperience: '5+ years of product management experience',
  qualifications: ['B.E. in Civil Engineering, SSIT Tumakuru', 'M.Tech in Transportation Engineering, SIT Tumakuru']
}

async function insertIfEmpty(table, rows) {
  const count = await query(`select count(*)::int as count from ${table}`)
  if (count.rows[0].count > 0) return
  for (const row of rows) await query(`insert into ${table} (data) values ($1)`, [row])
}

try {
  await insertIfEmpty('services', services)
  await insertIfEmpty('projects', projects)
  await insertIfEmpty('testimonials', testimonials)
  await insertIfEmpty('company_information', [companyInfo])
  console.log('Seed completed')
} finally {
  await pool.end()
}
