import { RichText } from '@payloadcms/richtext-lexical/react'

export function CardFeedback(data: any) {
  const { tag, feedback, photo, name, role } = data

  if (!(tag || feedback || photo || name || role)) return null

  return (
    <div className="project-details-content-wrap pb-80">
      <div className="row">
        {tag && (
          <div className="col-lg-5">
            <div className="project-details-title-box">
              <span className="project-details-subtitle">{tag}</span>
            </div>
          </div>
        )}
        {(feedback || photo || name || role) && (
          <div className="col-lg-7">
            <div className="project-details-author-info">
              {feedback && (
                <div className="postbox-dsc mb-20">
                  <RichText data={feedback} />
                </div>
              )}
              {(photo || name || role) && (
                <div className="blog-details-breadcrumb-author-wrap d-flex align-items-center author-style-2">
                  {photo && <img src={photo.url} alt={photo.alt} />}
                  {(name || role) && (
                    <div className="blog-details-breadcrumb-author-info text-start">
                      {name && <h3 className="title-sm">{name}</h3>}
                      {role && <span>{role}</span>}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
