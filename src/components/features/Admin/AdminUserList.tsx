'use client'

import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, User, Shield, Edit, Trash2 } from 'lucide-react'
import { supabase } from '@/lib/supabase/client'
=======
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
import { Spinner } from '@/components/ui/Spinner'
import { 
  Search, 
  User, 
  Mail, 
  Calendar, 
  Shield, 
  Crown,
  MoreVertical,
  Edit,
  Trash2
} from 'lucide-react'
import { format } from 'date-fns'
import { useToast } from '@/components/ui/Toast'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc

export interface AdminUser {
  id: string
  email: string
  full_name: string | null
  subscription_tier: 'free' | 'pro' | 'enterprise'
  subscription_status: string
  is_admin: boolean
  created_at: string
  labels_used_this_month: number
  batches_used_this_month: number
<<<<<<< HEAD
  avatar_url?: string
  company_name?: string
}

=======
}

/**
 * AdminUserList component - manage all users
 */
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
export const AdminUserList: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterTier, setFilterTier] = useState<'all' | 'free' | 'pro' | 'enterprise'>('all')
<<<<<<< HEAD

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      setLoading(true)
      const { data: users, error } = await supabase
        .from('profiles')
        .select(`
          id, 
          email, 
          full_name, 
          company_name,
          avatar_url,
          subscription_tier, 
          subscription_status, 
          is_admin, 
          created_at,
          labels_used_this_month,
          batches_used_this_month,
          trial_ends_at
        `)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      
      const formattedUsers = (users || []).map(user => ({
        ...user,
        subscription_tier: user.subscription_tier || 'free',
        subscription_status: user.subscription_status || 'active',
        labels_used_this_month: user.labels_used_this_month || 0,
        batches_used_this_month: user.batches_used_this_month || 0
      }))
      
      setUsers(formattedUsers)
    } catch (error) {
      console.error('Error loading users:', error)
=======
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const { showToast } = useToast()

  useEffect(() => {
    loadUsers()
  }, [filterTier])

  const loadUsers = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (filterTier !== 'all') {
        params.append('tier', filterTier)
      }
      if (searchQuery) {
        params.append('search', searchQuery)
      }

      const response = await fetch(`/api/admin/users?${params.toString()}`)
      if (!response.ok) throw new Error('Failed to load users')

      const data = await response.json()
      setUsers(data.users || [])
    } catch (error) {
      console.error('Load users error:', error)
      showToast('Failed to load users', 'error')
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    } finally {
      setLoading(false)
    }
  }

<<<<<<< HEAD
=======
  const handleUpdateUser = async (userId: string, updates: Partial<AdminUser>) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      })

      if (!response.ok) throw new Error('Failed to update user')

      showToast('User updated successfully', 'success')
      loadUsers()
      setShowEditModal(false)
    } catch (error) {
      console.error('Update user error:', error)
      showToast('Failed to update user', 'error')
    }
  }

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete user')

      showToast('User deleted successfully', 'success')
      loadUsers()
    } catch (error) {
      console.error('Delete user error:', error)
      showToast('Failed to delete user', 'error')
    }
  }

>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
  const filteredUsers = users.filter((user) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        user.email.toLowerCase().includes(query) ||
<<<<<<< HEAD
        user.full_name?.toLowerCase().includes(query)
=======
        user.full_name?.toLowerCase().includes(query) ||
        user.id.toLowerCase().includes(query)
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      )
    }
    return true
  })

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
      {/* Filters */}
      <Card>
<<<<<<< HEAD
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="search"
                  placeholder="Search by email or name..."
=======
        <Card.Body>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-tertiary)]" size={20} />
                <Input
                  type="search"
                  placeholder="Search by email, name, or ID..."
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select
              value={filterTier}
              onChange={(e) => setFilterTier(e.target.value as any)}
<<<<<<< HEAD
              className="px-4 py-2 border rounded-lg"
=======
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-lg"
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
            >
              <option value="all">All Plans</option>
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
<<<<<<< HEAD
        </CardContent>
=======
        </Card.Body>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </Card>

      {/* Users Table */}
      <Card>
<<<<<<< HEAD
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold">User</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Usage</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold">Actions</th>
=======
        <Card.Body>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    User
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    Plan
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    Usage
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    Created
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
                    Actions
                  </th>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
