import { renderTextArea } from '@/helper/renderTextArea'
import { getForm, getTheme } from '@/helper/fetch'
import { formatPhone } from '@/helper/formatPhone'
import { renderLink } from '@/helper/renderLink'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { PartForm } from '@/components/parts/PartForm/PartForm'
import contactImage1 from '@/assets/img/shape/contact-1-1.png'
import contactImage2 from '@/assets/img/shape/contact-1-2.png'

export async function Connect({ block }: any) {
  const { title, image, subtitle, link: _link, form: selectedForm } = block || {}

  let form = typeof selectedForm === 'object' && selectedForm ? selectedForm : undefined

  if (typeof selectedForm === 'string') {
    form = await getForm(selectedForm)
  }

  const phone = await getTheme('phone')
  const email = await getTheme('email')
  const link = renderLink(_link)

  if (!(title || image || subtitle || link || form)) return null

  return (
    <section
      className="dg-contact-area contact-style z-index-1 p-relative mt-65 pt-150 pb-150"
      data-bg-color="#101216"
    >
      <div className="container">
        <div className="row">
          {(title || phone || email || link) && (
            <div className="col-xl-5">
              <div className="dg-contact-left oit-section-title-box pt-130">
                {title && (
                  <h2 className="oit-section-title oit-title-revel text-white fsz-60 mb-50">
                    {title}
                  </h2>
                )}
                {(phone || email) && (
                  <div className="dg-contact-info-wrap mb-60">
                    {phone && (
                      <div className="dg-contact-info mb-10">
                        <a
                          className="border-line d-inline-block"
                          href={`tel:${formatPhone(phone)}`}
                        >
                          {phone}
                        </a>
                      </div>
                    )}
                    {email && (
                      <div className="dg-contact-info mb-30">
                        <a className="border-line d-inline-block" href={`mailto:${email}`}>
                          {email}
                        </a>
                      </div>
                    )}
                  </div>
                )}
                {(image || subtitle || link) && (
                  <div className="oit-price-item p-relative">
                    {contactImage1 && (
                      <img className="shape-1" src={contactImage1.src} alt="contact-image-1" />
                    )}
                    {contactImage2 && (
                      <img className="shape-2" src={contactImage2.src} alt="contact-image-2" />
                    )}
                    {image && (
                      <div className="oit-price-avater-box mb-20">
                        <img src={image.url} alt={image.alt} />
                      </div>
                    )}
                    {(subtitle || link) && (
                      <div className="oit-price-head-content">
                        {subtitle && (
                          <h3 className="oit-price-title mb-20">{renderTextArea(subtitle)}</h3>
                        )}
                        {link && (
                          <link.comp
                            className={`oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between ${link.class}`}
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
            </div>
          )}
          {form && (
            <div className="col-xl-7">
              <div className="dg-contact-form-box">
                <PartForm form={form} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
