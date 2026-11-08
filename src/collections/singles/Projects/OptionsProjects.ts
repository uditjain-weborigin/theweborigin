import { buttonField } from '@/config/fields/buttonField'
import type { Field } from 'payload'

export const OptionsProjects: Field = {
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
          name: 'tag',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'client',
          type: 'text',
        },
        {
          name: 'year',
          type: 'text',
        },
        {
          name: 'location',
          type: 'text',
        },
        buttonField('link', 'Link'),
        {
          name: 'blocks',
          type: 'blocks',
          blocks: [
            {
              slug: 'detail',
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                },
                {
                  name: 'content',
                  type: 'richText',
                },
                {
                  name: 'usps',
                  label: 'USPs',
                  type: 'array',
                  admin: {
                    components: {
                      RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
                    },
                  },
                  fields: [{ name: 'usp', type: 'text' }],
                },
                {
                  name: 'stats',
                  type: 'array',
                  admin: {
                    components: {
                      RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
                    },
                  },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        { name: 'number', type: 'text' },
                        { name: 'symbol', type: 'text' },
                      ],
                    },
                    { name: 'title', type: 'text' },
                  ],
                },
              ],
            },
            {
              slug: 'thumbnails',
              fields: [
                {
                  name: 'image1',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'image2',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'image3',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
        {
          name: 'customer',
          type: 'group',
          admin: {
            hideGutter: true,
          },
          fields: [
            { name: 'tag', type: 'text' },
            {
              name: 'feedback',
              type: 'richText',
            },
            {
              name: 'photo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              type: 'row',
              fields: [
                { name: 'name', type: 'text' },
                { name: 'role', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
