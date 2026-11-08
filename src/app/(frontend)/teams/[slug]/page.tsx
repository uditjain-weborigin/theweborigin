import { notFound } from 'next/navigation'
import { getBySlug } from '@/helper/fetch'
import { Welcome } from '@/components/Welcome'
import { Flexible } from '@/components/Flexible'
import { BodyClasses } from '@/helper/BodyClasses'
import { capitalize } from '@/helper/capitalize'
import { TeamDetail } from '@/components/sections/TeamDetail/TeamDetail'

export async function generateMetadata({ params }: any): Promise<any> {
  const type = 'teams'
  const { slug } = await params
  const page = await getBySlug(type, slug)

  return {
    title: page?.published ? (page?.title ?? capitalize(type)) : '404 Not Found',
  }
}

export default async function TeamsSingle({ params }: any) {
  const type = 'teams'
  const { slug } = await params
  const page = await getBySlug(type, slug)

  if (!page?.published) {
    notFound()
  }

  page.breadcrumbs = [
    { url: '/', title: 'home' },
    { url: `/teams`, title: type },
    { title: page.title },
  ]

  return (
    <>
      <BodyClasses classes={[`type--${type}`, `single--${type}`, `${type}--${slug}`]} />
      <Welcome {...page} />
      <TeamDetail page={page} />
      <Flexible {...page} />
    </>
  )
}
