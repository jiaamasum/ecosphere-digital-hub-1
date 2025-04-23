'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { COURSE_CATEGORIES } from '@/config'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { trpc } from '@/trpc/client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import ModuleEditor from '@/components/ModuleEditor'

const formSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().min(0),
  category: z.string(),
  content: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

const NewCoursePage = () => {
  const router = useRouter()
  const [modules, setModules] = useState([{ title: '', description: '', videoUrl: '' }])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const { mutate: createCourse, isLoading } = trpc.courses.createCourse.useMutation({
    onSuccess: () => {
      toast.success('Course created successfully')
      router.push('/sell/courses')
    },
    onError: () => {
      toast.error('Something went wrong. Please try again.')
    },
  })

  const onSubmit = (data: FormData) => {
    createCourse({
      ...data,
      modules,
    })
  }

  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Create New Course</h1>
        <p className='text-sm text-muted-foreground'>
          Add details about your new course
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
        <div className='space-y-4'>
          <div>
            <Label htmlFor='name'>Course Name</Label>
            <Input
              id='name'
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              {...register('description')}
              className={errors.description ? 'border-red-500' : ''}
            />
            {errors.description && (
              <p className='text-red-500 text-sm'>{errors.description.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor='price'>Price (USD)</Label>
            <Input
              id='price'
              type='number'
              {...register('price', { valueAsNumber: true })}
              className={errors.price ? 'border-red-500' : ''}
            />
            {errors.price && (
              <p className='text-red-500 text-sm'>{errors.price.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor='category'>Category</Label>
            <Select onValueChange={(value) => register('category').onChange({ target: { value } })}>
              <SelectTrigger>
                <SelectValue placeholder='Select a category' />
              </SelectTrigger>
              <SelectContent>
                {COURSE_CATEGORIES.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className='text-red-500 text-sm'>{errors.category.message}</p>
            )}
          </div>

          <div>
            <Label>Course Modules</Label>
            <ModuleEditor modules={modules} setModules={setModules} />
          </div>
        </div>

        <Button disabled={isLoading} type='submit' className='w-full'>
          {isLoading ? <Loader2 className='w-4 h-4 animate-spin mr-2' /> : null}
          Create Course
        </Button>
      </form>
    </div>
  )
}

export default NewCoursePage