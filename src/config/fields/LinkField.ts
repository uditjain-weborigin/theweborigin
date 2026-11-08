import type { Field } from 'payload'

export const LinkField: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'type',
        label: 'Internal',
        type: 'checkbox',
        defaultValue: false,
        admin: {
          width: '33%',
        },
      },
      {
        name: 'newTab',
        label: 'Open in new tab',
        type: 'checkbox',
        defaultValue: false,
        admin: {
          width: '33%',
        },
      },
      {
        name: 'customClass',
        label: 'Custom Class',
        type: 'checkbox',
        defaultValue: false,
        admin: {
          width: '33%',
        },
      },
    ],
  },
  {
    name: 'label',
    label: 'Label',
    type: 'text',
  },
  {
    name: 'page',
    label: 'Page',
    type: 'relationship',
    relationTo: ['pages'],
    admin: {
      condition: (_, siblingData) => siblingData?.type,
    },
  },
  {
    name: 'url',
    label: 'External URL',
    type: 'text',
    admin: {
      condition: (_, siblingData) => !siblingData?.type,
    },
  },
  {
    name: 'class',
    label: 'Class',
    type: 'text',
    admin: {
      condition: (_, siblingData) => siblingData?.customClass,
    },
  },
]
