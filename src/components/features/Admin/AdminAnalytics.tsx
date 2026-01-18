'use client'

import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Card, CardContent } from '@/components/ui/card'

=======
import { Card } from '@/components/ui/Card'
import { Spinner } from '@/components/ui/Spinner'

/**
 * AdminAnalytics component - detailed analytics
 */
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
export const AdminAnalytics: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
<<<<<<< HEAD
=======
    // Load analytics data
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    setTimeout(() => setLoading(false), 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
<<<<<<< HEAD
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
=======
        <Spinner />
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
<<<<<<< HEAD
        <CardContent className="p-6">
          <p className="text-muted-foreground">
            Analytics dashboard coming soon. This will include charts, graphs, and detailed metrics.
          </p>
        </CardContent>
=======
        <Card.Body>
          <p className="text-[var(--color-text-secondary)]">
            Analytics dashboard coming soon. This will include charts, graphs, and detailed metrics.
          </p>
        </Card.Body>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </Card>
    </div>
  )
}

<<<<<<< HEAD
export default AdminAnalytics
=======
export default AdminAnalytics

>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
