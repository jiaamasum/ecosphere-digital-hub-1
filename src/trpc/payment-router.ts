import { z } from 'zod'
import { privateProcedure, router } from './trpc'
import { TRPCError } from '@trpc/server'
import { getPayloadClient } from '../get-payload'

export const paymentRouter = router({
  createPayment: privateProcedure
    .input(
      z.object({
        paymentMethod: z.enum(['bkash', 'rocket', 'nagad']),
        phoneNumber: z.string(),
        transactionId: z.string(),
        items: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx
      const { paymentMethod, phoneNumber, transactionId, items } = input

      const payload = await getPayloadClient()

      const order = await payload.create({
        collection: 'orders',
        data: {
          _isPaid: false,
          products: JSON.parse(items),
          user: user.id,
          paymentMethod,
          phoneNumber,
          transactionId,
        },
      })

      return { orderId: order.id }
    }),
})