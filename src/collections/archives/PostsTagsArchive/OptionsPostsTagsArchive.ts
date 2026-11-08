import type { Field } from 'payload'

export const OptionsPostsTagsArchive: Field = {
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
