"use client"

import { aboutmap } from '@/app/utils/global'
import Image from 'next/image'
import React, { Fragment, useEffect, useRef } from 'react'

import anime from "animejs";



const PortfolioAboutCard: React.FC<aboutmap> = ({ img, title }) => {
    const textRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        
        if (textRef.current) {
            anime({
                targets: textRef.current,
                scale: [0.8, 1], // Zoom-in effect
                opacity: [0.5, 1], // Fade-in effect
                duration: 1500,
                easing: "easeInOutElastic(1, .6)",
                direction: "alternate", // Makes it go back and forth
                loop: true, // Ensures it continues indefinitely
            });
        }
    }, []);


    return (
        <div className=" gap-4 flex flex-col flex-1 sm:mb-8 sm:px-4 md:px-8 md:mb-9  border border-solid rounded-3xl">

            <div ref={textRef} className='text-center text-xl font-semibold text-blue-900 lg:text-lg'>{title}</div>

            <div className=' flex-1 flex items-center justify-center'>
                <Image
                    src={img}
                    alt='frieght'
                    width={900}
                    height={900}
                    className='flex-1 border rounded-t-3xl'
                />
            </div>
        </div>
    )
}

export default PortfolioAboutCard

