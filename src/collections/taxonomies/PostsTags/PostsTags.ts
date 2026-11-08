import type { CollectionConfig } from 'payload'
import { SlugMaker } from '@/helper/SlugMaker'
import { setHeadTaxonomy } from '@/config/fields/HeadTaxonomy'
import { selectParent } from '@/config/fields/selectParent'
import { OptionsPostsTags as Options } from './OptionsPostsTags'

export const PostsTags: CollectionConfig = {
  slug: 'postsTags',
  admin: {
    useAsTitle: 'title',
    group: 'Taxonomies',
  },
  hooks: {
    beforeValidate: [SlugMaker],
  },
  fields: [Options, ...setHeadTaxonomy('postsTags'), selectParent('postsTags')],
}
