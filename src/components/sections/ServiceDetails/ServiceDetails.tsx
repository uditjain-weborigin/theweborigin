import Image from '@/utils/Image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import './ServiceDetails.scss'
import { PartShine } from '@/components/parts/PartShine/PartShine'
import { CardStep } from '@/components/cards/CardStep/CardStep'

export function ServiceDetails({ page }: any) {
  const { thumbnail, content, options } = page
  const { usps, steps } = options

  if (!(thumbnail || content || usps || steps)) return null

  return (
    <section className="service-details-area pb-115 mt-65">
      {thumbnail && (
        <div className="service-details-thumb pb-110">
          <Image src={thumbnail.url} alt={thumbnail.alt} width={1273} height={530} />
        </div>
      )}
      {(content || usps || steps) && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="service-details-content">
                {content && (
                  <div className="postbox-dsc mb-70">
                    <RichText data={content} />
                  </div>
                )}
                {usps && (
                  <div className="career-details-list pl-10 mb-70">
                    <ul className="row">
                      {usps?.map((item: any) => {
                        if (!item?.usp) return null
                        return (
                          <li key={item.id} className="col-md-6">
                            <span>
                              <PartShine />
                              {item.usp}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
                {steps && (
                  <div className="row">
                    {steps?.map((item: any, i: number) => (
                      <div key={item.id} className="col-xxl-3 col-xl-4 col-md-6">
                        <CardStep {...item} i={i + 1} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
