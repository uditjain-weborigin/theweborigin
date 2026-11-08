import type { Block } from 'payload'
import { buttonField } from '../fields/buttonField'

export const FaqAreaBlock: Block = {
  slug: 'faq-area',
  fields: [
    {
      name: 'tag',
      type: 'text',
    },
    {
      name: 'title',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    buttonField('link', 'Link'),
    {
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faqs',
      hasMany: true,
      admin: {
        description: 'Select none to show the latest faqs.',
      },
    },
  ],
}
