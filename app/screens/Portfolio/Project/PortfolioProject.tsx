"use client"
import React from 'react'
import PortfolioContact from '../Contact/PortfolioContact'
import Link from 'next/link'

const PortfolioProject = () => {

    const arrowClickHandle = () => {
        location.href = '#experience'
    }


    return (



        <section id="project" className="relative h-full w-full  flex flex-col">
            <div className="relative w-full h-screen flex flex-col justify-center items-center">
                <div className=''>
                    <div className="p-4 border border-solid border-black rounded-2xl w-[80rem] h-[25rem] sm:h-[15rem] sm:w-[18rem] md:h-[18rem] md:w-[28rem] lg:w-[40rem]  bg-[url('/contactUs.jpg')] bg-cover flex justify-center items-center text-white flex-col gap-4 bg-red-900">
                        <div className='text-4xl font-bold sm:text-lg md:text-xl'>
                            Do you have any Question?
                        </div>
                        <div className='font-bold text-sm '>
                            Feel free to contact us anytime.
                        </div>

                        <div className='border border-blue-800 rounded-xl p-4 sm:p-2 bg-blue-800 hover:bg-red-900'>
                            <Link href="/contact" >
                            Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioContact />
        </section>


    )
}

export default PortfolioProject
