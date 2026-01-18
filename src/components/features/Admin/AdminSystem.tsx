'use client'

import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
=======
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/badge'
import { Spinner } from '@/components/ui/Spinner'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
import { CheckCircle2, XCircle, AlertCircle, Database, Server, Activity } from 'lucide-react'

interface SystemStatus {
  database: 'healthy' | 'degraded' | 'down'
  api: 'healthy' | 'degraded' | 'down'
  storage: 'healthy' | 'degraded' | 'down'
  response_time_ms: number
  last_check: string
}

<<<<<<< HEAD
=======
/**
 * AdminSystem component - system status monitoring
 */
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
export const AdminSystem: React.FC = () => {
  const [status, setStatus] = useState<SystemStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
<<<<<<< HEAD
    // Mock data
    setStatus({
      database: 'healthy',
      api: 'healthy',
      storage: 'healthy',
      response_time_ms: 45,
      last_check: new Date().toISOString()
    })
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
=======
    loadSystemStatus()
    // Refresh every 30 seconds
    const interval = setInterval(loadSystemStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  const loadSystemStatus = async () => {
    try {
      const response = await fetch('/api/admin/system/status')
      if (!response.ok) throw new Error('Failed to load system status')

      const data = await response.json()
      setStatus(data)
    } catch (error) {
      console.error('Load system status error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner />
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </div>
    )
  }

  if (!status) {
    return <div>Failed to load system status</div>
  }

  const getStatusIcon = (serviceStatus: string) => {
    switch (serviceStatus) {
      case 'healthy':
        return <CheckCircle2 size={24} className="text-green-600" />
      case 'degraded':
        return <AlertCircle size={24} className="text-yellow-600" />
      case 'down':
        return <XCircle size={24} className="text-red-600" />
      default:
        return <AlertCircle size={24} className="text-gray-600" />
    }
  }

  const getStatusBadge = (serviceStatus: string) => {
    switch (serviceStatus) {
      case 'healthy':
<<<<<<< HEAD
        return <Badge className="bg-green-100 text-green-600">Healthy</Badge>
      case 'degraded':
        return <Badge className="bg-yellow-100 text-yellow-600">Degraded</Badge>
      case 'down':
        return <Badge className="bg-red-100 text-red-600">Down</Badge>
=======
        return <Badge variant="success">Healthy</Badge>
      case 'degraded':
        return <Badge variant="warning">Degraded</Badge>
      case 'down':
        return <Badge variant="error">Down</Badge>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Database size={24} className="text-blue-600" />
                <h3 className="font-semibold">Database</h3>
=======
      {/* Service Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <Card.Body>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Database size={24} className="text-blue-600" />
                <h3 className="font-semibold text-[var(--color-text-primary)]">Database</h3>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
              </div>
              {getStatusIcon(status.database)}
            </div>
            {getStatusBadge(status.database)}
<<<<<<< HEAD
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Server size={24} className="text-purple-600" />
                <h3 className="font-semibold">API</h3>
=======
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Server size={24} className="text-purple-600" />
                <h3 className="font-semibold text-[var(--color-text-primary)]">API</h3>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
              </div>
              {getStatusIcon(status.api)}
            </div>
            {getStatusBadge(status.api)}
<<<<<<< HEAD
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Activity size={24} className="text-green-600" />
                <h3 className="font-semibold">Storage</h3>
=======
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Activity size={24} className="text-green-600" />
                <h3 className="font-semibold text-[var(--color-text-primary)]">Storage</h3>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
              </div>
              {getStatusIcon(status.storage)}
            </div>
            {getStatusBadge(status.storage)}
<<<<<<< HEAD
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Average Response Time</span>
              <span className="text-2xl font-bold">{status.response_time_ms}ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Last Check</span>
              <span className="text-sm">{new Date(status.last_check).toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
=======
          </Card.Body>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <Card.Header>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Performance Metrics
          </h3>
        </Card.Header>
        <Card.Body>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-text-secondary)]">Average Response Time</span>
              <span className="text-2xl font-bold text-[var(--color-text-primary)]">
                {status.response_time_ms}ms
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-text-secondary)]">Last Check</span>
              <span className="text-sm text-[var(--color-text-primary)]">
                {new Date(status.last_check).toLocaleString()}
              </span>
            </div>
          </div>
        </Card.Body>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </Card>
    </div>
  )
}

<<<<<<< HEAD
export default AdminSystem
=======
export default AdminSystem

>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
