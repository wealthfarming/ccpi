import React from 'react'
import AboutUsSection from '@/components/AboutUsSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import AboutStastic from '@/components/AboutStastic';
import AboutUsBanner from '@/components/AboutUsBanner';
import IndexServicesSection from '@/components/IndexServicesSection';
import BottomNavigation from '@/components/BottomNavigation';

const page = () => {
  return (
    <div className='bg-white'>
        <Header />
        <AboutUsBanner />
        <AboutUsSection />
        <AboutStastic />
        <IndexServicesSection />
        <BottomNavigation />
        <Footer />
    </div>
  )
}

export default page