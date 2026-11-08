import { getTheme, getSite, getMenu } from '@/helper/fetch'
import defaultHeaderLogo from '@/assets/img/theweborigin-logo-white.svg'
import defaultHeaderLogoAlter from '@/assets/img/TWO-logo.svg'
import { renderLink } from '@/helper/renderLink'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'

export async function Header() {
  const headerMenu = await getMenu('headerMenu')

  const siteTitle = await getSite('title')
  const headerButton = renderLink(await getTheme('headerButton'))
  const headerLogo = await getTheme('headerLogo')
  const headerLogoAlter = await getTheme('headerLogoAlt')

  const headerLogoUrl = headerLogo?.url || defaultHeaderLogo?.src || null
  const headerLogoAlt = headerLogo?.alt || siteTitle || 'The Web Origin Logo'

  const headerLogoAlterUrl = headerLogoAlter?.url || defaultHeaderLogoAlter?.src || null
  const headerLogoAlterAlt = headerLogoAlter?.alt || siteTitle || 'TWO Logo'

  return (
    <header className="header">
      <div className="oit-header-area oit-header-transparent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-4">
              <div className="oit-header-logo">
                <a href="/">
                  <img
                    className="d-md-block d-none"
                    data-width="300"
                    src={headerLogoUrl}
                    alt={headerLogoAlt}
                  />
                  <img
                    className="d-md-none d-block"
                    data-width="100"
                    src={headerLogoAlterUrl}
                    alt={headerLogoAlterAlt}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-8">
              <div className="oit-header-wrap d-flex justify-content-end align-items-center">
                {headerMenu?.items && (
                  <div className="oit-header-menu oit-header-menu-2 d-none d-xl-block">
                    <nav className="oit-menu-content">
                      <ul>
                        {headerMenu?.items.map((item: any) => {
                          const link = renderLink(item)
                          if (!link) return null

                          const clss = `${link.class ?? ''} ${link.children ? 'has-dropdown' : ''}`

                          return (
                            <li key={item.id} className={clss}>
                              <link.comp href={link.href} target={link.target} rel={link.rel}>
                                {link.label}
                              </link.comp>

                              {link.children && (
                                <ul className="oit-submenu submenu index-submenu">
                                  {link.children.map((child: any) => {
                                    const childLink = renderLink(child)
                                    if (!childLink) return null

                                    return (
                                      <li key={child.id}>
                                        <childLink.comp
                                          href={childLink.href}
                                          target={childLink.target}
                                          rel={childLink.rel}
                                        >
                                          {childLink.label}
                                        </childLink.comp>
                                      </li>
                                    )
                                  })}
                                </ul>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </nav>
                  </div>
                )}
                <div className="oit-header-action ml-30">
                  {headerButton && (
                    <a
                      className="oit-btn-border btn-blur-bg d-inline-flex align-items-center justify-content-between d-none d-sm-inline-flex"
                      href={headerButton.href}
                      target={headerButton.target}
                      rel={headerButton.rel}
                    >
                      {headerButton.label && (
                        <span>
                          <span className="text-1">{headerButton.label}</span>
                          <span className="text-2">{headerButton.label}</span>
                        </span>
                      )}
                      <PartBtnArrow />
                    </a>
                  )}
                  <button className="oit-header-bar oit-menu-bar ml-20 d-xl-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
