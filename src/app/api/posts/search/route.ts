import { getPayload } from 'payload'
import config from '@/payload.config'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('q')?.trim() ?? ''
  const categoryId = searchParams.get('categoryId')

  if (!search && !categoryId) {
    return Response.json({ docs: [] })
  }

  const payload = await getPayload({ config })
  const conditions: any[] = [{ published: { equals: true } }]

  if (categoryId) {
    conditions.push({ postsCategories: { in: [categoryId] } })
  }

  if (search) {
    const matchingCategories = await payload.find({
      collection: 'postsCategories',
      limit: 100,
      where: {
        and: [{ published: { equals: true } }, { title: { like: search } }],
      },
    })
    const categoryIDs = matchingCategories.docs.map((category) => category.id)
    const searchConditions = [
      { title: { like: search } },
      { slug: { like: search } },
      ...(categoryIDs.length ? [{ postsCategories: { in: categoryIDs } }] : []),
    ]
    conditions.push({ or: searchConditions })
  }

  const result = await payload.find({
    collection: 'posts',
    limit: 100,
    sort: '-createdAt',
    where: {
      and: conditions,
    },
  })

  return Response.json({ docs: result.docs })
}
