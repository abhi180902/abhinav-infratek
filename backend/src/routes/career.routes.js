import { Router } from 'express'
import multer from 'multer'
import { query } from '../db/pool.js'
import { requireAuth } from '../middleware/auth.js'
import { hasCloudinaryConfig, uploadBuffer } from '../utils/cloudinary.js'
import { sendOwnerEmail } from '../utils/mailer.js'
import { emailLimiter } from '../middleware/emailLimiter.js'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } })

router.get('/', requireAuth, async (_req, res, next) => {
  try {
    const { rows } = await query('select * from careers order by created_at desc limit 200')
    res.json(rows)
  } catch (error) { next(error) }
})

router.post('/', emailLimiter, upload.single('resume'), async (req, res, next) => {
  try {
    let resumeUrl = null
    if (req.file && hasCloudinaryConfig()) {
      const result = await uploadBuffer(req.file.buffer, { folder: 'abhinav-infratek/resumes', resource_type: 'raw' })
      resumeUrl = result.secure_url
    }

    const payload = { ...req.body, resumeFileName: req.file?.originalname || null, resumeUrl }
    const { rows } = await query('insert into careers (data) values ($1) returning *', [payload])

    await sendOwnerEmail({
      subject: `New career application from ${req.body.name || 'Applicant'}`,
      text: `Name: ${req.body.name || ''}\nEmail: ${req.body.email || ''}\nRole: ${req.body.role || ''}\nResume: ${resumeUrl || req.file?.originalname || 'Not uploaded'}`
    })

    res.status(201).json(rows[0])
  } catch (error) { next(error) }
})

router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    await query('delete from careers where id=$1', [req.params.id])
    res.status(204).end()
  } catch (error) { next(error) }
})

export default router

