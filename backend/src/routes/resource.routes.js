import { Router } from 'express'
import { requireAuth } from '../middleware/auth.js'
import { query } from '../db/pool.js'

export default function resourceRoutes(table) {
  const router = Router()
  router.get('/', async (_req, res, next) => {
    try {
      const { rows } = await query(`select * from ${table} order by created_at desc limit 100`)
      res.json(rows)
    } catch (error) { next(error) }
  })
  router.post('/', requireAuth, async (req, res, next) => {
    try {
      const { rows } = await query(`insert into ${table} (data) values ($1) returning *`, [req.body])
      res.status(201).json(rows[0])
    } catch (error) { next(error) }
  })
  router.put('/:id', requireAuth, async (req, res, next) => {
    try {
      const { rows } = await query(`update ${table} set data=$1, updated_at=now() where id=$2 returning *`, [req.body, req.params.id])
      res.json(rows[0])
    } catch (error) { next(error) }
  })
  router.delete('/:id', requireAuth, async (req, res, next) => {
    try {
      await query(`delete from ${table} where id=$1`, [req.params.id])
      res.status(204).end()
    } catch (error) { next(error) }
  })
  return router
}
