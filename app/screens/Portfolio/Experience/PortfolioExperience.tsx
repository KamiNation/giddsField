"use client"

import React from 'react'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioExperienceMap from './PortfolioExperienceMap'
import Image from 'next/image'
import image from "@/public/cont.jpg"


const PortfolioExperience = () => {



    return (
        <section id='experience' className='w-full min-h-screen  text-black flex sm:flex-col md:flex-col lg:flex-col relative p-2.5 sm:mt-2'>
            <div className="flex flex-1 flex-wrap flex-row gap-10 justify-around mt-4 pl-11 sm:p-0 md:p-0 lg:p-0 sm:items-center sm:justify-center sm:mt-2" >
                <Image src={image} alt="Project 1" width={800} height={800} className="w-[100%] h-[100%] sm:w-[96%]" />
            </div>

            <div className="flex flex-1  gap-4 p-8 sm:p-2 md:p-4">
                <div className='gap-4 mb-8 mt-8 flex flex-col sm: md: lg:'>
                    <div className='text-lg font-bold text-blue-800'>Features</div>

                    <div className="text-4xl font-bold text-black">Core Values </div>

                    <div className="text-justify text-gray-800">
                        We understand the value of time and its value to our customers in our fast growing global economy. Our professional and skilled staff will look after your shipment overseeing every detail at every stage of the shipment to ensure safe and timely delivery of your cargo. That includes:
                    </div>

                    <div>
                        <ul className="text-justify text-gray-800 list-disc pl-6 gap-2 flex flex-col">
                            <li> Pickup of cargo from your Door step </li>
                            <li> Processing of all required administration work and documentation</li>
                            <li>Flight booking to match your requirements </li>
                            <li>
                                Handling of shipment before and after the flight in accordingly with rules and regulations
                            </li>
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