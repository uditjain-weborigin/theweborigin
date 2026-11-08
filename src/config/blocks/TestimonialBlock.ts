import type { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
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
          admin: {
            width: '50%',
          },
        },
        {
          name: 'subtitle',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      admin: {
        description: 'Select none to show the latest testimonials.',
      },
    },
  ],
}
