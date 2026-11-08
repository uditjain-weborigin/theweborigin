import type { CollectionConfig } from 'payload'
import { SlugMaker } from '@/helper/SlugMaker'
import { setHeadTaxonomy } from '@/config/fields/HeadTaxonomy'
import { selectParent } from '@/config/fields/selectParent'
import { OptionsPostsCategories as Options } from './OptionsPostsCategories'

export const PostsCategories: CollectionConfig = {
  slug: 'postsCategories',
  admin: {
    useAsTitle: 'title',
    group: 'Taxonomies',
  },
  hooks: {
    beforeValidate: [SlugMaker],
  },
  fields: [Options, ...setHeadTaxonomy('postsCategories'), selectParent('postsCategories')],
}
