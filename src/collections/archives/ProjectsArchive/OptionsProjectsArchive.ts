import type { Field } from 'payload'

export const OptionsProjectsArchive: Field = {
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
          label: 'Project',
          fields: [
            {
              name: 'project',
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
              ],
            },
          ],
        },
      ],
    },
  ],
}
