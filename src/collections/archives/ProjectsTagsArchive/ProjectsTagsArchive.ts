import type { GlobalConfig } from 'payload'
import { Welcome } from '@/config/welcome'
import { setHeadArchive } from '@/config/fields/HeadArchive'
import { ArchiveTimestampMaker } from '@/helper/ArchiveTimestampMaker'
import { OptionsProjectsTagsArchive as Options } from './OptionsProjectsTagsArchive'
import { Layout } from '@/config/blocks'

const TYPE = 'projectsTags'

export const ProjectsTagsArchive: GlobalConfig = {
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
