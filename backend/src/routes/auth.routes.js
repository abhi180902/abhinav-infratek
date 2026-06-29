import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { body, validationResult } from 'express-validator'
import { query } from '../db/pool.js'

const router = Router()

router.post('/login', [body('email').isEmail(), body('password').isLength({ min: 6 })], async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
    const { email, password } = req.body
    const { rows } = await query('select id, name, email, password_hash, role from users where email=$1 limit 1', [email])
    const user = rows[0]
    if (!user || !(await bcrypt.compare(password, user.password_hash))) return res.status(401).json({ message: 'Invalid login' })
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
  } catch (error) { next(error) }
})

export default router
