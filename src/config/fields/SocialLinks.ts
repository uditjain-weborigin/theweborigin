import type { Field } from 'payload'
import { safeSlug } from '@/helper/safeSlug'

export const SocialLinks: Field = {
  name: 'socials',
  label: 'Social Media Links',
  type: 'array',
  hooks: {
    beforeValidate: [
      ({ value }) => {
        if (!Array.isArray(value)) return value

        return value.map((item) => ({
          ...item,
          key: safeSlug(item.title, item.key),
        }))
      },
    ],
  },
  admin: {
    components: {
      RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
    },
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'key',
      label: 'Key',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required: true,
    },
  ],
}
