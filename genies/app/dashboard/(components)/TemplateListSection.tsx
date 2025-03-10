import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
export interface TEMPLATE{
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]
}
export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}
function TemplateListSection({userSearchInput}:any) {
  const [templateList,setTemplateList] = useState(Templates)
  useEffect(()=>{
    if(userSearchInput){
      setTemplateList(Templates.filter((item:TEMPLATE)=>item.name.toLowerCase().includes(userSearchInput.toLowerCase())))
    }else{
      setTemplateList(Templates)
    }
  },[userSearchInput])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
      {templateList.map((item:TEMPLATE,index:number)=>(
        <TemplateCard {...item}/>
      ))}
    </div>
  )
}

export default TemplateListSection
