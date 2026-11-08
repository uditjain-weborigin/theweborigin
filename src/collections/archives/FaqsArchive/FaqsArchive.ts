import type { GlobalConfig } from 'payload'
import { Welcome } from '@/config/welcome'
import { setHeadArchive } from '@/config/fields/HeadArchive'
import { ArchiveTimestampMaker } from '@/helper/ArchiveTimestampMaker'
import { OptionsFaqsArchive as Options } from './OptionsFaqsArchive'
import { Layout } from '@/config/blocks'

const TYPE = 'faqs'

export const FaqsArchive: GlobalConfig = {
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
