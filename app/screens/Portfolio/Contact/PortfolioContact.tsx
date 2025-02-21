"use client"

import React from 'react'
import PortfolioContactMap from './PortfolioContactMap'
import { contactMap } from '@/app/utils/global';

const PortfolioContact: React.FC<contactMap> = ({ whatsapp }) => {
    const currentYear = new Date().getFullYear();

    return (
        <section id='contact' className='bg-blue-900 flex flex-col '>
            <div className=" ">
                <PortfolioContactMap />
            </div>
            <div className='flex items-center justify-center gap-2 lg:flex-col pb-4'>
                <p className='flex justify-center items-center sm:p-2.5 md:p-1 text-xl sm:text-xs md:text-lg lg:text-xl' > &#169; Copyright {currentYear} GiddsField Global Logistics LLC.</p>
                <p className='flex justify-center items-center sm:hidden md:hidden text-xl' > All right reserved.</p>
            </div>
        </section>
    )
}

export default PortfolioContact