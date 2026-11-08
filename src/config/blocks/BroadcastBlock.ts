import type { Block } from 'payload'
import { buttonField } from '../fields/buttonField'

export const BroadcastBlock: Block = {
  slug: 'broadcast',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    buttonField('link', 'Link'),
  ],
}
