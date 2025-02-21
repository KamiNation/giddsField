"use client"

import React from 'react'
import { aboutmap, portfolioAboutMap } from '@/app/utils/global'
import PortfolioAboutCard from './PortfolioAboutCard'



const PortfolioMap = () => {
    return (
        <div 
        className='flex sm:flex-col md:flex-col'
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