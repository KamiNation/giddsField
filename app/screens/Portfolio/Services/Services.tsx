"use client"


import React from 'react'
import Header from '../../Header'
import Image from 'next/image'
import ServiceWareMap from './ServiceWareMap'
import PortfolioContact from '../Contact/PortfolioContact'
import Button from '@/app/components/Button'
import Link from 'next/link'
const Services = () => {

    const pdf = "/Giddsfield-Cargo-Export-Import-Logistics-Catalogue.pdf"


    const downloadPDF = async (url: any) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch PDF');
            }

            const blob = await response.blob();

            // Extract the filename from the URL
            const filename = url.split('/').pop() || 'Israel_CV.pdf';

            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;

            // Use the extracted filename for the download
            link.download = filename;

            document.body.appendChild(link);
            link.click();

            window.URL.revokeObjectURL(downloadUrl);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    const handleDownload = () => {
        const pdfUrl = pdf; // Replace with your PDF's URL
        downloadPDF(pdfUrl);
    };



















    return (
        <section className='w-[100%] 800px:w-[92%] m-auto  h-full' id="services">
            <Header />

            <section id="service-hero" className="
                relative w-full h-80
                bg-[url('/air4.jpg')] 
                bg-cover bg-center bg-no-repeat 
                flex text-white font-bold
">
                <div className='flex items-center justify-center pl-8 text-blue-900'>
                    SERVICES
                </div>
            </section>

            <section id="service-us" className='flex min-h-screen 2xl:min-h-0'>

                <div className='flex  flex-1 p-12 items-center justify-center  sm:flex-col md:flex-col lg:flex-col xl:flex-col-reverse md:p-8 lg:p-8 xl:p-8 sm:p-4'>
                    <div className="flex flex-1 sm:pt-8">
                        <div className='flex flex-1 border border-solid rounded-xl'>
                            <Image src="/contContainer.jpeg" className=" bg-cover bg-no-repeat w-[100%] h-[100%] border border-solid rounded-xl" alt='about-freigth' width="800" height="800" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 p-8 lg:p-2 xl:p-2 text-black text-justify sm:p-0 md:p-0">
                        <div className="font-bold text-3xl text-blue-900 sm:pt-2 md:pt-2">

                            SEA FREIGHT
                        </div>

                        <div className="text-gray-800">
                        Our experienced team is fully equipped to guide you through the intricacies of importing and exporting cargo by sea, ensuring you follow the proper procedures while optimizing costs. Through years of collaboration with leading shipping lines and agencies, we’ve built strong, trusted relationships that enable us to deliver both efficiency and cost savings. Our sea freight division offers a wide range of tailored services to meet your specific shipping requirements.
                        </div>

                        <div className="text-blue-800 text-2xl font-bold">
                            Overview
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className='p-5'>
                                <ul className='list-disc'>
                                <li>Full-container-load (FCL) Shipping</li>
<li>Less-than-container-load (LCL) Shipping</li>
<li>Breakbulk Cargo Handling</li>
<li>Multimodal Transportation by Sea/Air/Road</li>
<li>Door-to-Door Delivery</li>
<li>Port-to-Port Shipping</li>
<li>Customs Clearance & Documentation</li>
<li>Cargo Insurance</li>
<li>Temperature-Controlled Shipping</li>
<li>Project Cargo Management</li>
<li>Freight Forwarding Services</li>
<li>Warehousing & Storage Solutions</li>
<li>Consolidation Services</li>

                                </ul>
                            </div>

                            {/* <div>
                                <div className='uppercase flex items-center justify-center p-2 bg-blue-900 max-w-[130px] max-h-12 text-white hover:bg-red-900 border border-solid rounded-xl font-bold'>
                                    get service
                                </div>
                            </div> */}



                        </div>
                    </div>
                </div>
            </section>

            <section id="service-catalogue" className="flex h-[28rem] md:h-[45rem]
                        bg-[url('/roofie.jpg')] 
                        bg-cover bg-center bg-no-repeat  items-center justify-center sm:pt-8 sm:h-[45rem]">

                <div className='flex gap-8 p-8 flex-1 sm:flex-col md:flex-col'>
                    <div className='flex-1 flex items-center justify-center'>
                        <Image src={"/catallogue.jpg"} alt='catalogue' width={800} height={800} className="w-[70%] h-[70%] border rounded-xl border-solid" />
                    </div>

                    <div className='flex flex-1 flex-col p-20 gap-8 sm:p-4 md:p-8'>
                        <div className='uppercase font-bold text-4xl text-blue-900'>
                            catalogue
                        </div>

                        <div className='flex flex-col gap-8'>
                            <div className='font-bold text-black text-xl'>
                                Get a copy of our Catalogue here
                            </div>

                            <Button click={handleDownload} className='uppercase bg-blue-900 flex items-center justify-center p-4  max-w-[130px] max-h-12 text-white hover:bg-red-900 border rounded-xl border-solid font-bold'>
                                download
                            </Button>
                        </div>
                    </div>

                </div>
            </section>

            <section id="service-catalogue" className="flex flex-col min-h-screen xl:min-h-0 2xl:min-h-0 p-20 gap-12 sm:p-4 md:p-8 lg:p-8 xl:p-8 sm:pt-8 2xl:p-12">
                <div className='flex flex-col gap-2'>
                    <div className='text-4xl text-black font-bold text-center sm:text-xl md:text-2xl'>
                        Explore Our Warehouse Services
                    </div>
                    <div className='text-gray-400  text-center'>
                        Here's Comprehensive range of warehouse services we offer!
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <ServiceWareMap />

                    <div className='flex flex-1 flex-row-reverse p-8 sm:flex-col sm:p-0 md:flex-col lg:flex-col lg:p-0 xl:p-0 md:p-0'>

                        <div className='flex-1 flex items-center justify-center'>
                            <Image src={"/wd2d.jpg"} alt='relabling' width={900} height={900} className="w-[100%] h-[100%] border rounded-xl border-solid flex-1" />
                        </div>


                        <div className='flex flex-1 flex-col gap-12 p-4 sm:p-0 md:p-0 md:pt-4 sm:pt-4 sm:gap-6 md:gap-6'>
                            <div className='uppercase text-3xl text-black font-bold'>
                                Sea Freight /  Air Freight (DTD | DTP)
                            </div>

                            <div className='text-black' >
                                 Sea Freight / Air Freight by Giddsfield Cargo Logistics provides dependable and affordable international shiping for small, large or bulk goods. Whether it's Door-to-Port (DTP) or Door-to-Door (DTD), this service ensures secure transportation from your business to the destination port or directly to the customer's address. With comprehensive customs support, efficient handling, and tracking capabilites, Giddsfield Cargo Logistics guarantees smoth sea/air freight deliveries for global shipments.
                            </div>

                            <Link href={"/contact"} className='uppercase bg-blue-900 flex items-center justify-center p-4  max-w-[250px] max-h-12 text-white hover:bg-red-900 border rounded-xl border-solid'>
                                Order this Service
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <PortfolioContact />

        </section>
    )
}

export default Services