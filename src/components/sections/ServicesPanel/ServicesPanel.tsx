import { CardServicePanel } from '@/components/cards/CardServicePanel/CardServicePanel'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { getCollection } from '@/helper/fetch'
import { renderLink } from '@/helper/renderLink'

export async function ServicesPanel({ block, page, collection }: any) {
  let { tag, title, subtitle, shape, link, services } = block || {}

  services = await getCollection({ collection: 'services', limit: 4 }, services)

  // ═══════════════════════ ARCHIVE PAGE OVERRIDE ═══════════════════════
  if (collection) {
    ;({ tag, title, subtitle, shape, link } = page?.options?.servicePanel || {})
    link = renderLink(link)
    services = collection
  }
  // ═════════════════════════════════════════════════════════════════════

  if (!(tag || title || subtitle || shape || services || link)) return null

  return (
    <div
      className="oit-service-area p-relative mt-65 pt-120 pb-120 oit-panel-pin-area"
      data-background="assets/img/shape/service-bg.jpg"
      data-bg-color="#000"
    >
      {shape && (
        <div className="oit-project-shape d-none d-xl-block">
          <img data-speed=".8" src={shape.url} alt={shape.alt} />
        </div>
      )}
      <div className="container">
        {tag && (
          <div className="row">
            <div className="col-xl-2">
              <div className="oit-section-subtitle-box mb-50 text-center text-xl-start">
                <span className="oit-section-subtitle oit-text-white">{tag}</span>
              </div>
            </div>
          </div>
        )}
        {(title || subtitle) && (
          <div className="row">
            <div className="offset-xl-1 col-xl-10">
              <div className="oit-section-title-box pl-70 mb-120 text-center text-xl-start">
                <h2 className="oit-section-title oit-text-white oit-title-revel">
                  {title}
                  {subtitle && (
                    <>
                      <br />
                      <span className="pl-265">{subtitle}</span>
                    </>
                  )}
                </h2>
              </div>
            </div>
          </div>
        )}
        {services && (
          <div className="row justify-content-center">
            {services.map((item: any, i: number) => (
              <div key={item.id} className="col-xxl-10">
                <CardServicePanel {...item} i={i} />
              </div>
            ))}
          </div>
        )}
        {link && (
          <div className="row">
            <div className="col-12">
              <div className="service-btn text-center mt-35">
                <link.comp
                  className={`oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between mt-35 ${link.class}`}
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
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
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
