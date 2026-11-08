import type { Block } from 'payload'
import { buttonField } from '../fields/buttonField'

export const ConnectBlock: Block = {
  slug: 'connect',
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
    {
      name: 'subtitle',
      type: 'textarea',
    },
    buttonField('link', 'Link'),
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
