import { CollectionConfig } from 'payload/types'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'id',
    description: 'A summary of all orders',
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name: '_isPaid',
      type: 'checkbox',
      required: true,
      defaultValue: false,
      admin: {
        description: 'Check if the order is paid',
      },
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
    },
    {
      name: 'paymentMethod',
      type: 'select',
      required: true,
      options: [
        { label: 'bKash', value: 'bkash' },
        { label: 'Rocket', value: 'rocket' },
        { label: 'Nagad', value: 'nagad' },
      ],
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'transactionId',
      type: 'text',
      required: true,
    },
  ],
}