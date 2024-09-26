import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import Banner from '../components/Home/Banner'
import GridSection from '../components/Home/GridSection'
function Homepage() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <GridSection/>
   <Banner/>
    </div>
  )
}

export default Homepage
