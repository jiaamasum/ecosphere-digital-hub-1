import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Plus, Trash } from 'lucide-react'

interface Module {
  title: string
  description: string
  videoUrl: string
}

interface ModuleEditorProps {
  modules: Module[]
  setModules: React.Dispatch<React.SetStateAction<Module[]>>
}

const ModuleEditor = ({ modules, setModules }: ModuleEditorProps) => {
  const addModule = () => {
    setModules([...modules, { title: '', description: '', videoUrl: '' }])
  }

  const removeModule = (index: number) => {
    setModules(modules.filter((_, i) => i !== index))
  }

  const updateModule = (index: number, field: keyof Module, value: string) => {
    const newModules = [...modules]
    newModules[index] = { ...newModules[index], [field]: value }
    setModules(newModules)
  }

  return (
    <div className='space-y-4'>
      {modules.map((module, index) => (
        <div key={index} className='p-4 border rounded-lg space-y-4'>
          <div className='flex justify-between items-center'>
            <h3 className='font-medium'>Module {index + 1}</h3>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => removeModule(index)}
              disabled={modules.length === 1}>
              <Trash className='h-4 w-4' />
            </Button>
          </div>

          <div className='space-y-2'>
            <Label>Title</Label>
            <Input
              value={module.title}
              onChange={(e) => updateModule(index, 'title', e.target.value)}
              placeholder='Module title'
            />
          </div>

          <div className='space-y-2'>
            <Label>Description</Label>
            <Textarea
              value={module.description}
              onChange={(e) => updateModule(index, 'description', e.target.value)}
              placeholder='Module description'
            />
          </div>

          <div className='space-y-2'>
            <Label>Video URL</Label>
            <Input
              value={module.videoUrl}
              onChange={(e) => updateModule(index, 'videoUrl', e.target.value)}
              placeholder='Video URL'
            />
          </div>
        </div>
      ))}

      <Button
        type='button'
        variant='outline'
        className='w-full'
        onClick={addModule}>
        <Plus className='h-4 w-4 mr-2' />
        Add Module
      </Button>
    </div>
  )
}

export default ModuleEditor