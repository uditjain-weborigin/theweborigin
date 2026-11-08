/** Convert a URL slug such as "web-design" into a readable title. */
export function slugToTitle(slug: string): string {
  return slug
    .trim()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
}
