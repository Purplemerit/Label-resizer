'use client'

import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react'
=======
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import { Spinner } from '@/components/ui/Spinner'
import { TrendingUp, TrendingDown, Users, DollarSign, BarChart3 } from 'lucide-react'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
import { AdminAnalyticsCharts } from './AdminAnalyticsCharts'

interface AnalyticsData {
  revenue: {
    mrr: number
    arr: number
    breakdown: {
      pro: { users: number; revenue: number }
      enterprise: { users: number; revenue: number }
    }
  }
  churn: {
    rate: number
    canceled_this_month: number
    total_active_users: number
  }
  acquisition: {
    new_users_this_month: number
    new_users_last_month: number
    growth_percent: number
    conversion_rate: number
    cac: number | null
  }
  users: {
    total: number
    free: number
    paid: number
  }
  features: {
    total_labels_created: number
    total_batches: number
    top_features: Array<{ name: string; count: number }>
  }
}

/**
 * Enhanced Admin Analytics component with MRR, churn, CAC
 */
export const AdminAnalyticsEnhanced: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadAnalytics()
  }, [])

  const loadAnalytics = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/analytics')
      if (!response.ok) {
        throw new Error('Failed to load analytics')
      }
      const analyticsData = await response.json()
      setData(analyticsData)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load analytics')
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value)
  }

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`
  }

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

  if (error) {
    return (
      <Card>
<<<<<<< HEAD
        <CardContent className="p-6">
=======
        <CardBody>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
          <div className="text-center py-8">
            <p className="text-red-600 mb-4">Error loading analytics: {error}</p>
            <button
              onClick={loadAnalytics}
<<<<<<< HEAD
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
=======
              className="px-4 py-2 bg-[var(--color-primary-500)] text-white rounded-lg hover:bg-[var(--color-primary-600)]"
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
            >
              Retry
            </button>
          </div>
<<<<<<< HEAD
        </CardContent>
=======
        </CardBody>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </Card>
    )
  }

  if (!data) {
    return null
  }

  return (
    <div className="space-y-6">
      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<<<<<<< HEAD
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Monthly Recurring Revenue</CardTitle>
              <DollarSign size={20} className="text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">
              {formatCurrency(data.revenue.mrr)}
            </p>
            <p className="text-sm text-muted-foreground">
              ARR: {formatCurrency(data.revenue.arr)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Churn Rate</CardTitle>
              {data.churn.rate > 5 ? (
                <TrendingDown size={20} className="text-red-500" />
              ) : (
                <TrendingUp size={20} className="text-green-600" />
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">
              {formatPercent(data.churn.rate)}
            </p>
            <p className="text-sm text-muted-foreground">
              {data.churn.canceled_this_month} canceled this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Conversion Rate</CardTitle>
              <BarChart3 size={20} className="text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">
              {formatPercent(data.acquisition.conversion_rate)}
            </p>
            <p className="text-sm text-muted-foreground">
              {data.users.paid} paid / {data.users.total} total users
            </p>
          </CardContent>
=======
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Monthly Recurring Revenue</h3>
              <DollarSign size={20} className="text-[var(--color-success-500)]" />
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              {formatCurrency(data.revenue.mrr)}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              ARR: {formatCurrency(data.revenue.arr)}
            </p>
          </CardBody>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Churn Rate</h3>
              {data.churn.rate > 5 ? (
                <TrendingDown size={20} className="text-red-500" />
              ) : (
                <TrendingUp size={20} className="text-[var(--color-success-500)]" />
              )}
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              {formatPercent(data.churn.rate)}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {data.churn.canceled_this_month} canceled this month
            </p>
          </CardBody>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Conversion Rate</h3>
              <BarChart3 size={20} className="text-[var(--color-primary-500)]" />
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              {formatPercent(data.acquisition.conversion_rate)}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {data.users.paid} paid / {data.users.total} total users
            </p>
          </CardBody>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
        </Card>
      </div>

      {/* Revenue Breakdown */}
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className="text-xl font-bold">Revenue Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Pro Plan</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">
                {formatCurrency(data.revenue.breakdown.pro.revenue)}
              </p>
              <p className="text-sm text-muted-foreground">
=======
          <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Revenue Breakdown</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Pro Plan</h3>
              <p className="text-2xl font-bold text-[var(--color-primary-600)] mb-1">
                {formatCurrency(data.revenue.breakdown.pro.revenue)}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                {data.revenue.breakdown.pro.users} active subscribers
              </p>
            </div>
            <div>
<<<<<<< HEAD
              <h3 className="font-semibold mb-2">Enterprise Plan</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">
                {formatCurrency(data.revenue.breakdown.enterprise.revenue)}
              </p>
              <p className="text-sm text-muted-foreground">
=======
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Enterprise Plan</h3>
              <p className="text-2xl font-bold text-[var(--color-primary-600)] mb-1">
                {formatCurrency(data.revenue.breakdown.enterprise.revenue)}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                {data.revenue.breakdown.enterprise.users} active subscribers
              </p>
            </div>
          </div>
<<<<<<< HEAD
        </CardContent>
=======
        </CardBody>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </Card>

      {/* User Growth */}
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className="text-xl font-bold">User Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">New Users This Month</p>
              <p className="text-2xl font-bold">
=======
          <h2 className="text-xl font-bold text-[var(--color-text-primary)]">User Growth</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-1">New Users This Month</p>
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                {data.acquisition.new_users_this_month}
              </p>
            </div>
            <div>
<<<<<<< HEAD
              <p className="text-sm text-muted-foreground mb-1">Growth Rate</p>
              <p className="text-2xl font-bold">
=======
              <p className="text-sm text-[var(--color-text-secondary)] mb-1">Growth Rate</p>
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                {formatPercent(data.acquisition.growth_percent)}
              </p>
            </div>
            <div>
<<<<<<< HEAD
              <p className="text-sm text-muted-foreground mb-1">User Distribution</p>
=======
              <p className="text-sm text-[var(--color-text-secondary)] mb-1">User Distribution</p>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-semibold">{data.users.free}</span> free users
                </p>
                <p className="text-sm">
                  <span className="font-semibold">{data.users.paid}</span> paid users
                </p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </CardContent>
=======
        </CardBody>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </Card>

      {/* Feature Usage */}
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className="text-xl font-bold">Feature Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.features.top_features.map((feature, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{feature.name}</span>
                <span className="font-semibold">
=======
          <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Feature Usage</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {data.features.top_features.map((feature, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[var(--color-text-primary)]">{feature.name}</span>
                <span className="font-semibold text-[var(--color-text-primary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                  {feature.count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Visualizations</h2>
=======
        </CardBody>
      </Card>

      {/* Charts Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Visualizations</h2>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
        <AdminAnalyticsCharts data={data} />
      </div>
    </div>
  )
}

export default AdminAnalyticsEnhanced

