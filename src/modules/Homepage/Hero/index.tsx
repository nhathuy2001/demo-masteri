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
// const FreightBigPro = localFont({
//   src:[
//     {
//       path: "../../../../public/fonts/FreightBigProBlack-italic.ttf",
//       weight :"",
//     },
//   ] ,
// })

const HeroSection = (): JSX.Element => {


  return (
    <div className=''>
      <Image className=' w-screen relativew'src={MassGroup1} style={{height:'auto'}} alt='MassGroup1'/>
      <div className='grid grid-cols-24 absolute  top-7'>
        <h1 className={`${s.text} text-8xl col-span-10 col-start-2 `}>Find a home that<br></br> suits your lifestyle</h1>
        <a className={`${Degular.className} ${s.text2} col-span-19 col-start-2 text-white`}>SUPERIOR</a>
        <p className={`${Degular.className} ${s.text3} col-span-5 col-start-13 text-white`}>Built on centuries of tradition and dedicated to<br/> innovating the luxury real estate industry, Masteri<br/> Centre Point offers transformative experiences<br/> through a global network of exceptional<br/> and outstanding agents.</p>
        <a className={`${Degular.className} ${s.num} col-span-1 col-start-5 absolute top-80 text-white text-4xl`}>02</a>
        <a className=''></a>
      </div> 
  </div>
    
  )
}

export default HeroSection