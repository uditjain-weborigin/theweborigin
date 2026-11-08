import type { CollectionConfig } from 'payload'
import { SlugMaker } from '@/helper/SlugMaker'
import { setHead } from '@/config/fields/Head'
import { Welcome } from '@/config/welcome'
import { selectParent } from '@/config/fields/selectParent'
import { OptionsPages as Options } from './OptionsPages'
import { Layout } from '@/config/blocks'

const TYPE = 'pages'

export const Pages: CollectionConfig = {
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
