/**
 * Rate Limiting Middleware
 * Purpose: Prevent abuse and brute force attacks on API endpoints
 * Features: Configurable rate limits for different endpoint types
 * Security: Protects against DoS attacks and brute force attempts
 * Implementation: Uses express-rate-limit package for IP-based limiting
 */

import rateLimit from "express-rate-limit";

// ===== AUTHENTICATION RATE LIMITING =====

/**
 * Rate limiting for authentication endpoints (login, register)
 * Purpose: Prevent brute force attacks on authentication endpoints
 * Configuration: 5 requests per 15 minutes per IP address
 * Usage: Apply to login, register, and password reset endpoints
 * Security: Stricter limits for auth endpoints due to security sensitivity
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 5, // Limit each IP to 5 requests per windowMs for auth endpoints
  message: {
    success: false,
    message: "Too many authentication attempts. Please try again later.",
    retryAfter: "15 minutes",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// ===== GENERAL API RATE LIMITING =====

/**
 * Rate limiting for general API endpoints
 * Purpose: Prevent abuse of general API endpoints
 * Configuration: 100 requests per 15 minutes per IP address
 * Usage: Apply to general CRUD operations and data retrieval endpoints
 * Balance: More generous limits for normal API operations
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
