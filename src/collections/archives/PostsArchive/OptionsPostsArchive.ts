import type { Field } from 'payload'

export const OptionsPostsArchive: Field = {
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
      fields: [],
    },
  ],
}
