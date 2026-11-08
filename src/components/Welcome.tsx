import { Hero } from '@/components/sections/Hero/Hero'
import { BannerBreadrumb } from '@/components/sections/BannerBreadrumb/BannerBreadrumb'

export function Welcome(params: any) {
  const { welcome, layout, content, excerpt, ...rest } = params || {}
  const { style } = welcome || {}

  switch (style) {
    case 'hero':
      return <Hero welcome={welcome[style]} page={rest} />
    case 'bannerBreadcrumb':
      return <BannerBreadrumb welcome={welcome[style]} page={rest} />
    default:
      return null
  }
}
