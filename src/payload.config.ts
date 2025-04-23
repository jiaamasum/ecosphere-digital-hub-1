import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { Users } from './collections/Users'
import dotenv from 'dotenv'
import { Products } from './collections/Products/Products'
import { Media } from './collections/Media'
import { ProductFiles } from './collections/ProductFile'
import { Orders } from './collections/Orders'
import { Courses } from './collections/Courses'
import { Themes } from './collections/Themes'
import { Plugins } from './collections/Plugins'
import { StockVideos } from './collections/StockVideos'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || ''
const mongoURL = process.env.MONGODB_URL

if (!mongoURL) {
  throw new Error('MONGODB_URL environment variable is required')
}

export default buildConfig({
  serverURL,
  collections: [
    Users,
    Products,
    Media,
    ProductFiles,
    Orders,
    Courses,
    Themes,
    Plugins,
    StockVideos,
  ],
  routes: {
    admin: '/sell',
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Ecosphere',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: mongoURL,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})