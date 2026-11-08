import { notFound } from 'next/navigation'
import { Welcome } from '@/components/Welcome'
import { getArchive, getCollection } from '@/helper/fetch'
import { BodyClasses } from '@/helper/BodyClasses'
import { capitalize } from '@/helper/capitalize'
import { Content } from '@/components/sections/Content/Content'
import { Flexible } from '@/components/Flexible'
import { Posts } from '@/components/sections/Posts/Posts'

export async function generateMetadata(): Promise<any> {
  const type = 'posts'
  const page = await getArchive(`${type}Archive`)

  return {
    title: page?.published ? (page?.title ?? capitalize(type)) : '404 Not Found',
  }
}

export default async function ServicesArchive({ searchParams }: { searchParams: Promise<{ postsTags?: string }> }) {
  const type = 'posts'
  const { postsTags = '' } = await searchParams
  const page = await getArchive(`${type}Archive`)

  if (!page?.published) {
    notFound()
  }

  page.breadcrumbs = [{ url: '/', title: 'home' }, { title: type }]

  const tag = postsTags
    ? await getCollection({
        collection: 'postsTags',
        limit: 1,
        where: {
          and: [{ published: { equals: true } }, { slug: { equals: postsTags } }],
        },
      })
    : null

  const collection =
    postsTags && !tag
      ? null
      : await getCollection({
          collection: type,
          limit: 100,
          where: {
            and: [
              { published: { equals: true } },
              ...(tag ? [{ postsTags: { in: [tag[0].id] } }] : []),
            ],
          },
        })

  return (
    <>
      <BodyClasses classes={['type--archive', `archive--${type}`]} />
      <Welcome {...page} />
      <Content page={page} />
      <Posts page={page} collection={collection} />
      <Flexible {...page} />
    </>
  )
}
