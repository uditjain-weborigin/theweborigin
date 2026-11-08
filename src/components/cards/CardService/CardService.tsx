import { PartShine } from '@/components/parts/PartShine/PartShine'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

export function CardService(data: any) {
  const { slug, thumbnail, title, excerpt, options } = data
  const { usps } = options

  if (!(slug || thumbnail || title || excerpt || usps)) return null

  return (
    <div className="oit-service-item d-flex align-items-center mb-50" data-bg-color="#101216">
      <div className="oit-service-content-wrap">
        <h4 className="oit-service-title">
          <Link href={`/services/${slug}`}>{title}</Link>
        </h4>
        {(excerpt || usps) && (
          <div className="oit-service-content">
            <RichText data={excerpt} />
            {usps && (
              <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-md-3 row-cols-sm-2 row-cols-1">
                {usps?.map((item: any) => (
                  <div key={item.id} className="col">
                    <div className="oit-service-category">
                      <span className="d-flex align-items-center">
                        <PartShine />
                        {item.usp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {thumbnail && (
        <div className="oit-service-thumb">
          <img src={thumbnail.url} alt={thumbnail.alt} />
        </div>
      )}
    </div>
  )
}
