import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { PartShine } from '@/components/parts/PartShine/PartShine'
import { renderLink } from '@/helper/renderLink'

export function CardSolutions(data: any) {
  const { title, usps, image, subtitle } = data
  const link = renderLink(data.link)

  if (!(title || usps || link || image || subtitle)) return null

  return (
    <div className="oit-bin-to-card-item card-2 item-style-3 black-bg mb-30">
      {title && <h4 className="oit-bin-to-card-big-title mb-25">{title}</h4>}
      {usps && (
        <div className="oit-bin-to-card-list mb-40">
          <ul>
            {usps?.map((item: any) => {
              if (!item.usp) return null
              return (
                <li key={item.id}>
                  <span>
                    <PartShine />
                    {item.usp}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {link && (
        <link.comp
          className={`oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between mb-200 ${link.class}`}
          href={link.href}
          rel={link.rel}
          target={link.target}
        >
          <span>
            <span className="text-1">{link.label}</span>
            <span className="text-2">{link.label}</span>
          </span>
          <PartBtnArrow />
        </link.comp>
      )}
      {subtitle && <p className="mb-0 mt-15">{subtitle}</p>}
      {image && (
        <div className="oit-bin-to-card-shape-2">
          <img src={image.url} alt={image.alt} />
        </div>
      )}
    </div>
  )
}
