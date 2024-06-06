'use client'
import React from 'react'
import HeroSection from './Hero'
import RecidencesSection from './Residences'
import LocationSection from './Location'
import GallerySection from './Gallery'
import ContactSection from './Contact'


const HomeModule = () => {
  return (
    <div>
        <HeroSection/>
        <RecidencesSection/>
        <LocationSection/>
        <GallerySection/>
        <ContactSection/>
    </div>
  )
}

export default HomeModule