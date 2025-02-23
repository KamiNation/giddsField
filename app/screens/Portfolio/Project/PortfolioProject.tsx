"use client"
import React from 'react'
import PortfolioContact from '../Contact/PortfolioContact'
import Link from 'next/link'

const PortfolioProject = () => {

    const arrowClickHandle = () => {
        location.href = '#experience'
    }


    return (



        <section id="project" className="relative h-full w-full xl:min-h-0 flex flex-col 2xl:pt-4">
            <div className="">
                <div className='px-8 pb-8'>
                    <div className="p-4 border border-solid border-black rounded-2xl bg-[url('/contactUs.jpg')] bg-cover flex justify-center items-center xl:h-[20rem] text-white flex-col gap-4 ">
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
