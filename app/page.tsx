"use client"



import React, { useState } from 'react'

import Heading from './components/Heading'


import Header from './screens/Header'
import Portfolio from './screens/Portfolio/Portfolio'




const page = () => {



  return (
    <div>
      <Heading
        title="GiddsField Logistics- You ask, we deliver"
        description="Cargo shipping services"
        keywords="Express Cargo Services Freight Forwarding Custom Clearance Haulage Consulting"
      />
      <Header/>
      <Portfolio/>
    </div>
  )
}

export default page