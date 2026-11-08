import type { CollectionConfig } from 'payload'
import { SlugMaker } from '@/helper/SlugMaker'
import { setHead } from '@/config/fields/Head'
import { Welcome } from '@/config/welcome'
import { selectParent } from '@/config/fields/selectParent'
import { selectRalation } from '@/config/fields/selectRalation'
import { OptionsProjects as Options } from './OptionsProjects'
import { Layout } from '@/config/blocks'

const TYPE = 'projects'

export const Projects: CollectionConfig = {
  slug: TYPE,
  admin: {
    useAsTitle: 'title',
    group: 'Collections',
  },
  hooks: {
    beforeValidate: [SlugMaker],
  },
  fields: [
    Welcome,
    Options,
    ...setHead(TYPE),
    selectParent(TYPE),
    selectRalation(`${TYPE}Tags`, `${TYPE}Tags`),
    Layout,
  ],
}
