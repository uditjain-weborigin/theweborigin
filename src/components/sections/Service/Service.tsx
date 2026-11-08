import { CardService } from '@/components/cards/CardService/CardService'
import { getCollection } from '@/helper/fetch'

export async function Service({ block }: any) {
  const { id, tag, title, subtitle, image } = block

  const services = await getCollection(
    {
      collection: 'services',
      limit: 4,
    },
    block.services,
  )

  if (!(tag || title || subtitle || image || services)) return null

  return (
    <section
      key={id}
      className="oit-service-area dg-service-style ba-service-style p-relative pt-120 pb-120"
      data-background="/assets/img/service/service-2-bg.jpg"
    >
      {image && (
        <div className="oit-project-shape d-none d-lg-block" data-speed-x=".5">
          <img src={image.url} alt={image.alt} />
        </div>
      )}
      {(tag || title || subtitle || services) && (
        <div className="container">
          {tag && (
            <div className="row">
              <div className="col-xl-2">
                <div className="oit-section-subtitle-box mb-50">
                  <span className="oit-section-subtitle oit-text-white">{tag}</span>
                </div>
              </div>
            </div>
          )}
          {(title || subtitle) && (
            <div className="row">
              <div className="offset-xl-1 col-xl-10">
                <div className="oit-section-title-box pl-70 mb-120">
                  <h3 className="oit-section-title oit-text-white oit-title-revel">
                    {title}
                    {subtitle && (
                      <>
                        <br />
                        <span className="pl-265">{subtitle}</span>
                      </>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          )}
          {services && (
            <div className="row justify-content-center">
              <div className="col-xxl-4">
                <div className="ba-service-tab-btn mb-30">
                  <ul className="nav nav-tab" id="serviceTabs" role="tablist">
                    {services?.map((item: any, i: number) => (
                      <li key={item.id} className="nav-item" role="presentation">
                        <button
                          className={`nav-links ${!i && 'active'}`}
                          id={`${item.slug}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.slug}`}
                          type="button"
                          role="tab"
                          aria-controls={item.slug}
                          aria-selected={!i && 'true'}
                        >
                          {item.title && <span>{item.title}</span>}
                          <i>
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                              <path
                                d="M23.2336 0.00011209L25.1724 1.95759L24.9546 2.17094C19.3429 7.92839 19.5512 15.764 23.2576 19.5062L21.2904 21.4522C18.2378 18.3697 17.1493 13.5835 18.244 8.81737L1.93405 24.9713L0 23.0162L16.3148 6.85515C11.5344 7.90814 6.75323 6.77706 3.69788 3.6922L5.66513 1.74378C9.41821 5.53311 17.4019 5.77565 23.2336 0.00011209Z"
                                fill="currentcolor"
                              />
                            </svg>
                          </i>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xxl-8">
                <div className="ba-service-tab-content-wrap mb-30">
                  <div className="tab-content" id="serviceTabContent">
                    {services?.map((item: any, i: number) => (
                      <div
                        key={item.id}
                        className={`tab-pane fade show ${!i && 'active'}`}
                        id={item.slug}
                        role="tabpanel"
                        aria-labelledby={`${item.slug}-tab`}
                        tabIndex={i}
                      >
                        <CardService {...item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
