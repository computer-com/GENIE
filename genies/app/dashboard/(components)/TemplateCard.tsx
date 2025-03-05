import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link  from 'next/link'
function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
    <div className='p-5 shadow-md rounded-md flex flex-col justify-center items-center gap-2 cursor-pointer hover:shadow- hover:scale-105 transition-all duration-300'>
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className='font-medium text-lg'>{item.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{item.desc}</p>

    </div>
    </Link>
  )
}

export default TemplateCard
