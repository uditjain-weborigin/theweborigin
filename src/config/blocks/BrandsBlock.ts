import type { Block } from 'payload'

export const BrandsBlock: Block = {
  slug: 'brands',
  fields: [
    {
      name: 'style',
      type: 'select',
      options: [
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
      ],
      defaultValue: 'dark',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
