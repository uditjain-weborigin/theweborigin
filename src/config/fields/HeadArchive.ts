import type { Field } from 'payload'

export const setHeadArchive = (type?: string): Field[] => [
  ...(type
    ? [
        {
          name: 'type',
          type: 'text' as const,
          defaultValue: type,
          admin: {
            hidden: true,
            readOnly: true,
            position: 'sidebar' as const,
          },
        },
      ]
    : []),
  {
    name: 'isArchive',
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
    name: 'thumbnail',
    type: 'upload',
    relationTo: 'media',
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'author',
    type: 'relationship',
    relationTo: 'users',
    admin: {
      readOnly: true,
      position: 'sidebar',
    },
    hooks: {
      beforeChange: [
        ({ value, req }) => {
          const user = req.user as { id?: string | number } | null | undefined
          return value || user?.id
        },
      ],
    },
  },
  {
    name: 'createdAt',
    type: 'date',
    admin: {
      readOnly: true,
      position: 'sidebar',
    },
  },
  {
    name: 'updatedAt',
    type: 'date',
    admin: {
      readOnly: true,
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
