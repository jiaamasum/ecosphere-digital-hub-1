import { CollectionConfig } from 'payload/types'
import { isAdmin, isAdminOrHasAccessToImages } from '../access/isAdmin'

export const StockVideos: CollectionConfig = {
  slug: 'stock_videos',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true,
    update: isAdminOrHasAccessToImages,
    delete: isAdminOrHasAccessToImages,
    create: () => true,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: {
        condition: () => false
      }
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      max: 1000,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Nature', value: 'nature' },
        { label: 'Business', value: 'business' },
        { label: 'Technology', value: 'technology' },
        { label: 'People', value: 'people' },
      ],
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      access: {
        create: isAdmin,
        read: isAdmin,
        update: isAdmin,
      },
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Denied',
          value: 'denied',
        },
      ],
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'previewUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      type: 'number',
      required: true,
    },
    {
      name: 'resolution',
      type: 'select',
      options: [
        { label: '4K', value: '4k' },
        { label: '2K', value: '2k' },
        { label: '1080p', value: '1080p' },
        { label: '720p', value: '720p' },
      ],
      required: true,
    },
    {
      name: 'files',
      type: 'relationship',
      relationTo: 'product_files',
      required: true,
      hasMany: false,
    }
  ],
}