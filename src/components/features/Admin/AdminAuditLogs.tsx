'use client'

import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
=======
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Spinner } from '@/components/ui/Spinner'
import { Search, Filter } from 'lucide-react'
import { format } from 'date-fns'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc

export interface AuditLog {
  id: string
  user_id: string | null
  action: string
  entity_type: string | null
  entity_id: string | null
  changes: any
  ip_address: string | null
  user_agent: string | null
  created_at: string
  user_email?: string
}

<<<<<<< HEAD
=======
/**
 * AdminAuditLogs component - view audit logs
 */
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
export const AdminAuditLogs: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterAction, setFilterAction] = useState<string>('all')

  useEffect(() => {
<<<<<<< HEAD
    // Mock data
    setLogs([
      {
        id: '1',
        user_id: 'user1',
        action: 'user_login',
        entity_type: 'user',
        entity_id: 'user1',
        changes: {},
        ip_address: '192.168.1.1',
        user_agent: 'Mozilla/5.0...',
        created_at: new Date().toISOString(),
        user_email: 'admin@labelpro.com'
      }
    ])
    setLoading(false)
  }, [])
=======
    loadAuditLogs()
  }, [filterAction])

  const loadAuditLogs = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (filterAction !== 'all') {
        params.append('action', filterAction)
      }

      const response = await fetch(`/api/admin/logs?${params.toString()}`)
      if (!response.ok) throw new Error('Failed to load logs')

      const data = await response.json()
      setLogs(data.logs || [])
    } catch (error) {
      console.error('Load audit logs error:', error)
    } finally {
      setLoading(false)
    }
  }
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc

  const filteredLogs = logs.filter((log) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        log.action.toLowerCase().includes(query) ||
        log.entity_type?.toLowerCase().includes(query) ||
        log.user_email?.toLowerCase().includes(query) ||
        log.ip_address?.toLowerCase().includes(query)
      )
    }
    return true
  })

  const uniqueActions = Array.from(new Set(logs.map((log) => log.action)))

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
<<<<<<< HEAD
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
=======
      {/* Filters */}
      <Card>
        <Card.Body>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-tertiary)]" size={20} />
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                <Input
                  type="search"
                  placeholder="Search logs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
<<<<<<< HEAD
              className="px-4 py-2 border rounded-lg"
=======
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-lg"
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
            >
              <option value="all">All Actions</option>
              {uniqueActions.map((action) => (
                <option key={action} value={action}>
                  {action}
                </option>
              ))}
            </select>
          </div>
<<<<<<< HEAD
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold">Time</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">User</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Action</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Entity</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">IP Address</th>
=======
        </Card.Body>
      </Card>

      {/* Logs Table */}
      <Card>
        <Card.Body>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    Time
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    User
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    Action
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    Entity
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    IP Address
                  </th>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                </tr>
              </thead>
              <tbody>
                {filteredLogs.length === 0 ? (
                  <tr>
<<<<<<< HEAD
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
=======
                    <td colSpan={5} className="py-8 text-center text-[var(--color-text-secondary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                      No logs found
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log) => (
<<<<<<< HEAD
                    <tr key={log.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <span className="text-sm text-muted-foreground">
                          {new Date(log.created_at).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm">{log.user_email || 'System'}</span>
=======
                    <tr
                      key={log.id}
                      className="border-b border-[var(--color-border-primary)] hover:bg-[var(--color-gray-50)]"
                    >
                      <td className="py-3 px-4">
                        <span className="text-sm text-[var(--color-text-secondary)]">
                          {format(new Date(log.created_at), 'MMM d, yyyy h:mm:ss a')}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-[var(--color-text-primary)]">
                          {log.user_email || 'System'}
                        </span>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                          {log.action}
                        </span>
                      </td>
                      <td className="py-3 px-4">
<<<<<<< HEAD
                        <div className="text-sm text-muted-foreground">
                          {log.entity_type || 'N/A'}
                          {log.entity_id && (
                            <span className="text-xs ml-1">
=======
                        <div className="text-sm text-[var(--color-text-secondary)]">
                          {log.entity_type || 'N/A'}
                          {log.entity_id && (
                            <span className="text-xs text-[var(--color-text-tertiary)] ml-1">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                              ({log.entity_id.substring(0, 8)}...)
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
<<<<<<< HEAD
                        <span className="text-sm text-muted-foreground">
=======
                        <span className="text-sm text-[var(--color-text-secondary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                          {log.ip_address || 'N/A'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
<<<<<<< HEAD
        </CardContent>
=======
        </Card.Body>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </Card>
    </div>
  )
}

<<<<<<< HEAD
export default AdminAuditLogs
=======
export default AdminAuditLogs

>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
