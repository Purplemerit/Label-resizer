import React from 'react'
<<<<<<< HEAD
import { Card, CardContent } from '@/components/ui/card'
=======
import { Card } from '@/components/ui/Card'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc

export interface StatCard {
  label: string
  value: number | string
  subtitle?: string
  icon?: React.ReactNode
}

export interface StatsSectionProps {
  stats: StatCard[]
  className?: string
}

/**
 * Stats section component for dashboard
 * Display metrics (labels created, batches, etc.)
 */
export const StatsSection: React.FC<StatsSectionProps> = ({ stats, className }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className || ''}`}>
      {stats.map((stat, index) => (
        <Card key={index}>
<<<<<<< HEAD
          <CardContent>
=======
          <Card.Body>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                  {stat.value}
                </p>
                {stat.subtitle && (
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                    {stat.subtitle}
                  </p>
                )}
              </div>
              {stat.icon && <div>{stat.icon}</div>}
            </div>
<<<<<<< HEAD
          </CardContent>
=======
          </Card.Body>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
        </Card>
      ))}
    </div>
  )
}

export default StatsSection
