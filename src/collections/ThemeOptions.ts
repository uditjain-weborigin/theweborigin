import type { GlobalConfig } from 'payload'
import { SocialLinks } from '@/config/fields/SocialLinks'
import { buttonField } from '@/config/fields/buttonField'

export const ThemeOptions: GlobalConfig = {
  slug: 'theme-options',
  label: 'Theme Options',
  admin: {
    group: 'Globals',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Branding',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'headerLogo',
                  label: 'Header Logo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'headerLogoAlt',
                  label: 'Header Logo Alt',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            buttonField('headerButton', 'Header Button'),
            {
              type: 'row',
              fields: [
                {
                  name: 'footerLogo',
                  label: 'Footer Logo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'footerShape',
                  label: 'Footer Shape',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            {
              name: 'footerTitle',
              type: 'text',
            },
            {
              name: 'footerDescription',
              type: 'textarea',
            },
            {
              name: 'errorTitle',
              type: 'text',
            },
          ],
        },
        {
          label: 'Contact Information',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'locationName1',
                  label: 'Location Name 1',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'locationName2',
                  label: 'Location Name 2',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'address1',
                  label: 'Address 1',
                  type: 'textarea',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'address2',
                  label: 'Address 2',
                  type: 'textarea',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'routeURL1',
                  label: 'Route URL 1',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'routeURL2',
                  label: 'Route URL 2',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'phone1',
                  label: 'Phone 1',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'phone2',
                  label: 'Phone 2',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'email1',
                  label: 'Email 1',
                  type: 'email',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'email2',
                  label: 'Email 2',
                  type: 'email',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'email',
              type: 'email',
            },
            SocialLinks,
          ],
        },
        {
          label: 'Technical',
          fields: [
            {
              name: 'googleApi',
              label: 'Google API Key',
              type: 'text',
            },
            {
              name: 'googleMapRouteUrl',
              label: 'Google Map Route URL',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
