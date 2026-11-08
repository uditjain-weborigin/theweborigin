import { PartQuote } from '@/components/parts/PartQuote/PartQuote'
import { RichText } from '@payloadcms/richtext-lexical/react'

export function CardTestimonial(data: any) {
  const { title, content, thumbnail, options } = data
  const { name, role } = options

  if (!(title || content || thumbnail || name || role)) return null

  return (
    <div className="dg-testimonial-item">
      <span className="quote d-block pb-70">
        <PartQuote />
      </span>
      {title && <p className="text-large mb-25">{title}</p>}
      <div className="text-small mb-70">
        <RichText data={content} />
      </div>
      {(thumbnail || name || role) && (
        <div className="dg-testimonial-authour-box d-flex align-items-center">
          {thumbnail && (
            <div className="dg-testimonial-authour-thumb mr-15">
              <img className="border-radius-10" src={thumbnail.url} alt={thumbnail.alt} />
            </div>
          )}
          {(name || role) && (
            <div className="dg-testimonial-authour-info">
              {name && <h3 className="dg-testimonial-authour-title">{name}</h3>}
              {role && <span>{role}</span>}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
