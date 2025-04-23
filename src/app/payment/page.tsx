import { getServerSideUser } from '@/lib/payload-utils'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import PaymentForm from '@/components/PaymentForm'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const PaymentPage = async ({ searchParams }: PageProps) => {
  const nextCookies = cookies()
  const { user } = await getServerSideUser(nextCookies)
  
  if (!user) {
    redirect('/sign-in?origin=payment')
  }

  const { items } = searchParams

  if (!items) {
    redirect('/')
  }

  return (
    <div className='relative mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <PaymentForm items={items as string} user={user} />
    </div>
  )
}

export default PaymentPage