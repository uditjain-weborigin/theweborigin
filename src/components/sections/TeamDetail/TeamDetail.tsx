import { Icon } from '@/components/icons'
import { PartLocation } from '@/components/parts/PartLocation/PartLocation'
import { PartMessage } from '@/components/parts/PartMessage/PartMessage'
import { PartPhone } from '@/components/parts/PartPhone/PartPhone'
import { formatPhone } from '@/helper/formatPhone'
import { renderLink } from '@/helper/renderLink'
import Image from '@/utils/Image'
import { RichText } from '@payloadcms/richtext-lexical/react'

export function TeamDetail({ page }: any) {
  const { thumbnail, title, content, options } = page || {}
  let { role, phone, email, address } = options || {}
  let { facebook, twitter, instagram, dribble, behance } = options || {}
  const socials = facebook || twitter || instagram || dribble || behance
  address = renderLink(address)

  if (!(thumbnail || title || content || role || phone || email || address || socials)) return null

  return (
    <section className="team-details-area mt-65 pt-150 pb-145">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10 col-xl-12">
            <div className="profile-card" data-bg-color="#101216">
              <div className="row align-items-center">
                {thumbnail && (
                  <div className="col-xl-6 col-lg-12">
                    <div className="profile-thumb">
                      <Image src={thumbnail.url} alt={thumbnail.alt} width={580} height={706} />
                    </div>
                  </div>
                )}
                {(title || role || phone || email || address || socials) && (
                  <div className="col-xl-6 col-lg-12">
                    <div className="profile-content">
                      {title && <h2 className="title">{title}</h2>}
                      {role && <span>{role}</span>}
                      <RichText data={content} />
                      {(phone || email || address || socials) && (
                        <div className="contact-info-wrap">
                          <div className="row">
                            {phone && (
                              <div className="col-md-6">
                                <div className="contact-info">
                                  <a href={`tel:${formatPhone(phone)}`}>
                                    <PartPhone />
                                    {phone}
                                  </a>
                                  <span>Phone Number</span>
                                </div>
                              </div>
                            )}
                            {email && (
                              <div className="col-md-6">
                                <div className="contact-info">
                                  <a href={`mailto:${email}`}>
                                    <PartMessage />
                                    {email}
                                  </a>
                                  <span>Email Address</span>
                                </div>
                              </div>
                            )}
                            {address && (
                              <div className="col-md-6">
                                <div className="contact-info">
                                  <PartLocation />
                                  <address.comp
                                    className={address.class}
                                    href={address.href}
                                    target={address.target}
                                    rel={address.rel}
                                  >
                                    {address.label}
                                  </address.comp>
                                </div>
                              </div>
                            )}
                            {socials && (
                              <div className="col-md-6">
                                <div className="contact-social">
                                  {facebook && (
                                    <a href={facebook} target="_blank" rel="noopener noreferrer">
                                      <Icon iconKey="facebook" size={16} />
                                    </a>
                                  )}
                                  {twitter && (
                                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                                      <Icon iconKey="x" size={16} />
                                    </a>
                                  )}
                                  {instagram && (
                                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                                      <Icon iconKey="instagram" size={16} />
                                    </a>
                                  )}
                                  {dribble && (
                                    <a href={dribble} target="_blank" rel="noopener noreferrer">
                                      <Icon iconKey="dribbble" size={16} />
                                    </a>
                                  )}
                                  {behance && (
                                    <a href={behance} target="_blank" rel="noopener noreferrer">
                                      <Icon iconKey="behance" size={16} />
                                    </a>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
