import { renderLink } from '@/helper/renderLink'
import { RichText } from '@payloadcms/richtext-lexical/react'

export function About({ block }: any) {
  const { tag, heading, image, title1, content1, title2, content2 } = block
  const button = renderLink(block.button)

  if (!(tag || heading || image || title1 || content1 || title2 || content2 || button)) return null

  return (
    <section className="ba-about-area dg-about-style p-relative pt-120 pb-120">
      <div className="container">
        {tag && (
          <div className="row">
            <div className="col-xl-4">
              <div className="oit-section-subtitle-box mb-30">
                <span className="oit-section-subtitle">{tag}</span>
              </div>
            </div>
          </div>
        )}
        {(image || heading || title1 || content1 || title2 || content2 || button) && (
          <div className="oit-about-content-wrap">
            <div className="row align-items-end">
              {image && (
                <div className="col-xl-4 col-lg-10">
                  <div className="oit-about-thumb image-gsl">
                    <div className="image-gsl-canvas"></div>
                    <img src={image.url} alt={image.alt} />
                  </div>
                </div>
              )}
              {(heading || title1 || content1 || title2 || content2 || button) && (
                <div className="col-xl-8">
                  <div className="dg-about-content-wrap pl-90">
                    {heading && (
                      <div className="oit-section-title-box pt-15 mb-60">
                        <h3 className="oit-section-title oit-title-revel">{heading}</h3>
                      </div>
                    )}
                    {(title1 || content1 || title2 || content2) && (
                      <div className="ba-about-vision-wrap">
                        <div className="row">
                          {(title1 || content1) && (
                            <div className="col-lg-6">
                              <div className="ba-about-vision-item mb-30 fade-anim" data-delay=".3">
                                {title1 && <h4 className="ba-about-vision-title">{title1}</h4>}
                                <RichText data={content1} />
                              </div>
                            </div>
                          )}
                          {(title2 || content2) && (
                            <div className="col-lg-6">
                              <div className="ba-about-vision-item mb-30 fade-anim" data-delay=".3">
                                <div className="ba-about-vision-inner">
                                  {title2 && <h4 className="ba-about-vision-title">{title2}</h4>}
                                  <RichText data={content2} />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {button && (
                      <div className="ba-about-btn fade-anim" data-delay=".5">
                        <a
                          className={`oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between ${button.class}`}
                          href={button.href}
                          target={button.target}
                          rel={button.rel}
                        >
                          {button.label && (
                            <span>
                              <span className="text-1">{button.label}</span>
                              <span className="text-2">{button.label}</span>
                            </span>
                          )}
                          <i>
                            <span>
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path
                                  d="M11.4801 6.10132e-06L12.4381 0.99062L12.3305 1.09859C9.55759 4.01224 9.66053 7.97757 11.492 9.87138L10.5199 10.8562C9.01152 9.29621 8.47367 6.87412 9.01459 4.46212L0.955362 12.6371L-0.000299374 11.6476L8.06131 3.46911C5.69918 4.00199 3.33666 3.42959 1.82692 1.86845L2.799 0.882416C4.65351 2.80007 8.59851 2.92281 11.4801 6.10132e-06Z"
                                  fill="currentcolor"
                                />
                              </svg>
                              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path
                                  d="M11.4801 6.10132e-06L12.4381 0.99062L12.3305 1.09859C9.55759 4.01224 9.66053 7.97757 11.492 9.87138L10.5199 10.8562C9.01152 9.29621 8.47367 6.87412 9.01459 4.46212L0.955362 12.6371L-0.000299374 11.6476L8.06131 3.46911C5.69918 4.00199 3.33666 3.42959 1.82692 1.86845L2.799 0.882416C4.65351 2.80007 8.59851 2.92281 11.4801 6.10132e-06Z"
                                  fill="currentcolor"
                                />
                              </svg>
                            </span>
                          </i>
                        </a>
                      </div>
                    )}
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
