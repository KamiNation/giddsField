"use client"


import React from 'react'
import ServiceWareCard from './ServiceWareCard'
import { experiencemap, wareHouseMap } from '@/app/utils/global'






const ServiceWareMap = () => {
    return (
        <div className="flex justify-between sm:flex-col md:flex-col lg:flex-col xl:flex-col xl:gap-4 sm:gap-4 md:gap-4">
            {
                wareHouseMap.map((project: experiencemap, index) => (
                    <ServiceWareCard key={index}
                        title={project.title}
                    />
                ))
            }
        </div>
    )
}

export default ServiceWareMap