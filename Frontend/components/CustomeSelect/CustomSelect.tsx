'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Ui/select"

export default function CustomSelect({addtxt, addurl, options}: {addtxt: string, addurl: string, options: {value: string, label: React.ReactNode | string}[]}) {
  const router = useRouter()
  const [selected, setSelected] = React.useState<string>('')

  const handleValueChange = (value: string) => {
    if (value === 'add_new') {
      router.push(addurl);
    } else {
        setSelected(value)
    }
  }

  return (
    <Select onValueChange={handleValueChange} value={selected}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a client" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((opt) => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
          <SelectItem value="add_new" className="text-primary">
            <div className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              {addtxt}
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}