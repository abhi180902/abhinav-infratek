import { Router } from 'express'
import multer from 'multer'
import { requireAuth } from '../middleware/auth.js'
import { hasCloudinaryConfig, uploadBuffer } from '../utils/cloudinary.js'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } })

router.post('/', requireAuth, upload.single('file'), async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'File is required' })
    if (!hasCloudinaryConfig()) return res.status(500).json({ message: 'Cloudinary credentials are missing' })

    const folder = req.body.folder || 'abhinav-infratek'
    const resourceType = req.file.mimetype === 'application/pdf' ? 'raw' : 'image'
    const result = await uploadBuffer(req.file.buffer, { folder, resource_type: resourceType })

    res.status(201).json({
      url: result.secure_url,
      publicId: result.public_id,
      resourceType: result.resource_type,
      originalName: req.file.originalname
    })
  } catch (error) { next(error) }
})

export default router
