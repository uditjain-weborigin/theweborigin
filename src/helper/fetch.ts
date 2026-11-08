import { getPayload } from 'payload'
import config from '@/payload.config'
import type { CollectionSlug } from 'payload'
import type { SiteSetting, ThemeOption, Menu, Form } from '@/payload-types'

export async function getCollection(options: any, list: any = null) {
  const payload = await getPayload({ config })
  const result = await payload.find(options)
  const docs = list?.length ? list : result.docs
  return docs?.length ? docs : null
}

export async function getBySlug(collection: CollectionSlug, slug: string): Promise<any> {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: collection,
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  return result.docs?.[0]
}

export async function getByID(id: number | string): Promise<any> {
  const payload = await getPayload({ config })

  return payload.findByID({
    collection: 'pages',
    id,
  })
}

export async function getForm(id: number | string): Promise<Form> {
  const payload = await getPayload({ config })

  return payload.findByID({
    collection: 'forms',
    id,
  })
}

export async function getTheme(key: keyof ThemeOption): Promise<any> {
  const payload = await getPayload({ config })
  const options = await payload.findGlobal({
    slug: 'theme-options',
  })
  return options?.[key]
}

export async function getArchive(key: any): Promise<any> {
  const payload = await getPayload({ config })
  const options = await payload.findGlobal({
    slug: key,
  })
  return options
}

export async function getSite(key: keyof SiteSetting): Promise<any> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  })

  return settings?.[key]
}

export async function getMenu(key: keyof Menu): Promise<any> {
  const payload = await getPayload({ config })
  const menus = await payload.findGlobal({
    slug: 'menus',
  })

  return menus?.[key]
}
