import { PartShine } from '@/components/parts/PartShine/PartShine'
import { RichText } from '@payloadcms/richtext-lexical/react'

export function CardDetails(data: any) {
  const { tag, content, usps, stats } = data

  return (
    <div className="project-details-content-wrap pb-110">
      <div className="row">
        {tag && (
          <div className="col-lg-5">
            <div className="project-details-title-box">
              <span className="project-details-subtitle">{tag}</span>
            </div>
          </div>
        )}
        {(content || usps || stats) && (
          <div className="col-lg-7">
            <div className="project-details-author-info">
              {content && (
                <div className="postbox-dsc mb-50">
                  <RichText data={content} />
                </div>
              )}
              {usps && (
                <ul className="career-details-list">
                  {usps.map((usp: any) => {
                    if (!usp?.usp) return null
                    return (
                      <li key={usp.id}>
                        <span>
                          <PartShine />
                          {usp.usp}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              )}
              {stats && (
                <div className="row">
                  {stats.map((stat: any) => {
                    const { number, symbol, title } = stat
                    if (!(number || symbol || title)) return null

                    return (
                      <div key={stat.id} className="col-xl-4 col-lg-6 col-md-6">
                        <div className="sd-funfact-card card-1 mb-30" data-bg-color="#fff">
                          {(number || symbol) && (
                            <h2 className="sd-funfact-title">
                              {number && (
                                <i
                                  className="purecounter"
                                  data-purecounter-duration="1"
                                  data-purecounter-end={number}
                                >
                                  0
                                </i>
                              )}
                              {symbol}
                            </h2>
                          )}
                          {title && <span>{title}</span>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
