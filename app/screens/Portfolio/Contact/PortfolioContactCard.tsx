"use client"


import React, { useState } from 'react'
import { contactmap } from '@/app/utils/global'

const PortfolioContactCard: React.FC<contactmap> = ({ desc, title, parent, child1, child2, child3, child4, child5, child6, child }) => {

    
    const { addr, addr1, addr2, Tell, Tell2, Tell3, Email } = desc || {}


    return (
        <div className="flex  p-4 m-4  ">
            {/* <div>
                <div className='text-blue-900 font-bold text-3xl mb-2 sm:text-base md:text-lg  lg:text-xl xl:text-2xl'>{title}</div>
                <div className="text-white sm:text-sm">{addr}</div>
                <div className="text-white sm:text-sm">{addr1}</div>
                <div className="text-white sm:text-sm">{addr2}</div>
                <div className="text-white sm:text-sm">{Tell}</div>
                <div className="text-white sm:text-sm">{Tell2}</div>
                <div className="text-white sm:text-sm">{Tell3}</div>
                <div className="text-white sm:text-sm">{Email}</div>
            </div> */}

            <div className=''>
                <div className='text-red-500 font-bold text-3xl mb-2 sm:text-base md:text-lg lg:text-xl xl:text-2xl'>{parent}</div>
                <div className="text-white text-center sm:text-sm sm:text-justify md:text-base md:text-justify lg:text-lg lg:text-justify xl:text-justify">{child}</div>
                <div className="text-white text-center sm:text-sm sm:text-justify md:text-base md:text-justify lg:text-lg lg:text-justify xl:text-justify">{child1}</div>
                <div className="text-white text-center sm:text-sm sm:text-justify md:text-base md:text-justify lg:text-lg lg:text-justify xl:text-justify">{child2}</div>
                <div className="text-white text-center sm:text-sm sm:text-justify md:text-base md:text-justify lg:text-lg lg:text-justify xl:text-justify">{child3}</div>
                <div className="text-white text-center sm:text-sm sm:text-justify md:text-base md:text-justify lg:text-lg lg:text-justify xl:text-justify">{child4}</div>
                <div className="text-white text-center sm:text-sm sm:text-justify md:text-base md:text-justify lg:text-lg lg:text-justify xl:text-justify">{child5}</div>
                <div className="text-white text-center sm:text-sm sm:text-justify md:text-base md:text-justify lg:text-lg lg:text-justify xl:text-justify">{child6}</div>
            </div>
        </div>
    )
}

export default PortfolioContactCard