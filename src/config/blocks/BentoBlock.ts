import { buttonField } from '@/config/fields/buttonField'
import { RichtextRefresher } from '@/helper/RichtextRefresher'
import type { Block } from 'payload'

export const BentoBlock: Block = {
  slug: 'bento',
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
          admin: {
            width: '50%',
          },
        },
        {
          name: 'subtitle',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Plans',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'plans',
          type: 'group',
          label: false,
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'subtitle',
              type: 'text',
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Clients',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'clients',
          type: 'group',
          label: false,
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              name: 'rating',
              type: 'text',
            },
            {
              name: 'subtitle',
              type: 'richText',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Support',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'support',
          type: 'group',
          label: false,
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'subtitle',
              type: 'text',
            },
            {
              name: 'shape',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Ready',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'ready',
          type: 'group',
          label: false,
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              name: 'title',
              type: 'textarea',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Build',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'build',
          type: 'group',
          label: false,
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'subtitle',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'solutions',
      admin: {
        description: 'Show only on wide screens.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'solutions',
          type: 'group',
          label: false,
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'usps',
              type: 'array',
              label: 'USPs',
              admin: {
                components: {
                  RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
                },
              },
              fields: [
                {
                  name: 'usp',
                  type: 'text',
                  label: 'USP',
                },
              ],
            },
            buttonField('link', 'Link'),
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'subtitle',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
