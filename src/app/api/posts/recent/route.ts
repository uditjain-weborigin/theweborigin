import { getPayload } from 'payload'
import config from '@/payload.config'

export async function GET(request: Request) {
  const requestedNumber = Number(new URL(request.url).searchParams.get('number'))
  const number = Number.isFinite(requestedNumber) && requestedNumber > 0
    ? Math.min(Math.floor(requestedNumber), 100)
    : 3

  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'posts',
    limit: number,
    where: {
      published: { equals: true },
    },
  })

  return Response.json({ docs: result.docs })
}
