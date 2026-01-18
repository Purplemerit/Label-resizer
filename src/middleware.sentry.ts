/**
 * Sentry middleware wrapper for Next.js middleware
 * This should be imported in middleware.ts if using Sentry
 */

<<<<<<< HEAD
export async function withSentryMiddleware(handler: (request: any) => Promise<any>) {
  // Sentry middleware wrapper - simplified for compatibility
  return async (request: any) => {
    try {
      return await handler(request)
    } catch (error) {
      console.error('Middleware error:', error)
      throw error
    }
  }
=======
import * as Sentry from '@sentry/nextjs'

export async function withSentryMiddleware(handler: (request: any) => Promise<any>) {
  return Sentry.withSentryMiddleware(handler)
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
}

