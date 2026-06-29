import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import authRoutes from './routes/auth.routes.js'
import resourceRoutes from './routes/resource.routes.js'
import contactRoutes from './routes/contact.routes.js'
import careerRoutes from './routes/career.routes.js'
import uploadRoutes from './routes/upload.routes.js'

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }))
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 200 }))
app.use(compression())
app.use(morgan('dev'))
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'abhinav-infratek-api' }))
app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/careers', careerRoutes)
app.use('/api/uploads', uploadRoutes)
app.use('/api/projects', resourceRoutes('projects'))
app.use('/api/services', resourceRoutes('services'))
app.use('/api/gallery', resourceRoutes('gallery'))
app.use('/api/team', resourceRoutes('team_members'))
app.use('/api/testimonials', resourceRoutes('testimonials'))
app.use('/api/clients', resourceRoutes('clients'))
app.use('/api/certificates', resourceRoutes('certificates'))
app.use('/api/blogs', resourceRoutes('blogs'))
app.use('/api/company-info', resourceRoutes('company_information'))
app.use('/api/users', resourceRoutes('users'))

app.use((error, _req, res, _next) => {
  console.error(error)
  res.status(error.status || 500).json({ message: error.message || 'Server error' })
})

export default app

