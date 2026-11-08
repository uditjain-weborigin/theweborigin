import { notFound } from 'next/navigation'
import { getBySlug } from '@/helper/fetch'
import { Welcome } from '@/components/Welcome'
import { Flexible } from '@/components/Flexible'
import { BodyClasses } from '@/helper/BodyClasses'
import { capitalize } from '@/helper/capitalize'
import { ServiceDetails } from '@/components/sections/ServiceDetails/ServiceDetails'

export async function generateMetadata({ params }: any): Promise<any> {
  const type = 'services'
  const { slug } = await params
  const page = await getBySlug(type, slug)

  return {
    title: page?.published ? (page?.title ?? capitalize(type)) : '404 Not Found',
  }
}

export default async function ServicesSingle({ params }: any) {
  const type = 'services'
  const { slug } = await params
  const page = await getBySlug(type, slug)

  if (!page?.published) {
    notFound()
  }

  page.breadcrumbs = [
    { url: '/', title: 'home' },
    { url: `/${type}`, title: type },
    { title: page.title },
  ]

  return (
    <>
      <BodyClasses classes={[`type--${type}`, `single--${type}`, `${type}--${slug}`]} />
      <Welcome {...page} />
      <ServiceDetails page={page} />
      <Flexible {...page} />
    </>
  )
}
