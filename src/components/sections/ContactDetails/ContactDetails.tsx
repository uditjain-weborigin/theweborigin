import { getTheme } from '@/helper/fetch'
import { formatPhone } from '@/helper/formatPhone'
import { renderTextArea } from '@/helper/renderTextArea'
import Image from '@/utils/Image'

export async function ContactDetails({ block }: any) {
  const { title, image } = block || {}

  const name1 = await getTheme('locationName1')
  const address1 = await getTheme('address1')
  const routeURL1 = await getTheme('routeURL1')
  const phone1 = await getTheme('phone1')
  const email1 = await getTheme('email1')

  const name2 = await getTheme('locationName2')
  const address2 = await getTheme('address2')
  const routeURL2 = await getTheme('routeURL2')
  const phone2 = await getTheme('phone2')
  const email2 = await getTheme('email2')

  return (
    <div className="contact-details-area pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact-details-wrapper">
              {title && (
                <h2 className="contact-details-big-title mb-90">{renderTextArea(title)}</h2>
              )}
              {image && (
                <div className="contact-details-thumb pb-120">
                  <Image src={image.url} alt={image.alt} width={1253} height={483} />
                </div>
              )}
              {(name1 || address1 || routeURL1 || phone1 || email1) && (
                <div className="contact-details-info-wrap">
                  <div className="row align-items-center">
                    <div className="col-12 pl-40 pr-40">
                      <div className="row">
                        {(name1 || address1 || routeURL1) && (
                          <div className="col-12">
                            <div className="contact-details-info-top-box d-flex align-items-center justify-content-between">
                              <div className="contact-details-info-top">
                                {name1 && <span>{name1}</span>}
                                {address1 && (
                                  <div className="subtitle">{renderTextArea(address1)}</div>
                                )}
                              </div>
                              {routeURL1 && (
                                <div className="contact-btn">
                                  <a
                                    className="oit-btn-border btn-black-bg d-inline-flex align-items-center justify-content-between"
                                    target="_blank"
                                    href={routeURL1}
                                  >
                                    <span>
                                      <span className="text-1">Map Location</span>
                                      <span className="text-2">Map Location</span>
                                    </span>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        {(phone1 || email1) && (
                          <div className="col-12">
                            <div className="contact-details-info-bottom">
                              <span>Contact us</span>
                              {phone1 && <a href={`tel:${formatPhone(phone1)}`}>{phone1}</a>}
                              {email1 && <a href={`mailto:${email1}`}>{email1}</a>}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(name2 || address2 || routeURL2 || phone2 || email2) && (
                <div className="contact-details-info-wrap">
                  <div className="row align-items-center">
                    <div className="col-12 pl-40 pr-40">
                      <div className="row">
                        {(name2 || address2 || routeURL2) && (
                          <div className="col-12">
                            <div className="contact-details-info-top-box d-flex align-items-center justify-content-between">
                              <div className="contact-details-info-top">
                                {name2 && <span>{name2}</span>}
                                {address2 && (
                                  <div className="subtitle">{renderTextArea(address2)}</div>
                                )}
                              </div>
                              {routeURL2 && (
                                <div className="contact-btn">
                                  <a
                                    className="oit-btn-border btn-black-bg d-inline-flex align-items-center justify-content-between"
                                    target="_blank"
                                    href={routeURL2}
                                  >
                                    <span>
                                      <span className="text-1">Map Location</span>
                                      <span className="text-2">Map Location</span>
                                    </span>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        {(phone2 || email2) && (
                          <div className="col-12">
                            <div className="contact-details-info-bottom">
                              <span>Contact us</span>
                              {phone2 && <a href={`tel:${formatPhone(phone2)}`}>{phone2}</a>}
                              {email2 && <a href={`mailto:${email2}`}>{email2}</a>}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
