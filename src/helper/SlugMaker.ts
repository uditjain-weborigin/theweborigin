import type { CollectionBeforeValidateHook } from 'payload'
import { safeSlug } from '@/helper/safeSlug'

export const SlugMaker: CollectionBeforeValidateHook = async (params) => {
  const collection = params.collection.slug
  const { id } = params.originalDoc || {}
  const { data, req } = params

  if (data) {
    const baseSlug = safeSlug(data.title, data.slug)

    const { docs } = await req.payload.find({
      collection,
      where: {
        slug: { like: baseSlug },
      },
      limit: 1000,
      depth: 0,
      overrideAccess: true,
    })

    const existingSlugs = docs
      .filter((doc: any) => doc.id !== id)
      .map((doc: any) => doc.slug)
      .filter((slug: any) => slug === baseSlug || slug.startsWith(`${baseSlug}-`))

    const numbers = existingSlugs.map((slug) => {
      const match = slug.match(new RegExp(`^${baseSlug}-(\\d+)$`))
      return match ? Number(match[1]) : 0
    })

    data.slug = existingSlugs.includes(baseSlug)
      ? `${baseSlug}-${Math.max(0, ...numbers) + 1}`
      : baseSlug
  }
}
