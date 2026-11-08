import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  upload: {
    imageSizes: [
      {
        name: 'thumb',
        width: 150,
        height: 150,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 600,
        position: 'centre',
      },
      {
        name: 'full',
        width: 1920,
        position: 'centre',
      },
    ],
  },
}
