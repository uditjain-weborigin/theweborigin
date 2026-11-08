import type { GlobalConfig } from 'payload'
import { menuItems } from '@/config/fields/menuItems'

export const Menus: GlobalConfig = {
  slug: 'menus',
  label: 'Menus',
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
          label: 'Header Menu',
          fields: [
            {
              name: 'headerMenu',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  defaultValue: 'Header Menu',
                },
                menuItems('items', menuItems('children')),
              ],
            },
          ],
        },
        {
          label: 'Footer Menu',
          fields: [
            {
              name: 'footerMenu',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  defaultValue: 'Footer Menu',
                },
                menuItems(),
              ],
            },
          ],
        },
        {
          label: 'Copyright Menu',
          fields: [
            {
              name: 'copyrightMenu',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  defaultValue: 'Copyright Menu',
                },
                menuItems(),
              ],
            },
          ],
        },
      ],
    },
  ],
}
