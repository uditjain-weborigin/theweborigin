import type { Field } from 'payload'
import { LinkField } from '@/config/fields/LinkField'
import { buttonField } from '@/config/fields/buttonField'

export const Hero: Field = {
  name: 'hero',
  label: 'Hero',
  type: 'group',
  admin: {
    className: 'custom-welcome-group',
    condition: (_, siblingData) => siblingData?.style === 'hero',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'globImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    buttonField('link', 'Link'),
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'links',
      label: 'Links',
      type: 'array',
      admin: {
        components: {
          RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
        },
      },
      fields: LinkField,
    },
  ],
}
