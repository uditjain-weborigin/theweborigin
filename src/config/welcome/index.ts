import type { Field } from 'payload'
import { Hero } from './Hero'
import { BannerBreadrumb } from './BannerBreadrumb'

export const Welcome: Field = {
  type: 'collapsible',
  label: 'Welcome',
  admin: {
    components: {
      Label: '@/config/custom/CustomWelcomeLabel#CustomWelcomeLabel',
    },
  },
  fields: [
    {
      name: 'welcome',
      type: 'group',
      label: false,
      fields: [
        {
          name: 'style',
          type: 'select',
          options: [
            { label: 'Hero', value: 'hero' },
            { label: 'Banner Breadcrumb', value: 'bannerBreadcrumb' },
          ],
        },
        Hero,
        BannerBreadrumb,
      ],
    },
  ],
}
