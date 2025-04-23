'use client'

import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { DataTable } from '@/components/DataTable'
import { columns } from './columns'
import { trpc } from '@/trpc/client'
import { Skeleton } from '@/components/ui/skeleton'

const CoursesPage = () => {
  const { data: courses, isLoading } = trpc.courses.getMyCourses.useQuery()

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Courses</h1>
          <p className='text-sm text-muted-foreground'>
            Manage your courses and track their performance
          </p>
        </div>
        <Link href='/sell/courses/new'>
          <Button>
            <PlusCircle className='h-4 w-4 mr-2' />
            Create Course
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className='grid gap-4'>
          <Skeleton className='h-12' />
          <Skeleton className='h-12' />
          <Skeleton className='h-12' />
          <Skeleton className='h-12' />
        </div>
      ) : (
        <DataTable columns={columns} data={courses || []} />
      )}
    </div>
  )
}

export default CoursesPage