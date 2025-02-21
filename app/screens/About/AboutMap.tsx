"use client"
import { missionVision, experiencemap } from '@/app/utils/global'
import React from 'react'
import AboutContactCard from './AboutCard'


const AboutMap = () => {

    return (
        <>
            <div className='
            
            p-14 flex-1 flex  rounded-[2rem] text-center text-black sm:p-4 md:p-8 xl:p-8'>
                <div className=' flex gap-8 sm:flex-col md:flex-col'>
                    {
                        missionVision.map((project: experiencemap, index) => (
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

export default AboutMap