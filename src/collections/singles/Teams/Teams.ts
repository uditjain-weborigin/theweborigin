import { setHead } from '@/config/fields/Head'
import { SlugMaker } from '@/helper/SlugMaker'
import type { CollectionConfig } from 'payload'
import { OptionsTeams as Options } from './OptionsTeams'
import { Layout } from '@/config/blocks'
import { Welcome } from '@/config/welcome'

const TYPE = 'teams'

export const Teams: CollectionConfig = {
  slug: TYPE,
  admin: {
    useAsTitle: 'title',
    group: 'Collections',
  },
  hooks: {
    beforeValidate: [SlugMaker],
  },
  fields: [Welcome, Options, ...setHead(TYPE), Layout],
}
