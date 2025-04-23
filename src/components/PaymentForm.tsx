'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { toast } from 'sonner'
import { trpc } from '@/trpc/client'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { User } from '@/payload-types'

interface PaymentFormProps {
  items: string
  user: User
}

const PaymentForm = ({ items, user }: PaymentFormProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('bkash')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [screenshot, setScreenshot] = useState<File | null>(null)

  const { mutate: createPayment } = trpc.payment.createPayment.useMutation({
    onSuccess: ({ orderId }) => {
      toast.success('Payment submitted for verification')
      router.push(`/thank-you?orderId=${orderId}`)
    },
    onError: () => {
      toast.error('Something went wrong. Please try again.')
      setIsLoading(false)
    },
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (!phoneNumber || !transactionId) {
      toast.error('Please fill in all required fields')
      setIsLoading(false)
      return
    }

    createPayment({
      paymentMethod,
      phoneNumber,
      transactionId,
      items,
    })
  }

  return (
    <form onSubmit={onSubmit} className='space-y-8'>
      <div>
        <h2 className='text-2xl font-semibold'>Payment Method</h2>
        <p className='text-muted-foreground'>Choose your preferred payment method</p>

        <RadioGroup
          defaultValue='bkash'
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className='grid grid-cols-3 gap-4 mt-4'>
          <div>
            <RadioGroupItem value='bkash' id='bkash' className='peer sr-only' />
            <Label
              htmlFor='bkash'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'>
              <span>bKash</span>
            </Label>
          </div>
          <div>
            <RadioGroupItem value='rocket' id='rocket' className='peer sr-only' />
            <Label
              htmlFor='rocket'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'>
              <span>Rocket</span>
            </Label>
          </div>
          <div>
            <RadioGroupItem value='nagad' id='nagad' className='peer sr-only' />
            <Label
              htmlFor='nagad'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'>
              <span>Nagad</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className='space-y-4'>
        <div>
          <Label htmlFor='phone'>Phone Number</Label>
          <Input
            id='phone'
            placeholder='Enter your phone number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor='transaction'>Transaction ID</Label>
          <Input
            id='transaction'
            placeholder='Enter transaction ID'
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor='screenshot'>Payment Screenshot (Optional)</Label>
          <Input
            id='screenshot'
            type='file'
            accept='image/*'
            onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
          />
        </div>
      </div>

      <Button disabled={isLoading} className='w-full'>
        {isLoading ? <Loader2 className='w-4 h-4 animate-spin mr-2' /> : null}
        Submit Payment
      </Button>
    </form>
  )
}

export default PaymentForm