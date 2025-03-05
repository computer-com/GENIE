"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../(components)/TemplateListSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
interface PROPS {
    selectedTemplate?:TEMPLATE;
    userFormInput:any;
}
function FormSection({selectedTemplate,userFormInput}:PROPS) {
  const [formData, setFormData] = useState<any>();
  const handleInputChange=(event:any)=>{
const {name,value}=event.target;
setFormData({...formData,[name]:value})
  }
  const onsubmit = (e:any)=>{
    e.preventDefault();
    userFormInput(formData);
  }
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        {selectedTemplate?.icon && (
          <Image src={selectedTemplate.icon} alt={selectedTemplate?.name || ''} width={100} height={100} />
        )}
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
      <form className='mt-6' onSubmit={onsubmit}>
        {selectedTemplate?.form?.map((item,index)=>(
            <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                <label className='font-bold'>
                    {item.label}
                </label>
                {item.field=='input'?
                <Input name={item.name} required={item?.required} 
                onChange={handleInputChange}/>
                :item.field=='textarea'?
                <Textarea />:null
                }
            </div>
        ))}
        <Button type="submit" className='w-full py-6'> Generate content</Button>
      </form>
    </div>
  )
}
export default FormSection
