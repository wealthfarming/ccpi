import React from 'react'
import AboutUsSection from '@/components/AboutUsSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import AboutStastic from '@/components/AboutStastic';

const page = () => {
  return (
    <div className='bg-white'>
        <Header />
        <AboutUsSection />
        <AboutStastic />
        <Footer />
    </div>
  )
}

export default page