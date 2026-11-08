import { buttonField } from '@/config/fields/buttonField'
import type { Field } from 'payload'

export const OptionsTeamsArchive: Field = {
  type: 'collapsible',
  label: 'Options',
  fields: [
    {
      type: 'group',
      name: 'options',
      label: false,
      fields: [buttonField('link', 'Link')],
    },
  ],
}
