import rateLimit from 'express-rate-limit'

export const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many email requests. Please try again later.' }
})
