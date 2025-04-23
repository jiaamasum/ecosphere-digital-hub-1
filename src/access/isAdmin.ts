import { Access } from 'payload/config'
import { User } from '../payload-types'

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user?.role === 'admin')
}

export const isAdminOrHasAccessToImages: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.role === 'admin') return true

  return {
    user: {
      equals: user.id
    }
  }
}