"use client"

import React from 'react'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioExperienceMap from './PortfolioExperienceMap'
import Image from 'next/image'
import image from "@/public/cont.jpg"
const PortfolioExperience = () => {



    return (
        <section id='experience' className='w-full min-h-screen xl:px-8  text-black flex sm:flex-col md:flex-col lg:flex-col xl:py-8 relative p-2.5 sm:mt-2'>
            <div className="flex flex-1 flex-wrap flex-row gap-10 justify-around mt-4 pl-11 sm:p-0 md:p-0 lg:p-0 xl:p-0 sm:items-center sm:justify-center sm:mt-2" >
                <Image src={image} alt="Project 1" width={800} height={800} className="w-[100%] h-[100%] sm:w-[96%]" />
            </div>

            <div className="flex flex-1  gap-4 p-8 sm:p-2 md:p-4">
                <div className='gap-4 mb-8 mt-8 flex flex-col sm: md: lg: xl:justify-around xl:mb-0 2xl:gap-8'>
                    <div className='text-lg font-bold text-blue-800'>Features</div>

                    <div className="text-4xl font-bold text-black">Core Values </div>

                    <div className="text-justify text-gray-800">
                    We recognize the critical importance of time in today’s fast-paced global economy, and how essential it is to our customers. Our experienced and committed team ensures every detail of your shipment is expertly managed at each stage, guaranteeing both the safety and timely delivery of your cargo. This includes:
                    </div>

                    <div>
                        <ul className="text-justify text-gray-800 list-disc pl-6 gap-2 flex flex-col">
                        <li>We will pick up your cargo directly from your doorstep for convenience.</li>
    <li>Our team will handle all necessary documentation and administrative tasks efficiently.</li>
    <li>We will book flights that are customized to meet your specific shipping requirements.</li>
    <li>We ensure the shipment is properly managed before and after the flight, fully adhering to regulations.</li>

                        </ul>
                    </div>
                    <div className='flex flex-col bg-#f9fafc'>
                    <PortfolioExperienceMap />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioExperience