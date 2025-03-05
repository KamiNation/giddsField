"use client"


import Image from 'next/image'
import React from 'react'
// import { BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioMap from './PortfolioAboutMap'
import Link from 'next/link'

const PortfolioAbout = () => {

    const arrowClickHandle = () => {
        location.href = '#portfolio'
    }

    return (
        <section id='about-me' className='w-full  xl:min-h-0 py-8 text-black relative xl:px-8  gap-8'>

            <h1 className="text-center font-bold text-black text-5xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl ">What we do</h1>


            <PortfolioMap />


            <div className="flex items-center justify-center pt-8">
                <div className='flex text-center p-4 border   border-solid rounded-xl 
                    bg-blue-600 text-white hover:bg-red-600  max-w-[130px] max-h-[86px]'>

                    <Link href={"/about"} className='flex items-center justify-center '>
                        Learn More</Link>
                </div>
            </div>


        </section>

    )
}

export default PortfolioAbout