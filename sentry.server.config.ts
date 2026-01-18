/**
 * This file configures the Sentry SDK for the server-side.
 * Learn more at https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
 */

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || ''
const SENTRY_ENVIRONMENT = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || process.env.NODE_ENV || 'development'

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: SENTRY_ENVIRONMENT,
    tracesSampleRate: SENTRY_ENVIRONMENT === 'production' ? 0.1 : 1.0,
<<<<<<< HEAD
    beforeSend(event) {
=======
    beforeSend(event, hint) {
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      // Filter out development errors
      if (SENTRY_ENVIRONMENT === 'development') {
        return null
      }
      
      return event
    },
  })
}

