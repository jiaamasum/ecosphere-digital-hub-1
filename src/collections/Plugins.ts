import { CollectionConfig } from 'payload/types'
import { isAdmin, isAdminOrHasAccessToImages } from '../access/isAdmin'

export const Plugins: CollectionConfig = {
  slug: 'plugins',
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
        { label: 'WordPress', value: 'wordpress' },
        { label: 'Shopify', value: 'shopify' },
        { label: 'WooCommerce', value: 'woocommerce' },
        { label: 'Marketing', value: 'marketing' },
      ],
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      access: {
        create: () => false,
        read: () => true,
        update: () => true,
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
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        }
      ]
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