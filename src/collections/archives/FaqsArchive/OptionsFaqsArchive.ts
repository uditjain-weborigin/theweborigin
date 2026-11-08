import type { Field } from 'payload'

export const OptionsFaqsArchive: Field = {
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
