import Link from 'next/link'

export function CardProject(data: any) {
  const { slug, thumbnail, title, projectsTags } = data

  if (!(slug || thumbnail || title || projectsTags)) return null

  return (
    <Link href={`/projects/${slug}`} className="oit-project-item mb-30">
      {thumbnail && (
        <div className="oit-project-thumb image-gsl">
          <div className="image-gsl-canvas"></div>
          <img className="w-100" src={thumbnail.url} alt={thumbnail.alt} />
        </div>
      )}
      {(title || projectsTags) && (
        <div className="oit-project-content">
          {title && (
            <h4 className="oit-project-title mb-0">
              <span className="border-line">{title}</span>
            </h4>
          )}
          {projectsTags && (
            <div className="oit-project-category">
              <span>{projectsTags?.map((i: any) => i.title).join(', ')}</span>
            </div>
          )}
        </div>
      )}
    </Link>
  )
}
