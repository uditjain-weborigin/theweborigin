import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { renderLink } from '@/helper/renderLink'
import { renderTextArea } from '@/helper/renderTextArea'

export function Award({ block }: any) {
  const { id, tag, title, text, awards } = block
  const link = renderLink(block.link)

  if (!(tag || title || text || link || awards)) return null

  return (
    <section key={id} className="oit-award-area pt-140 pb-120">
      <div className="container">
        <div className="row">
          {(tag || title || text || link) && (
            <div className="col-xl-4">
              <div className="oit-section-title-box text-center text-md-start">
                {tag && (
                  <span className="oit-section-subtitle mb-10 fade-anim" data-delay=".3">
                    {tag}
                  </span>
                )}
                {title && (
                  <h3 className="oit-section-title fsz-60 mb-25 fade-anim" data-delay=".3">
                    {title}
                  </h3>
                )}
                {text && (
                  <div className="fade-anim" data-delay=".5">
                    <p className="mb-30">{renderTextArea(text)}</p>
                  </div>
                )}
                {link && (
                  <div className="fade-anim" data-delay=".7">
                    <link.comp
                      className={`oit-btn-border btn-black-bg d-inline-flex align-items-center justify-content-between ${link.class}`}
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                    >
                      {link.label && (
                        <span>
                          <span className="text-1">{link.label}</span>
                          <span className="text-2">{link.label}</span>
                        </span>
                      )}
                      <PartBtnArrow />
                    </link.comp>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="col-xl-8">
            <div className="oit-award-item-wrap">
              {awards.map((item: any) => {
                const { id, image, title, year } = item

                if (!(image || title || year)) return null

                return (
                  <div key={id} className="oit-award-item">
                    <div className="row align-items-center">
                      {image && (
                        <div className="col-xl-3 col-lg-3 col-md-4">
                          <div className="oit-award-icon">
                            <img src={image.url} alt={image.alt} />
                          </div>
                        </div>
                      )}
                      {(title || year) && (
                        <div className="col-xl-9 col-lg-9 col-md-8">
                          <div className="oit-award-content d-flex justify-content-between align-items-center">
                            {title && <p>{title}</p>}
                            {year && <span>{year}</span>}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
