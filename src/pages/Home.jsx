import React from 'react'
import Hero from '../components/Hero'
import NewSection from '../components/NewSection'
import  RecentlyViewedSlider from "../components/RecentlyViewedSlider"
import Brand from '../components/Brand'
import Bestseller from '../components/BestSeller'
import ProductWidget from '../components/ProductWidget'
import BrandSlider from '../components/BrandSlider'
function Home() {
  return (
    <div>
      <Hero/>
      <NewSection/>
      <Brand/>
      <Bestseller/>
      <BrandSlider/>
      <RecentlyViewedSlider/>
      <ProductWidget/>
    </div>
  )
}

export default Home

