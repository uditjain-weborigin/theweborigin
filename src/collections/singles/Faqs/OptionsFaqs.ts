import type { Field } from 'payload'

export const OptionsTestimonials: Field = {
  type: 'collapsible',
  label: 'Options',
  fields: [
    {
      type: 'group',
      name: 'options',
      label: false,
      fields: [],
    },
  ],
}
