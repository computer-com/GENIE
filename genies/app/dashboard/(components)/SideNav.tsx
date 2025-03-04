import React from 'react'
import Image from 'next/image'
import { DollarSign, FileClock, History, Home, Icon, Settings } from 'lucide-react'
import path from 'path'

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: DollarSign,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/Setting'
        }
    ]

    return (
        <div className='h-screen p-5 shadow-sm border'>
            <div className='flex justify-center border-b'>
                <Image src={'/logo.svg'} alt="Logo" width={120} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div className='flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center'>
                        <menu.icon className='h-7 w-7' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SideNav
