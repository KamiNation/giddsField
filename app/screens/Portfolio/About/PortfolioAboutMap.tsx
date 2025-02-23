"use client"

import React from 'react'
import { aboutmap, portfolioAboutMap } from '@/app/utils/global'
import PortfolioAboutCard from './PortfolioAboutCard'



const PortfolioMap = () => {
    return (
        <div 
        className='flex gap-8 sm:flex-col md:flex-col lg:flex-col lg:px-4 lg:pt-4  '
        >
            {
                portfolioAboutMap.map((about: aboutmap, index) => (
                    <PortfolioAboutCard key={index}
                        img={about.img}
                        title={about.title}
                    />
                ))
            }
        </div>
    )
}

export default PortfolioMap