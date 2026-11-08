import type { CollectionConfig } from 'payload'
import { SlugMaker } from '@/helper/SlugMaker'
import { setHeadTaxonomy } from '@/config/fields/HeadTaxonomy'
import { selectParent } from '@/config/fields/selectParent'
import { OptionsProjectsTags as Options } from './OptionsProjectsTags'

export const ProjectsTags: CollectionConfig = {
  slug: 'projectsTags',
  admin: {
    useAsTitle: 'title',
    group: 'Taxonomies',
  },
  hooks: {
    beforeValidate: [SlugMaker],
  },
  fields: [Options, ...setHeadTaxonomy('projectsTags'), selectParent('projectsTags')],
}
