import React from 'react'
import Banner from '../../atoms/Banner/Banner'
import NavigationBar from '../../moleculs/NavigationBar/NavigationBar'
import Advertisement from '../../moleculs/Ads/Advertisement'
import FlashSale from '../../moleculs/FlashSale/FlashSale'
import Footer from '../../moleculs/Footer/Footer'

function LandingPage() {
  return (
    <>
    <Banner />
      <NavigationBar />
      <Advertisement />
      <FlashSale /> 
     <Footer/>
    </>
  )
}

export default LandingPage