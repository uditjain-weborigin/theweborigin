import { notFound } from 'next/navigation'
import { getBySlug } from '@/helper/fetch'
import { BodyClasses } from '@/helper/BodyClasses'
import { Welcome } from '@/components/Welcome'
import { Flexible } from '@/components/Flexible'
import { capitalize } from '@/helper/capitalize'
import { Content } from '@/components/sections/Content/Content'

export async function generateMetadata(): Promise<any> {
  const type = 'pages'
  const page = await getBySlug(type, 'home')

  return {
    title: page?.published ? (page?.title ?? capitalize(type)) : '404 Not Found',
  }
}

export default async function HomePage() {
  const type = 'pages'
  const page = await getBySlug(type, 'home')

  if (!page?.published) {
    notFound()
  }

  page.breadcrumbs = [{ url: '/', title: 'home' }]

  return (
    <>
      <BodyClasses classes={['is-home', `type--${type}`, `single--${type}`, 'pages--home']} />
      <Welcome {...page} />
      <Content page={page} />
      <Flexible {...page} />
    </>
  )
}
