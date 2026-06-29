import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { query } from '../db/pool.js'
import { requireAuth } from '../middleware/auth.js'
import { sendOwnerEmail } from '../utils/mailer.js'
import { emailLimiter } from '../middleware/emailLimiter.js'

const router = Router()

router.get('/', requireAuth, async (_req, res, next) => {
  try {
    const { rows } = await query('select * from contact_messages order by created_at desc limit 200')
    res.json(rows)
  } catch (error) { next(error) }
})

router.post('/', emailLimiter, [body('name').notEmpty(), body('email').isEmail(), body('message').notEmpty()], async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
    const { rows } = await query('insert into contact_messages (data) values ($1) returning *', [req.body])

    await sendOwnerEmail({
      subject: `New project enquiry from ${req.body.name}`,
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nProject Type: ${req.body.projectType || 'Not selected'}\n\n${req.body.message}`
    })

    res.status(201).json(rows[0])
  } catch (error) { next(error) }
})

router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    await query('delete from contact_messages where id=$1', [req.params.id])
    res.status(204).end()
  } catch (error) { next(error) }
})

export default router

