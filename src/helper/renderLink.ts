import Link from 'next/link'

export function renderLink(item: any) {
  if (!item) return null

  const isInternal = item.type === 'internal' || item.type === true
  let href: string | undefined

  if (isInternal) {
    const relation = item.page
    if (relation && typeof relation.value === 'object') {
      const { slug } = relation.value
      href = relation.relationTo === 'posts' ? `/blogs/${slug}` : slug === 'home' ? '/' : `/${slug}`
    }
  } else {
    href = item.url || undefined
  }

  if (!href) return null

  return {
    href,
    target: item.newTab ? '_blank' : undefined,
    rel: item.newTab ? 'noopener noreferrer' : undefined,
    label: item.label,
    class: item.class,
    children: item.children?.length ? item.children : false,

    type: item.type,
    comp: isInternal ? Link : 'a',
  }
}