<<<<<<< HEAD
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
=======
                    <td colSpan={6} className="py-8 text-center text-[var(--color-text-secondary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                      No users found
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
<<<<<<< HEAD
                    <tr key={user.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            {user.avatar_url ? (
                              <img src={user.avatar_url} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
                            ) : user.is_admin ? (
=======
                    <tr
                      key={user.id}
                      className="border-b border-[var(--color-border-primary)] hover:bg-[var(--color-gray-50)]"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            {user.is_admin ? (
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                              <Shield size={20} className="text-purple-600" />
                            ) : (
                              <User size={20} className="text-blue-600" />
                            )}
                          </div>
                          <div>
<<<<<<< HEAD
                            <p className="font-medium">{user.full_name || user.company_name || 'No name'}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            {user.company_name && user.full_name && (
                              <p className="text-xs text-muted-foreground">{user.company_name}</p>
                            )}
=======
                            <p className="font-medium text-[var(--color-text-primary)]">
                              {user.full_name || 'No name'}
                            </p>
                            <p className="text-sm text-[var(--color-text-secondary)]">{user.email}</p>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 text-xs rounded capitalize ${
                            user.subscription_tier === 'enterprise'
                              ? 'bg-purple-100 text-purple-600'
                              : user.subscription_tier === 'pro'
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {user.subscription_tier}
                        </span>
                      </td>
                      <td className="py-3 px-4">
<<<<<<< HEAD
                        <div className="text-sm text-muted-foreground">
=======
                        <div className="text-sm text-[var(--color-text-secondary)]">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                          <div>{user.labels_used_this_month} labels</div>
                          <div>{user.batches_used_this_month} batches</div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
<<<<<<< HEAD
=======
                        <span className="text-sm text-[var(--color-text-secondary)]">
                          {format(new Date(user.created_at), 'MMM d, yyyy')}
                        </span>
                      </td>
                      <td className="py-3 px-4">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            user.subscription_status === 'active'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {user.subscription_status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
<<<<<<< HEAD
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
=======
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedUser(user)
                              setShowEditModal(true)
                            }}
                          >
                            <Edit size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                          >
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
                            <Trash2 size={16} className="text-red-600" />
                          </Button>
                        </div>
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
      </Card>

      {/* Edit User Modal */}
      {showEditModal && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => {
            setShowEditModal(false)
            setSelectedUser(null)
          }}
          onUpdate={handleUpdateUser}
        />
      )}
    </div>
  )
}

/**
 * Edit User Modal Component
 */
const EditUserModal: React.FC<{
  user: AdminUser
  onClose: () => void
  onUpdate: (userId: string, updates: Partial<AdminUser>) => Promise<void>
}> = ({ user, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    subscription_tier: user.subscription_tier,
    subscription_status: user.subscription_status,
    is_admin: user.is_admin,
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onUpdate(user.id, formData)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <Card.Header>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
            Edit User: {user.email}
          </h2>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                Subscription Tier
              </label>
              <select
                value={formData.subscription_tier}
                onChange={(e) =>
                  setFormData({ ...formData, subscription_tier: e.target.value as any })
                }
                className="w-full px-4 py-2 border border-[var(--color-border-primary)] rounded-lg"
              >
                <option value="free">Free</option>
                <option value="pro">Pro</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                Subscription Status
              </label>
              <select
                value={formData.subscription_status}
                onChange={(e) =>
                  setFormData({ ...formData, subscription_status: e.target.value })
                }
                className="w-full px-4 py-2 border border-[var(--color-border-primary)] rounded-lg"
              >
                <option value="active">Active</option>
                <option value="trialing">Trialing</option>
                <option value="paused">Paused</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_admin"
                checked={formData.is_admin}
                onChange={(e) => setFormData({ ...formData, is_admin: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="is_admin" className="text-sm font-medium text-[var(--color-text-primary)]">
                Admin Access
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" variant="primary" loading={loading} className="flex-1">
                Save Changes
              </Button>
            </div>
          </form>
        </Card.Body>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      </Card>
    </div>
  )
}

<<<<<<< HEAD
export default AdminUserList
=======
export default AdminUserList

>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
