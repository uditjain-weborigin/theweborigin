import type { Block } from 'payload'

export const ServicePanelBlock: Block = {
  slug: 'servicePanel',
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
      name: 'shape',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      admin: {
        description: 'Select none to show the latest services.',
      },
    },
  ],
}
