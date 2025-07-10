import type { CollectionConfig } from 'payload'

export const PostsCategories: CollectionConfig = {
  slug: 'posts-categories',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Post Category Title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      label: 'Post Category Description',
      type: 'richText',
      localized: true,
    },

  ],
}
