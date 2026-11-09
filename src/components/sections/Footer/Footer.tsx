import Link from 'next/link'
import { getTheme, getSite, getMenu } from '@/helper/fetch'
import defaultFooterLogo from '@/assets/img/TWO-logo.svg'
import { Icon } from '@/components/icons'
import { renderLink } from '@/helper/renderLink'

export async function Footer() {
  const currentYear = new Date().getFullYear()
  const siteTitle = await getSite('title')

  const footerLogo = await getTheme('footerLogo')
  const footerTitle = await getTheme('footerTitle')
  const footerDescription = await getTheme('footerDescription')
  const footerShape = await getTheme('footerShape')
  const socials = await getTheme('socials')

  const footerMenu = await getMenu('footerMenu')
  const copyrightMenu = await getMenu('copyrightMenu')

  const footerLogoUrl = footerLogo?.url || defaultFooterLogo.src || ''
  const footerLogoAlt = footerLogo?.alt || siteTitle || 'Footer Logo'

  return (
    <footer data-bg-color="#101216" style={{ overflow: 'hidden' }}>
      <div className="oit-footer-2-area z-index-1 pt-130 pb-30 p-relative">
        {footerShape && (
          <img className="oit-footer-2-shape" src={footerShape.url} alt={footerShape.alt} />
        )}
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-4">
              <div className="oit-footer-2-widget footer-widget-2-1 pb-195">
                <div className="oit-footer-2-widget-logo">
                  <Link href="/">
                    <img src={footerLogoUrl} alt={footerLogoAlt} className="w-100" />
                  </Link>
                </div>
              </div>
            </div>
            {(footerTitle || footerDescription) && (
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="oit-footer-2-widget footer-widget-2-2 mb-60">
                  {footerTitle && <h4 className="oit-footer-2-widget-title">{footerTitle}</h4>}
                  {footerDescription && <p>{footerDescription}</p>}
                </div>
              </div>
            )}
            {socials && (
              <div className="col-xl-7 col-md-4">
                <div className="oit-footer-2-widget footer-widget-2-3 mb-60">
                  <h4 className="oit-footer-2-widget-title">Social Media</h4>
                  <div className="oit-footer-2-widget-social">
                    {socials?.map((item: any) => (
                      <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
                        <Icon size={20} iconKey={item.key} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {footerMenu?.items && (
              <div className="col-xl-5 col-md-8">
                <div className="oit-footer-2-widget footer-widget-2-4 mb-60">
                  {footerMenu?.title && (
                    <h4 className="oit-footer-2-widget-title">{footerMenu.title}</h4>
                  )}
                  <div className="oit-footer-2-widget-menu">
                    <ul>
                      {footerMenu.items.map((item: any) => {
                        const link = renderLink(item)
                        if (!link) return null

                        return (
                          <li key={item.id} className={link.class}>
                            <link.comp href={link.href} target={link.target} rel={link.rel}>
                              {link.label}
                            </link.comp>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="oit-copyright-area oit-copyright-2-style">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="oit-copyright-left text-center text-md-start">
                <p>© {currentYear} Reak. All Rights Reserved.</p>
              </div>
            </div>
            {copyrightMenu?.items && (
              <div className="col-md-6">
                <div className="oit-copyright-right text-center text-md-end">
                  {copyrightMenu.items.map((item: any, i: number) => {
                    const link = renderLink(item)

                    if (!link) return null
                    return (
                      <span key={item.id} className={link.class}>
                        {!!i && <span> / </span>}
                        <a href={link.href} target={link.target} rel={link.rel}>
                          {link.label}
                        </a>
                      </span>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
