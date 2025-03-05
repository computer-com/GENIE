import React from 'react'
import SideNav from './(components)/SideNav'
import Header from './(components)/Header'

function layout({  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex bg-slate-100 h-screen'>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className='flex-1 md:ml-64 p-4'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default layout
