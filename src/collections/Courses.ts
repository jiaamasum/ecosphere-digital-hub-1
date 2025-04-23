import { CollectionConfig } from 'payload/types'
import { isAdmin, isAdminOrHasAccessToImages } from '../access/isAdmin'

export const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true,
    update: isAdminOrHasAccessToImages,
    delete: isAdminOrHasAccessToImages,
    create: isAdmin,
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
        { label: 'Development', value: 'development' },
        { label: 'Business', value: 'business' },
        { label: 'Design', value: 'design' },
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
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'modules',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'videoUrl',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}