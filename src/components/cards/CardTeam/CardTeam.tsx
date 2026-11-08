import { Icon } from '@/components/icons'
import Link from 'next/link'

export function CardTeam(data: any) {
  const { slug, thumbnail, title, i, options } = data
  const { role, instagram, dribble, behance } = options

  if (!(slug || thumbnail || title || role || instagram || dribble || behance)) return null

  return (
    <div className="dg-team-item mb-35 fade-anim" data-delay={0.3 + i * 0.2}>
      {thumbnail && (
        <Link href={`/teams/${slug}`}>
          <div className="dg-team-thumb image-gsl border-radius-10 mb-30">
            <div className="image-gsl-canvas"></div>
            <img className="border-radius-10 w-100" src={thumbnail.url} alt={thumbnail.alt} />
          </div>
        </Link>
      )}
      {(title || role) && (
        <div className="dg-team-author-wrap d-flex justify-content-between align-items-center">
          {(title || role) && (
            <div className="dg-team-author-info">
              {title && (
                <Link href={`/teams/${slug}`}>
                  <h4 className="dg-team-title">
                    <div className="border-line">{title}</div>
                  </h4>
                </Link>
              )}
              {role && <span>{role}</span>}
            </div>
          )}
          {(instagram || dribble || behance) && (
            <div className="dg-team-social">
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <Icon size={16} iconKey="instagram" />
                </a>
              )}
              {dribble && (
                <a href={dribble} target="_blank" rel="noopener noreferrer">
                  <Icon size={16} iconKey="dribbble" />
                </a>
              )}
              {behance && (
                <a href={behance} target="_blank" rel="noopener noreferrer">
                  <Icon size={16} iconKey="behance" />
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
