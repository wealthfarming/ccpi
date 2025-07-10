import type { GlobalConfig } from 'payload'

const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'menu_items',
      type: 'array',
      label: 'Menu Items',
      minRows: 1,
      maxRows: 8,
      admin: {},
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'url',
          type: 'text',
        },
        {
          name: 'children',
          type: 'array',
          label: 'Submenu Items',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'url',
              type: 'text',
            },
            {
              name: 'open_in_new_tab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
            {
              name: 'children',
              type: 'array',
              label: 'Submenu Items',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                },
                {
                  name: 'url',
                  type: 'text',
                },
                {
                  name: 'open_in_new_tab',
                  type: 'checkbox',
                  label: 'Open in New Tab',
                  defaultValue: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default MainMenu