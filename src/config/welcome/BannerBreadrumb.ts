import type { Field } from 'payload'

export const BannerBreadrumb: Field = {
  name: 'bannerBreadcrumb',
  type: 'group',
  admin: {
    condition: (_, siblingData) => siblingData?.style === 'bannerBreadcrumb',
    hideGutter: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'shape',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
