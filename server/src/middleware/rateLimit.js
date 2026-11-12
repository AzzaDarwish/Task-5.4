import rateLimit from 'express-rate-limit';

export const maintenanceLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests, slow down.' }
});