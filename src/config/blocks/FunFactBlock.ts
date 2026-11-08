import type { Block } from 'payload'

export const FunFactBlock: Block = {
  slug: 'fun-fact',
  fields: [
    {
      name: 'shape',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'usps',
      type: 'array',
      admin: {
        components: {
          RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
        },
      },
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'number',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'symbol',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
