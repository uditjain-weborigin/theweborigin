import type { Block } from 'payload'

export const ProjectBlock: Block = {
  slug: 'project',
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
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      admin: {
        description: 'Select none to show the latest projects.',
      },
    },
  ],
}
