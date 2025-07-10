import type { CollectionConfig } from 'payload'

export const NewsCategories: CollectionConfig = {
  slug: 'news-categories',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'New Category Title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      label: 'New Category Description',
      type: 'richText',
      localized: true,
    },

  ],
}
