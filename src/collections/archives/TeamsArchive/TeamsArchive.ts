import type { GlobalConfig } from 'payload'
import { Welcome } from '@/config/welcome'
import { setHeadArchive } from '@/config/fields/HeadArchive'
import { ArchiveTimestampMaker } from '@/helper/ArchiveTimestampMaker'
import { OptionsTeamsArchive as Options } from './OptionsTeamsArchive'
import { Layout } from '@/config/blocks'

const TYPE = 'teams'

export const TeamsArchive: GlobalConfig = {
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
