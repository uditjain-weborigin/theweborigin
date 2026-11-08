import { buttonField } from '@/config/fields/buttonField'
import type { Block } from 'payload'

export const AwardBlock: Block = {
  slug: 'award',
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
      name: 'text',
      type: 'textarea',
    },
    buttonField('link', 'Link'),
    {
      name: 'awards',
      type: 'array',
      admin: {
        components: {
          RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
        },
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                width: '100%',
              },
            },
            {
              name: 'title',
              type: 'text',
              admin: {
                width: '75%',
              },
            },
            {
              name: 'year',
              type: 'text',
              admin: {
                width: '25%',
              },
            },
          ],
        },
      ],
    },
  ],
}
