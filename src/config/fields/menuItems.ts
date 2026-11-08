import type { Field } from 'payload'
import { LinkField } from '@/config/fields/LinkField'

export const menuItems = (name = 'items', children?: Field | Field[]): Field => ({
  name,
  type: 'array',
  admin: {
    components: {
      RowLabel: '@/config/custom/CustomRowLabel#CustomRowLabel',
    },
  },
  fields: [...LinkField, ...(children ? (Array.isArray(children) ? children : [children]) : [])],
})
