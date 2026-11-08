import type { CollectionSlug, Field, Where } from 'payload'

const slugsWithoutParent: String[] = ['home']
const notAsParent: String[] = []

export const selectParent = (relationTo: CollectionSlug): Field => ({
  name: 'parent',
  type: 'relationship',
  relationTo,
  filterOptions: ({ id }) => {
    const and: Where[] = [{ slug: { not_in: notAsParent } }]

    if (id) {
      and.push({ id: { not_equals: id } })
    }

    return { and }
  },
  validate: (value: unknown, options: any) => {
    if (!value) return true

    const currentDocId = options?.originalDoc?.id ?? options?.req?.params?.id

    if (currentDocId && value === currentDocId) {
      return 'Parent cannot be the current.'
    }

    return true
  },
  admin: {
    position: 'sidebar',
    condition: (_, siblingData) => !slugsWithoutParent.includes(siblingData?.slug),
  },
})
