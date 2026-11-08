'use client'

import { Icon } from '@/components/icons'
import { shareU } from '@/helper/shareU'

export function PartShare() {
  return (
    <div className="postbox-share-content">
      {shareU.map(({ name, iconKey, getHref }) => (
        <a
          key={name}
          href="#"
          aria-label={`Share on ${name}`}
          title={`Share on ${name}`}
          onClick={(event) => {
            event.preventDefault()
            window.open(getHref(window.location.href), '_blank', 'noopener,noreferrer')
          }}
        >
          <Icon iconKey={iconKey} size={20} />
        </a>
      ))}
    </div>
  )
}
