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
        h-screen xl:h-[35rem] 2xl:h-[35rem] lg:h-[35rem]
        bg-[url('/aboutFreight.jpg')] 
        bg-cover bg-center bg-no-repeat 
        flex
        ">
            </section>

            <section id="about-us" className='flex min-h-screen 2xl:min-h-0 xl:min-h-0 lg:min-h-0'>

                <div className='flex  flex-1 p-12 items-center justify-center sm:flex-col md:flex-col md:p-8 sm:p-4 xl:p-8'>
                    <div className="flex flex-1">
                        <div className='flex flex-1 border border-solid rounded-xl'>
                            <Image src="/cargo-airplane-new.jpg" className=" bg-cover bg-no-repeat w-[100%] h-[100%] border border-solid rounded-xl " alt='about-freigth' width="800" height="800" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-1 p-8 text-black text-justify sm:p-0 md:p-4 xl:p-3 xl:gap-8  2xl:gap-[4rem] ">
                        <div className="font-bold text-3xl text-blue-900 sm:mt-4">
                            About Us
                        </div>

                        <div className="text-gray-800">
                        Giddsfield ltd (Cargo export-import logistics services) facilitates the processing, examination, documentation, and packaging of food items, personal effects, and general goods. We ship via airlines or/and sea shipping lines, have these goods delivered to the recipient at their doorstep in the UK, USA, Canada, Europe, the middle east countries and African countries.
                        </div>
<div className="text-gray-800">
We also facilitate importation and clearing of General goods and some selected equipment from selected countries into Nigeria, have them cleared and deliver these goods at the recipient's address here in Nigeria.
</div>
                        <div className="text-gray-800">
                            Our proven ability to minimise time taken to clear goods for our customers puts us on the path to profitability growth, and we are confident it will keep us on that path going forward.
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