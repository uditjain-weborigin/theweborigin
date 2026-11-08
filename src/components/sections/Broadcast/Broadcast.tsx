import { Icon } from '@/components/icons'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { renderLink } from '@/helper/renderLink'

export function Broadcast({ block }: any) {
  let { title, link } = block || {}
  link = renderLink(link)

  if (!(title || link)) return null

  return (
    <div className="oit-text-slider-area pt-135 pb-135 fix p-relative" data-bg-color="#101216">
      <div
        className="oit-text-slider-btn fade-anim"
        data-delay=".7"
        data-ease="bounce"
        data-fade-from="top"
      >
        {link && (
          <a
            className={`oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between ${link.class}`}
            href={link.href}
            target={link.target}
            rel={link.rel}
          >
            {link.label && (
              <span>
                <span className="text-1">{link.label}</span>
                <span className="text-2">{link.label}</span>
              </span>
            )}
            <PartBtnArrow />
          </a>
        )}
      </div>
      <div className="oit-text-slider-wrap">
        <div className="oit-text-slider-item d-flex align-items-center mb-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              <span>Let’s Contact</span>
              <span>
                <Icon iconKey="sparkle" size={80} />
              </span>
            </span>
          ))}
        </div>
        <div className="oit-text-slider-item d-flex align-items-center slide-ltr">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              <span>
                <Icon iconKey="sparkle" size={80} />
              </span>
              <span>Let’s Contact</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
