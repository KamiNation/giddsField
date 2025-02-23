"use client"


import { contactUs, experiencemap } from '@/app/utils/global'
import React from 'react'
import AboutContactCard from './ContactCard'


const ContactMap = () => {

    return (
        <>
            <div className='pl-14 pr-14 flex-1 flex  rounded-[2rem] text-center text-black  sm:px-4 md:px-8 lg:px-8 xl:px-8'>
                <div className='flex gap-8 sm:flex-col md:flex-col lg:flex-col  xl:grid xl:grid-cols-2 xl:grid-rows-2 xl-flex:flex xl-flex:gap-8'>
                    {
                        contactUs.map((project: experiencemap, index) => (
                            <AboutContactCard key={index}
                                desc={project.desc}
                                icon={project.icon}
                                title={project.title}
                            />
                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default ContactMap