import type { Field } from 'payload'
import { LinkField } from '@/config/fields/LinkField'

export const buttonField = (name: string, label: string): Field => ({
  type: 'collapsible',
  label,
  admin: {
    components: {
      Label: {
        path: '@/config/custom/LinkLabel',
        exportName: 'LinkLabel',
        clientProps: { groupName: name },
      },
    },
  },
  fields: [
    {
      name,
      type: 'group',
      label: false,
      fields: [...LinkField],
      admin: {
        hideGutter: true,
        className: 'custom-button-group',
      },
    },
  ],
})
