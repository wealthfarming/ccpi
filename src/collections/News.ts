import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'New Title',
      localized: true,
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      localized: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'news-categories',
      required: true,
      label: 'Post Category',
    },
    {
      name: 'description',
      label: 'New Description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'image',
      label: 'Category Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        const slugify = (str: string) =>
          str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '')

        if (!data) return data

        if (typeof data.title === 'object') {
          data.slug = {}
          for (const locale in data.title) {
            const titleValue = data.title[locale]
            data.slug[locale] = titleValue ? slugify(titleValue) : ''
          }
        } else if (typeof data.title === 'string') {
          data.slug = slugify(data.title)
        }

        return data
      },
    ],
    // afterChange: [
    //   async () => {
    //     try {
    //       const response = await fetch(
    //         'https://api.github.com/repos/wealthfarming/landing-page/actions/workflows/deploy.yml/dispatches',
    //         {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/vnd.github.v3+json',
    //             Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //           },
    //           body: JSON.stringify({ ref: 'main' }),
    //         },
    //       )

    //       if (!response.ok) {
    //         console.error(`Call Github API fail: ${response.status} ${response.statusText}`)
    //         return
    //       }

    //       console.log(`API Github call successful: ${response.status}`)
    //     } catch (error) {
    //       console.error('error when calling API Github:', error)
    //     }
    //   },
    // ],
  },
}
