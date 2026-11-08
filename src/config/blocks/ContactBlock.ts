import type { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
  fields: [
    {
      name: 'shape',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'title',
      type: 'textarea',
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      admin: {
        description: 'Select the form to display in this contact section.',
      },
    },
  ],
}
