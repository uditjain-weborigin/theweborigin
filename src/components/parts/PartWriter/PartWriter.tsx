export function PartWriter({ writer }: any) {
  const { title, thumbnail, options } = writer || {}
  const role = options?.role

  if (!title && !role && !thumbnail) return null

  return (
    <div className="blog-details-breadcrumb-author-wrap d-inline-flex align-items-center justify-content-center">
      {thumbnail && <img src={thumbnail.url} alt={thumbnail.alt || title || 'Author'} />}
      <div className="blog-details-breadcrumb-author-info text-start">
        {title && <h2 className="title-sm">{title}</h2>}
        {role && <span>{role}</span>}
      </div>
    </div>
  )
}
