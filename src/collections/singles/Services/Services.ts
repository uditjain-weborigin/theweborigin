import type { CollectionConfig } from 'payload'
import { SlugMaker } from '@/helper/SlugMaker'
import { setHead } from '@/config/fields/Head'
import { Welcome } from '@/config/welcome'
import { selectParent } from '@/config/fields/selectParent'
import { OptionsServices as Options } from './OptionsServices'
import { Layout } from '@/config/blocks'

const TYPE = 'services'

export const Services: CollectionConfig = {
  slug: TYPE,
  admin: {
    useAsTitle: 'title',
    group: 'Collections',
  },
  hooks: {
    beforeValidate: [SlugMaker],
  },
  fields: [Welcome, Options, ...setHead(TYPE), selectParent(TYPE), Layout],
}
