import React, { PropsWithChildren} from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroSection from '@/modules/Homepage/Hero'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
  </>
  )
}

export default MainLayout