import type { Field } from 'payload'

export const setHeadTaxonomy = (type: string): Field[] => [
  {
    name: 'type',
    type: 'text',
    defaultValue: type,
    admin: {
      hidden: true,
      readOnly: true,
      position: 'sidebar',
    },
  },
  {
    name: 'isTaxonomy',
    type: 'checkbox',
    defaultValue: true,
    admin: {
      hidden: true,
      readOnly: true,
      position: 'sidebar',
    },
  },
  {
    name: 'published',
    type: 'checkbox',
    label: 'Published',
    defaultValue: true,
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'title',
    type: 'text',
    required: true,
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'slug',
    type: 'text',
    required: true,
    unique: true,
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'thumbnail',
    type: 'upload',
    relationTo: 'media',
    admin: {
      position: 'sidebar',
    },
  },
  {
    type: 'collapsible',
    label: 'Excerpt',
    admin: {
      className: 'custom-content-collapsible',
    },
    fields: [
      {
        label: false,
        name: 'excerpt',
        type: 'richText',
      },
    ],
  },
  {
    type: 'collapsible',
    label: 'Content',
    admin: {
      className: 'custom-content-collapsible',
    },
    fields: [
      {
        label: false,
        name: 'content',
        type: 'richText',
      },
    ],
  },
]
