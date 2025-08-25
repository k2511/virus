import React from 'react'
import Hero from '../components/Hero'
import NewSection from '../components/NewSection'
import  RecentlyViewedSlider from "../components/RecentlyViewedSlider"



function Home() {
  return (
    <div>
      <Hero/>
      <NewSection/>
      <RecentlyViewedSlider/>
    </div>
  )
}

export default Home

