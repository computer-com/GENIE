import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }: { onSearchInput: (value: string) => void }) {
  return (
    <div className='flex flex-col justify-center items-center p-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white'>
      <h2 className='text-xl font-bold'> Browse All Templates</h2>
      <p>Find the perfect template for your needs</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex items-center  border rounded-md my-5 w-[60%]'>
            <Search className='text-primary' />
            <input type="text" placeholder="Search..."
            onChange={(event)=>onSearchInput(event.target.value)}
            className='p-2 outline-none w-full bg-transparent' />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
