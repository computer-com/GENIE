"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { DollarSign, FileClock, History, Home, Icon, Settings } from 'lucide-react'
import path from 'path'
import { usePathname } from 'next/navigation'

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
    const path = usePathname();
    useEffect(()=>{
        console.log(path); 
    })
    return (
        <div className='h-screen p-5 shadow-lg border-r bg-gradient-to-b from-gray-100 to-gray-300'>
            <div className='flex justify-center border-b pb-4'>
                <Image src={'/logo.svg'} alt="Logo" width={120} height={100} />
            </div>
            <hr className='my-6 border-t border-gray-300' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div key={index} className={`flex gap-3 mb-3 p-3 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer items-center transition-colors duration-200 ${path === menu.path ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}>
                        <menu.icon className='h-7 w-7' />
                        <h2 className='text-lg font-medium'>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SideNav
