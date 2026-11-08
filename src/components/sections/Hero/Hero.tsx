import { RichText } from '@payloadcms/richtext-lexical/react'
import { renderLink } from '@/helper/renderLink'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { PartBtnArrowRight } from '@/components/parts/PartBtnArrowRight/PartBtnArrowRight'

export function Hero({ welcome }: any) {
  const { title, description, globImage, backgroundImage, subtitle, links } = welcome
  const link = renderLink(welcome.link)

  if (!(title || description || globImage || backgroundImage || subtitle || links || link))
    return null

  return (
    <section className="oit-hero-5-area oit-hero-5-bg" data-background={backgroundImage?.url}>
      <div className="container">
        {(title || globImage) && (
          <div className="row">
            <div className="col-xl-12">
              <div className="oit-hero-5-wrap text-center">
                {title && (
                  <div className="oit-hero-5-content p-relative">
                    <h3 className="oit-hero-5-title">{title}</h3>
                    <h3 className="oit-hero-5-title stroke-text">{title}</h3>
                  </div>
                )}
                {globImage && (
                  <div className="oit-hero-5-glob p-relative fix">
                    <img src={globImage.url} alt={globImage.alt} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {(subtitle || links || description || link) && (
          <div className="oit-hero-5-bottom">
            <div className="row align-items-center">
              {(subtitle || links) && (
                <div className="col-md-6">
                  <div className="oit-hero-category-wrap mb-30 fade-anim" data-delay=".3">
                    <div className="oit-hero-category">
                      {subtitle && (
                        <h4 className="oit-hero-category-title mb-0">
                          {subtitle}
                          <span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                              <path
                                d="M8.25 0H0V1.833H6.417V11.158L2.796 7.537L1.5 8.833L7.333 14.667L13.167 8.833L11.871 7.537L8.25 11.158V0Z"
                                fill="currentcolor"
                              />
                            </svg>
                          </span>
                        </h4>
                      )}

                      {links?.map((item: any) => {
                        const link = renderLink(item)
                        if (!link) return null
                        return (
                          <div key={item.id} className="oit-hero-category-item">
                            <link.comp
                              className={`d-flex justify-content-between align-items-center ${link.class}`}
                              href={link.href}
                              target={link.target}
                              rel={link.rel}
                            >
                              <span>{link.label}</span>
                              <PartBtnArrowRight />
                            </link.comp>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {(description || link) && (
                <div className="col-md-6">
                  <div className="oit-hero-5-more-content d-flex justify-content-end z-index-2 mb-30">
                    <div className="oit-hero-content">
                      {description && (
                        <div className="fade-anim" data-delay=".3">
                          <RichText data={description} />
                        </div>
                      )}
                      {link && (
                        <div className="fade-anim" data-delay=".5" data-on-scroll="2">
                          <link.comp
                            className={`oit-btn-border btn-blur-bg d-inline-flex align-items-center justify-content-between ${link.class}`}
                            href={link.href}
                            target={link.target}
                            rel={link.rel}
                          >
                            <span>
                              <span className="text-1">{link.label}</span>
                              <span className="text-2">{link.label}</span>
                            </span>
                            <PartBtnArrow />
                          </link.comp>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
