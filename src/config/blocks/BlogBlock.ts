import type { Block } from 'payload'

export const BlogBlock: Block = {
  slug: 'blog',
  fields: [
    {
      name: 'tag',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'posts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      admin: {
        description: 'Select none to show the latest posts.',
      },
    },
  ],
}
