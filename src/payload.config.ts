import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/singles/Pages/Pages'
import { Projects } from './collections/singles/Projects/Projects'
import { SiteSettings } from './collections/SiteSettings'
import { ThemeOptions } from './collections/ThemeOptions'
import { Menus } from './collections/Menus'
import { ProjectsTags } from './collections/taxonomies/ProjectsTags/ProjectsTags'
import { PostsCategories } from './collections/taxonomies/PostsCategories/PostsCategories'
import { Services } from './collections/singles/Services/Services'
import { Testimonials } from './collections/singles/Testimonials/Testimonials'
import { Teams } from './collections/singles/Teams/Teams'
import { Posts } from './collections/singles/Posts/Posts'
import { ServicesArchive } from './collections/archives/ServicesArchive/ServicesArchive'
import { PostsArchive } from './collections/archives/PostsArchive/PostsArchive'
import { TeamsArchive } from './collections/archives/TeamsArchive/TeamsArchive'
import { ProjectsArchive } from './collections/archives/ProjectsArchive/ProjectsArchive'
import { TestimonialsArchive } from './collections/archives/TestimonialsArchive/TestimonialsArchive'
import { ProjectsTagsArchive } from './collections/archives/ProjectsTagsArchive/ProjectsTagsArchive'
import { PostsCategoriesArchive } from './collections/archives/PostsCategoriesArchive/PostsCategoriesArchive'
import { FaqsArchive } from './collections/archives/FaqsArchive/FaqsArchive'
import { Faqs } from './collections/singles/Faqs/Faqs'
import { PostsTags } from './collections/taxonomies/PostsTags/PostsTags'
import { PostsTagsArchive } from './collections/archives/PostsTagsArchive/PostsTagsArchive'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      beforeNavLinks: ['@/style'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    Posts,
    PostsCategories,
    PostsTags,
    Projects,
    ProjectsTags,
    Services,
    Testimonials,
    Teams,
    Faqs,
  ],
  globals: [
    Menus,
    SiteSettings,
    ThemeOptions,
    PostsArchive,
    PostsCategoriesArchive,
    PostsTagsArchive,
    ProjectsArchive,
    ProjectsTagsArchive,
    ServicesArchive,
    TestimonialsArchive,
    TeamsArchive,
    FaqsArchive,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [
    formBuilderPlugin({
      fields: {
        checkbox: true,
        country: true,
        date: true,
        email: true,
        message: true,
        number: true,
        radio: true,
        select: true,
        state: true,
        text: true,
        textarea: true,
      },
      formOverrides: {
        admin: {
          group: 'Forms',
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: 'Forms',
        },
      },
    }),
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: {
        access: ({ collectionSlug, req }) =>
          collectionSlug === 'media' && req.user?.role === 'admin',
      },
    }),
  ],
})
