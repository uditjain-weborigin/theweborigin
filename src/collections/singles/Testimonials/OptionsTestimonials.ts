import type { Field } from 'payload'

export const OptionsTestimonials: Field = {
  type: 'collapsible',
  label: 'Options',
  fields: [
    {
      type: 'group',
      name: 'options',
      label: false,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'role',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}
