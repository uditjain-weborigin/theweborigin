import type { GlobalConfig } from 'payload'
import { Welcome } from '@/config/welcome'
import { setHeadArchive } from '@/config/fields/HeadArchive'
import { ArchiveTimestampMaker } from '@/helper/ArchiveTimestampMaker'
import { OptionsPostsCategoriesArchive as Options } from './OptionsPostsCategoriesArchive'
import { Layout } from '@/config/blocks'

const TYPE = 'postsCategories'

export const PostsCategoriesArchive: GlobalConfig = {
  slug: `${TYPE}Archive`,
  admin: {
    group: 'Globals',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [ArchiveTimestampMaker],
  },
  fields: [Welcome, Options, ...setHeadArchive(TYPE), Layout],
}
