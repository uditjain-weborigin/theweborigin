import type { Field } from 'payload'

export const OptionsServices: Field = {
  type: 'collapsible',
  label: 'Options',
  fields: [
    {
      name: 'options',
      type: 'group',
      label: false,
      admin: {
        hideGutter: true,
      },
      fields: [
        {
          name: 'usps',
          type: 'array',
          label: 'USPs',
          admin: {
            components: {
              RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
            },
          },
          fields: [
            {
              name: 'usp',
              type: 'text',
              label: 'USP',
            },
          ],
        },
        {
          name: 'steps',
          type: 'array',
          admin: {
            components: {
              RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
            },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'text',
              type: 'textarea',
            },
          ],
        },
      ],
    },
  ],
}
