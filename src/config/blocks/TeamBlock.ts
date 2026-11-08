import type { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'team',
  fields: [
    {
      name: 'tag',
      type: 'text',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'text',
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'teams',
      type: 'relationship',
      relationTo: 'teams',
      hasMany: true,
      admin: {
        description: 'Select none to show the latest teams.',
      },
    },
  ],
}
