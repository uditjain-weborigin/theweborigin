const sanitize = (val: string): string => {
  return val
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/_+/g, '_')
    .replace(/^-+|-+$/g, '')
}

export const safeSlug = (title: string | undefined, slug: string | undefined): string => {
  const val = slug || title || ''
  return sanitize(val)
}
