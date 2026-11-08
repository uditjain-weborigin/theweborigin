import { setHead } from '@/config/fields/Head'
import { OptionsTestimonials as Options } from './OptionsTestimonials'
import { SlugMaker } from '@/helper/SlugMaker'
import type { CollectionConfig } from 'payload'
import { Layout } from '@/config/blocks'

const TYPE = 'testimonials'

export const Testimonials: CollectionConfig = {
  slug: TYPE,
  admin: {
    useAsTitle: 'title',
    group: 'Collections',
  },
  hooks: {
    beforeValidate: [SlugMaker],
  },
  fields: [Options, ...setHead(TYPE), Layout],
}
