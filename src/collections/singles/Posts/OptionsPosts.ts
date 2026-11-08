import type { Field } from 'payload'

export const OptionsPosts: Field = {
  type: 'collapsible',
  label: 'Options',
  fields: [
    {
      type: 'group',
      name: 'options',
      label: false,
      fields: [
        {
          name: 'writer',
          type: 'relationship',
          relationTo: 'teams',
        },
      ],
    },
  ],
}
