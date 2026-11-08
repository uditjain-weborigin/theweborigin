import { buttonField } from '@/config/fields/buttonField'
import type { Field } from 'payload'

export const OptionsTeams: Field = {
  type: 'collapsible',
  label: 'Options',
  fields: [
    {
      type: 'group',
      name: 'options',
      label: false,
      fields: [
        {
          name: 'role',
          type: 'text',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'email',
              type: 'email',
            },
          ],
        },
        buttonField('address', 'Address'),
        {
          type: 'collapsible',
          label: 'Social URLs',
          fields: [
            {
              name: 'facebook',
              type: 'text',
            },
            {
              name: 'twitter',
              type: 'text',
            },
            {
              name: 'instagram',
              type: 'text',
            },
            {
              name: 'dribble',
              type: 'text',
            },
            {
              name: 'behance',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
