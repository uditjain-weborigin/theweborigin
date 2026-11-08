import type { CollectionSlug, Field } from 'payload'

export const selectRalation = (name: string, relationTo: CollectionSlug): Field => ({
  name,
  relationTo,
  hasMany: true,
  type: 'relationship',
  admin: {
    position: 'sidebar',
  },
})
