import { PartStar } from '@/components/parts/PartStar/PartStar'
import { RichText } from '@payloadcms/richtext-lexical/react'

export function CardClients(data: any) {
  const { rating, subtitle, image } = data

  if (!(rating || subtitle || image)) return null

  return (
    <div className="oit-bin-to-card-item grey-bg card-1 item-style-2 mb-30">
      {(subtitle || rating) && (
        <div className="d-flex align-items-center justify-content-between">
          <div className="ratting-box">
            <div className="ratting mb-5">
              <PartStar filled />
              <PartStar filled />
              <PartStar filled />
              <PartStar filled />
              <PartStar filled />
            </div>
            {subtitle && (
              <span>
                <RichText data={subtitle} />
              </span>
            )}
          </div>
          {rating && (
            <div className="ratting-text">
              <span>{rating}</span>
              <span>/5.0</span>
            </div>
          )}
        </div>
      )}
      {image && <img className="pt-95" src={image.url} alt={image.alt} />}
    </div>
  )
}
