
"use client"

import Link from 'next/link'
import React from 'react'

const PortfolioHero = () => {
    return (
        <section id='hero-section'
            className="
        relative w-full 
        h-screen 
        bg-[url('/airplane.jpg')] 
        bg-cover bg-center bg-no-repeat 
        flex
        " >
            <div className=' flex  py-32 px-14 flex-col gap-8 '>
                <div className=' flex items-center justify-center '>

                    <div className="text-4xl font-bold flex-1 items-start sm:text-2xl  ">
                        We’re GiddsField Logistics, Your <br /> Cargo handling Experts <br />  based in Ikorodu Lagos
                    </div>

                </div>

                <span className=" bg-blue-900 p-4 rounded-xl max-w-[125px] max-h-[61px] border  border-solid hover:bg-red-500 font-bold">

                    <Link href="/about">
                        Learn More
                    </Link>
                </span>

            </div>
        </section>
    )
}

export default PortfolioHero