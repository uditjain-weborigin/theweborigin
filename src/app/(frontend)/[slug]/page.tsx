import type { Page } from '@/payload-types'
import { notFound } from 'next/navigation'
import { getBySlug } from '@/helper/fetch'
import { Flexible } from '@/components/Flexible'
import { Welcome } from '@/components/Welcome'
import { capitalize } from '@/helper/capitalize'
import { BodyClasses } from '@/helper/BodyClasses'
import { Content } from '@/components/sections/Content/Content'

export async function generateMetadata({ params }: any): Promise<any> {
  const type = 'pages'
  const { slug } = await params
  const page = await getBySlug(type, slug)

  return {
    title: page?.published ? (page?.title ?? capitalize(type)) : '404 Not Found',
  }
}

export default async function Page({ params }: any) {
  const type = 'pages'
  const { slug } = await params
  const page = await getBySlug(type, slug)

  if (!page?.published) {
    notFound()
  }

  page.breadcrumbs = [{ url: '/', title: 'home' }, { title: page.title }]

  return (
    <main>
      <BodyClasses classes={[`type--${type}`, `single--${type}`, `${type}--${slug}`]} />
      <Welcome {...page} />
      <Content page={page} />
      <Flexible {...page} />
    </main>
  )
}
