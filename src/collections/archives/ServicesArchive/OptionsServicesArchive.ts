import type { Field } from 'payload'
import { buttonField } from '@/config/fields/buttonField'

export const OptionsServicesArchive: Field = {
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
          type: 'collapsible',
          label: 'Service Panel',
          fields: [
            {
              name: 'servicePanel',
              type: 'group',
              label: false,
              admin: {
                hideGutter: true,
              },
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                    },
                    {
                      name: 'subtitle',
                      type: 'text',
                    },
                  ],
                },
                {
                  name: 'shape',
                  type: 'upload',
                  relationTo: 'media',
                },
                buttonField('link', 'Link'),
              ],
            },
          ],
        },
      ],
    },
  ],
}
