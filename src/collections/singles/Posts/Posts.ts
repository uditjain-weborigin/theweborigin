import type { CollectionConfig } from 'payload'

import { SlugMaker } from '@/helper/SlugMaker'
import { setHead } from '@/config/fields/Head'
import { selectParent } from '@/config/fields/selectParent'
import { OptionsPosts as Options } from './OptionsPosts'
import { Layout } from '@/config/blocks'
import { selectRalation } from '@/config/fields/selectRalation'
import { ReadingTimeMaker } from '@/helper/ReadingTimeMaker'

const TYPE = 'posts'

export const Posts: CollectionConfig = {
  slug: TYPE,
  admin: {
    useAsTitle: 'title',
    group: 'Collections',
  },
  hooks: {
    beforeValidate: [SlugMaker],
    beforeChange: [ReadingTimeMaker],
  },
  fields: [
    Options,
    ...setHead(TYPE),
    selectParent(TYPE),
    selectRalation(`${TYPE}Categories`, `${TYPE}Categories`),
    selectRalation(`${TYPE}Tags`, `${TYPE}Tags`),
    Layout,
    {
      name: 'readingTime',
      type: 'text',
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: 'seconds',
      },
    },
  ],
}
