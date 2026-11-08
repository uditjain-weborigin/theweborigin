import { Icon } from '@/components/icons'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { getCollection } from '@/helper/fetch'
import { renderLink } from '@/helper/renderLink'
import { renderTextArea } from '@/helper/renderTextArea'
import { RichText } from '@payloadcms/richtext-lexical/react'

export async function FaqArea({ block }: any) {
  let { tag, title, image, subtitle, link, faqs } = block || {}

  link = renderLink(link)
  faqs = await getCollection({ collection: 'faqs', limit: 5 }, faqs)

  if (!(tag || title || image || subtitle || link || faqs)) return null

  return (
    <section className="oit-faq-area oit-faq-style pt-120 pb-100">
      <div className="container">
        <div className="row">
          {(tag || title || image || subtitle || link) && (
            <div className="col-xl-4">
              {tag && (
                <div className="oit-section-subtitle-box mb-30 text-center text-md-start">
                  <span className="oit-section-subtitle">{tag}</span>
                </div>
              )}
              {title && (
                <div className="oit-section-title-box mb-70 text-center text-md-start">
                  <h3 className="oit-section-title fsz-60 oit-title-revel">
                    {renderTextArea(title)}
                  </h3>
                </div>
              )}
              {(image || subtitle || link) && (
                <div className="oit-price-item mb-30">
                  {image && (
                    <div className="oit-price-avater-box mb-30">
                      <img src={image.url} alt={image.alt} />
                    </div>
                  )}
                  {(subtitle || link) && (
                    <div className="oit-price-head-content">
                      {subtitle && <h4 className="oit-price-title mb-5">{subtitle}</h4>}
                      {link && (
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
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          {faqs && (
            <div className="offset-xl-1 col-xl-7">
              <div className="oit-faq-accordion-wrap mb-30">
                <div className="accordions" id="faqAccordion">
                  {faqs.map((item: any, i: number) => (
                    <div
                      key={item.id}
                      className="accordion-item fade-anim"
                      data-delay={0.3 + i * 0.2}
                    >
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faqCollapse-${i}`}
                          aria-expanded={!i}
                          aria-controls={`faqCollapse-${i}`}
                        >
                          {item.title}
                          <span className="accordion-icon">
                            <Icon size={19} iconKey={'cross'} />
                          </span>
                        </button>
                      </h4>
                      <div
                        id={`faqCollapse-${i}`}
                        className={`accordion-collapse collapse ${!i && 'show'}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <RichText data={item.excerpt} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
