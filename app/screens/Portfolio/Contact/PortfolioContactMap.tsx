"use client"

import { contactmap, portfolioContactMap, contactMap } from '@/app/utils/global'
import React from 'react'
import PortfolioContactCard from './PortfolioContactCard'


const PortfolioContactMap: React.FC<contactMap> = ({ whatsapp }) => {



    return (
        <div className='flex sm:flex-col items-center justify-around'>
            {
                portfolioContactMap.map((contact: contactmap, index) => (
                    <PortfolioContactCard key={index}
                        id={index}
                        title={contact.title}
                        desc={contact.desc}
                        parent={contact.parent}
                        child={contact.child}
                        child1={contact.child1}
                        child2={contact.child2}
                        child3={contact.child3}
                    />
                ))
            }
        </div>

    )
}

export default PortfolioContactMap