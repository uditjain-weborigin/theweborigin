import { notFound } from 'next/navigation'
import { Welcome } from '@/components/Welcome'
import { getArchive, getCollection } from '@/helper/fetch'
import { BodyClasses } from '@/helper/BodyClasses'
import { capitalize } from '@/helper/capitalize'
import { Content } from '@/components/sections/Content/Content'
import { Flexible } from '@/components/Flexible'
import { Team } from '@/components/sections/Team/Team'

export async function generateMetadata(): Promise<any> {
  const type = 'teams'
  const page = await getArchive(`${type}Archive`)

  return {
    title: page?.published ? (page?.title ?? capitalize(type)) : '404 Not Found',
  }
}

export default async function TeamsArchive() {
  const type = 'teams'
  const page = await getArchive(`${type}Archive`)

  if (!page?.published) {
    notFound()
  }

  page.breadcrumbs = [{ url: '/', title: 'home' }, { title: type }]

  const collection = await getCollection({
    collection: type,
    limit: 100,
    where: {
      published: {
        equals: true,
      },
    },
  })

  return (
    <>
      <BodyClasses classes={['type--archive', `archive--${type}`]} />
      <Welcome {...page} />
      <Content page={page} />
      <Team page={page} collection={collection} />
      <Flexible {...page} />
    </>
  )
}
