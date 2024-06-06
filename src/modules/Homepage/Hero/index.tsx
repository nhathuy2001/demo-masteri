import React from 'react'
import Image from 'next/image'
import s from './styles.module.scss'
import MassGroup1 from '../../../../public/img/MassGroup1.png'
import localFont from 'next/font/local'
import Header from '@/components/Layout/Header'



const Degular = localFont({
  src:[
    {
      path: "../../../../public/fonts/Degular-Medium.otf",
      weight :"",
    },
  ] ,
})
const FreightBigPro = localFont({
  src:[
    {
      path: "../../../../public/fonts/FreightBigProBlack-italic.ttf",
      weight :"",
    },
  ] ,
})

const HeroSection = (): JSX.Element => {


  return (
<div className='hero-wrapper relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center'>
  <div className='grid grid-cols-24 absolute z-10 top-0'></div>
  <Image className='w-screen'src={MassGroup1} style={{position:'relative',height:'auto'}} alt=''></Image>
  <div className='grid grid-cols-24 absolute z-10 top-0'>
    <h1 className={`${s.text} text-8xl col-span-10 col-start-2 `}>Find a home that suits your lifestyle</h1>
    <a className='col-span-19 col-start-2 mt-11 text-white'>SUPERIOR</a>
    <p className='col-span-5 col-start-12 text-white'>Built on centuries of tradition and dedicated to innovating the luxury real estate industry, Masteri Centre Point offers transformative experiences through a global network of exceptional and outstanding agents.</p>
    <a className={`${s.num} col-span-1 col-start-5 absolute top-80 text-white text-4xl`}>02</a>
    </div> 
  </div>
    
  )
}

export default HeroSection