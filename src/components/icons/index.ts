import { createElement } from 'react'
import { IconBehance } from './IconBehance'
import { IconCalendar } from './IconCalendar'
import { IconDribbble } from './IconDribbble'
import { IconInstagram } from './IconInstagram'
import { IconX } from './IconX'
import { IconCross } from './IconCross'
import { IconSparkle } from './IconSparkle'
import { IconArrowTopRight } from './IconArrowTopRight'
import { IconSearch } from './IconSearch'
import { IconLinkedIn } from './IconLinkedIn'
import { IconFacebook } from './IconFacebook'
import { IconEmail } from './IconEmail'
import { IconCopy } from './IconCopy'
import { IconSun } from './IconSun'

const icons = {
  behance: IconBehance,
  calendar: IconCalendar,
  dribbble: IconDribbble,
  instagram: IconInstagram,
  x: IconX,
  cross: IconCross,
  sparkle: IconSparkle,
  arrowTopRight: IconArrowTopRight,
  search: IconSearch,
  linkedin: IconLinkedIn,
  facebook: IconFacebook,
  email: IconEmail,
  copy: IconCopy,
  sun: IconSun,
}

export type IconKey = keyof typeof icons

type IconProps = {
  size: number
  iconKey: IconKey
}

export function Icon({ size, iconKey }: IconProps) {
  const IconComponent = icons[iconKey]

  if (IconComponent) {
    return createElement(IconComponent, { size })
  }

  return createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': true,
      focusable: false,
    },
    createElement('rect', {
      x: 1,
      y: 1,
      width: 18,
      height: 18,
      stroke: 'currentColor',
      strokeWidth: 2,
    }),
  )
}
