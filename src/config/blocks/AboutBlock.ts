import { buttonField } from '@/config/fields/buttonField'
import type { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'about',
  fields: [
    {
      name: 'tag',
      type: 'text',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      label: 'Title 1',
      name: 'title1',
      type: 'text',
    },
    {
      label: 'Content 1',
      name: 'content1',
      type: 'richText',
    },
    buttonField('button', 'Button'),
    {
      label: 'Title 2',
      name: 'title2',
      type: 'text',
    },
    {
      label: 'Content 2',
      name: 'content2',
      type: 'richText',
    },
  ],
}
