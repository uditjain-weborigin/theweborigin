import { getPayload } from 'payload'
import config from '@/payload.config'

export async function GET() {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'postsCategories',
    limit: 100,
    sort: 'title',
    where: {
      published: { equals: true },
    },
  })

  const docs = await Promise.all(
    result.docs.map(async (category) => {
      const posts = await payload.find({
        collection: 'posts',
        limit: 100,
        where: {
          and: [{ published: { equals: true } }, { postsCategories: { in: [category.id] } }],
        },
      })

      return { ...category, postCount: posts.totalDocs }
    }),
  )

  return Response.json({ docs })
}
