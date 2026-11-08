import { PartShine } from '@/components/parts/PartShine/PartShine'
import Image from '@/utils/Image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

export function CardServicePanel(data: any) {
  const { slug, thumbnail, title, excerpt, options, i } = data
  const { usps } = options

  if (!(slug || thumbnail || title || excerpt || usps)) return null
  const bgColor = ['#ABF5FF', '#c6cfff', '#ffb8b0', '#fbe8a4'][i % 4]

  return (
    <div
      className="oit-service-item oit-panel-pin"
      data-start="top 20%"
      data-end="bottom 80%"
      data-bg-color={bgColor}
    >
      {title && (
        <h3 className="oit-service-title">
          <Link href={`/services/${slug}`} className="border-line">
            {title}
          </Link>
        </h3>
      )}
      {(thumbnail || excerpt || usps?.length) && (
        <div className="oit-service-content-wrap d-flex align-items-center">
          {thumbnail && (
            <div className="oit-service-thumb">
              <Image src={thumbnail.url} alt={thumbnail.alt} width={560} height={260} />
            </div>
          )}
          {(excerpt || usps?.length) && (
            <div className="oit-service-content">
              <RichText data={excerpt} />
              {usps?.length && (
                <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-md-3 row-cols-sm-2 row-cols-1">
                  {usps.map((item: any) => {
                    if (!item.usp) return null

                    return (
                      <div key={item.id} className="col">
                        <div className="oit-service-category">
                          <span className=" d-flex align-items-center">
                            <PartShine />
                            {item.usp}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
