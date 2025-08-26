import React from 'react'
import Hero from '../components/Hero'
import NewSection from '../components/NewSection'
import  RecentlyViewedSlider from "../components/RecentlyViewedSlider"
import Brand from '../components/Brand'



function Home() {
  return (
    <div>
      <Hero/>
      <NewSection/>
      <Brand/>
      <RecentlyViewedSlider/>
    </div>
  )
}

export default Home

