"use client"


import { experiencemap } from '@/app/utils/global'
import React from 'react'

const ServiceWareCard: React.FC<experiencemap> = ({ title }) => {
    return (
        <div className='flex gap-4  bg-backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]
         hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-shadow duration-500 rounded-md border-solid'>
            <div className=' flex pl-4 max-w-[280px] max-h-12 text-blue-800  font-bold'>
                {title}
            </div>
        </div>

    )
}

export default ServiceWareCard