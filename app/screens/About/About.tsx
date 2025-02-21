"use client"

import React from 'react'
import Header from '../Header'
import Image from 'next/image'
import AboutMap from "./AboutMap"
import PortfolioContact from '../Portfolio/Contact/PortfolioContact'


const About = () => {
    return (
        <section className='w-[100%] 800px:w-[92%] m-auto   h-full'>
            <Header />

            <section id="about-hero" className="
        relative w-full 
        h-screen 
        bg-[url('/aboutFreight.jpg')] 
        bg-cover bg-center bg-no-repeat 
        flex
        ">
            </section>

            <section id="about-us" className='flex min-h-screen '>

                <div className='flex  flex-1 p-12 items-center justify-center sm:flex-col md:flex-col md:p-8 sm:p-4 xl:p-8'>
                    <div className="flex flex-1">
                        <div className='flex flex-1 border border-solid rounded-xl'>
                            <Image src="/aboutPlane.jpg" className=" bg-cover bg-no-repeat w-[100%] h-[100%] border border-solid rounded-xl" alt='about-freigth' width="800" height="800" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-1 p-8 text-black text-justify sm:p-0 md:p-4 xl:p-3">
                        <div className="font-bold text-3xl text-blue-900 sm:mt-4">
                            About Us
                        </div>

                        <div className="text-gray-800">
                            GiddsField Logistics understand the value of time and its value to our customers in our fast growing global economy. Our professional and skilled staff will look after your shipment overseeing every detail at every stage of the shipment to ensure safe and timely delivery of your cargo.
                        </div>

                        <div className="text-gray-800">
                            "Our proven ability to minimise time taken to clear goods for our customers puts us on the path to profitability growth, and we are confident it will keep us on that path going forward."
                        </div>

                        <div className="flex flex-col sm:justify-center sm:items-center">
                            <div className="text-2xl text-blue-800 font-bold">
                                Mr. Gideon
                            </div>

                            <div className='text-gray-600 text-md'>
                                Founder & CEO
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section id='about-mission' className='flex h-full '>
            <AboutMap />
            </section>

            <PortfolioContact/>
        </section>
    )
}

export default About