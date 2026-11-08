import type { Block } from 'payload'

export const ContactDetailBlock: Block = {
  slug: 'contactDetail',
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
}
