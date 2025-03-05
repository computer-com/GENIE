import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

function UsageTrack() {
    const { user} = currentUser();
    const result = await
  return (
    <div className='m-5'>
      <div className='bg-primary text-white rounded-lg p-3'>
        <h2 className='font-medium'> Credits</h2>
        <div className='h-2 bg-black w-full rounded-full mt-3'>
            <div className='h-2 bg-white rounded-full'
            style={{
                width:'35%'
            }}></div>
        </div>
        <h2 className='text-sm my-2'>3500/1000 credits used </h2>
      </div>
      <Button variant={'secondary'} className='w-full rounded-lg my-3 text-primary'> Upgrade</Button>
    </div> 
  )
}

export default UsageTrack
