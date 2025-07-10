// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Contact from './collections/Contact'
import { NewsCategories } from './collections/NewsCategories'
import { News } from './collections/News'
import MainMenu from './global-configs/main-menu'
// import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      openGraph: {
        description: 'The best admin panel in the world',
        images: [
          {
            url: 'https://i.postimg.cc/0NV32J1w/favicon-32x32.png',
            width: 800,
            height: 600,
          },
        ],
        siteName: 'Payload',
        title: 'My Admin Panel',
      },
      titleSuffix: '- Wealth Farming',
      icons: [
        {
          url: 'https://i.postimg.cc/0NV32J1w/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
    },
    components: {
      graphics: {
        Icon: './graphics/Icon#Icon',
        Logo: './graphics/Logo#Logo', // Correct the path and use default export
      },
    },
  },
  cors: '*',
  localization: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    fallback: true,
  },
  collections: [Users, Media, Contact, NewsCategories, News],
  globals: [MainMenu],
  editor: lexicalEditor(),
  secret: process.env.NEXT_PUBLIC_PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.NEXT_PUBLIC_DATABASE_URI || '',
  }),
  sharp,
  // plugins: [
  //   s3Storage({
  //     collections:{
  //       media: true,
  //     },
  //     bucket: process.env.S3_BUCKET_NAME as string,
  //     config: {
  //       credentials: {
  //         accessKeyId: process.env.S3_ACCESS_KEY as string,
  //         secretAccessKey: process.env.S3_SECRET_KEY as string,
  //       },
  //       region: process.env.S3_REGION,
  //       endpoint: process.env.S3_ENDPOINT,
  //       forcePathStyle: true,
  //     }
  //   })
  // ],
})
