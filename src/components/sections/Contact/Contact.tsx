import { renderTextArea } from '@/helper/renderTextArea'
import { getForm, getTheme } from '@/helper/fetch'
import { PartForm } from '@/components/parts/PartForm/PartForm'
import { Icon } from '@/components/icons'

export async function Contact({ block }: any) {
  const { shape, title, form: selectedForm } = block || {}

  let form = typeof selectedForm === 'object' && selectedForm ? selectedForm : undefined

  if (typeof selectedForm === 'string') {
    form = await getForm(selectedForm)
  }

  const name1 = await getTheme('locationName1')
  const address1 = await getTheme('address1')
  const routeURL1 = await getTheme('routeURL1')

  const name2 = await getTheme('locationName2')
  const address2 = await getTheme('address2')
  const routeURL2 = await getTheme('routeURL2')

  const socials = await getTheme('socials')

  const hasContactInfo = [
    title,
    name1,
    address1,
    routeURL1,
    name2,
    address2,
    routeURL2,
    socials,
  ].some(Boolean)

  if (!(title || form || hasContactInfo)) return null

  return (
    <section
      className="dg-contact-area faq-style fix z-index-1 p-relative pt-150 pb-150"
      data-bg-color="#101216"
    >
      {shape && (
        <div className="dg-contact-shape-1">
          <img data-speed=".5" src={shape.url} alt={shape.alt} />
        </div>
      )}
      {(hasContactInfo || form) && (
        <div className="container">
          <div className="row">
            {hasContactInfo && (
              <div className="col-xl-6">
                <div className="dg-contact-left pt-130">
                  {title && (
                    <h3 className="oit-section-title fsz-60 mb-40 text-white oit-title-revel">
                      {renderTextArea(title)}
                    </h3>
                  )}
                  {(name1 || address1 || routeURL1 || name2 || address2 || routeURL2) && (
                    <div className="dg-contact-info-wrap d-flex mb-60">
                      {(name1 || address1 || routeURL1) && (
                        <div className="dg-contact-info mr-55">
                          {name1 && <span>{name1}</span>}
                          {routeURL1 ? (
                            <a href={routeURL1} target="_blank" rel="noreferrer">
                              {renderTextArea(address1)}
                            </a>
                          ) : (
                            <span>{renderTextArea(address1)}</span>
                          )}
                        </div>
                      )}
                      {(name2 || address2 || routeURL2) && (
                        <div className="dg-contact-info">
                          {name2 && <span>{name2}</span>}
                          {routeURL2 ? (
                            <a href={routeURL2} target="_blank" rel="noreferrer">
                              {renderTextArea(address2)}
                            </a>
                          ) : (
                            <span>{renderTextArea(address2)}</span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  {socials && (
                    <div className="dg-contact-social">
                      {socials.map((item: any) => (
                        <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.title}
                          <Icon iconKey="arrowTopRight" size={10} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            {form && (
              <div className="col-xl-6">
                <div className="dg-contact-form-box">
                  <PartForm form={form} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
