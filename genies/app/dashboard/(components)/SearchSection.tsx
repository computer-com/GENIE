import { Search } from 'lucide-react'
import React from 'react'
import { SignInButton } from '@clerk/nextjs'

function SearchSection({ onSearchInput }: { onSearchInput: (value: string) => void }) {
  return (
    <div className='flex flex-col justify-center items-center p-10 bg-gradient-to-r from-ring to-primary text-white'>
      <div className='flex justify-between w-full mb-4'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>
          Join Membership just for $1.99
        </h2>
        <SignInButton>
          <button className='bg-white text-primary px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition'>
            Sign In
          </button>
        </SignInButton>
      </div>
      <h2 className='text-2xl font-bold mb-2'>Browse All Templates</h2>
      <p className='mb-4'>Find the perfect template for your needs!</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex items-center border rounded-md my-5 w-[60%]'>
          <Search className='text-primary' />
          <input type="text" placeholder="Search..."
            onChange={(event) => onSearchInput(event.target.value)}
            className='p-2 outline-none w-full bg-transparent' />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
