import { notFound } from 'next/navigation'
import { Welcome } from '@/components/Welcome'
import { getArchive, getCollection } from '@/helper/fetch'
import { BodyClasses } from '@/helper/BodyClasses'
import { capitalize } from '@/helper/capitalize'
import { ServicesPanel } from '@/components/sections/ServicesPanel/ServicesPanel'
import { Content } from '@/components/sections/Content/Content'
import { Flexible } from '@/components/Flexible'

export async function generateMetadata(): Promise<any> {
  const type = 'services'
  const page = await getArchive(`${type}Archive`)

  return {
    title: page?.published ? (page?.title ?? capitalize(type)) : '404 Not Found',
  }
}

export default async function ServicesArchive() {
  const type = 'services'
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
      <ServicesPanel page={page} collection={collection} />
      <Flexible {...page} />
    </>
  )
}
