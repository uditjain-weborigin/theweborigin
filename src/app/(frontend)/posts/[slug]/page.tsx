import { notFound } from 'next/navigation'
import { getBySlug } from '@/helper/fetch'
import { Flexible } from '@/components/Flexible'
import { BodyClasses } from '@/helper/BodyClasses'
import { capitalize } from '@/helper/capitalize'
import { BlogHeader } from '@/components/sections/BlogHeader/BlogHeader'
import { BlogDetail } from '@/components/sections/BlogDetail/BlogDetail'

export async function generateMetadata({ params }: any): Promise<any> {
  const type = 'posts'
  const { slug } = await params
  const page = await getBySlug(type, slug)

  return {
    title: page?.published ? (page?.title ?? capitalize(type)) : '404 Not Found',
  }
}

export default async function PostsSingle({ params }: any) {
  const type = 'posts'
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
      <BlogHeader page={page} />
      <BlogDetail page={page} />
      <Flexible {...page} />
    </>
  )
}
