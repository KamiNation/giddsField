"use client"


import React, { useState } from 'react'
import { contactmap, experiencemap } from '@/app/utils/global'
import Link from 'next/link'





const AboutContactCard: React.FC<experiencemap> = ({ icon, title, desc, id }) => {

    const contactNumber = 4

    return (
        <div className="border border-solid rounded-xl  
        flex flex-1 flex-col p-4 gap-4  
        backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]
         hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-shadow duration-500">
                <div className='flex items-center justify-center'>{icon}</div>
            <div className='text-2xl font-bold sm:text-lg'>{title}</div>
            {
                id === contactNumber ? (
                    <Link className='hover:text-blue-700' href={"https://wa.link/5usj9h"} >{desc}</Link>
                ) : (
            <div className='p-4'>{desc}</div> 
                )
            }
        </div>
    )
}

export default AboutContactCard