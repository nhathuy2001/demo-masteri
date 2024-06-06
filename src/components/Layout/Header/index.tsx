import HeroSection from '@/modules/Homepage/Hero'
import React from 'react'
import Image from 'next/image'
import s from './styles.module.scss'
import MassGroup1 from '../../../../public/img/MassGroup1.png'
import localFont from 'next/font/local'


const Header = (): React.ReactElement => {
  return (
      <div className='grid grid-cols-24 absolute z-20 top-0'>
    <p id='masteri' className={`{Degular.className} text-base font-black col-span-2 col-start-2 text-white`}>MASTERI</p>
    <nav className='flex gap-x-16 col-start-17 col-end-21 text-white'>
      <a className={`{Degular.className} font-semibold`}>About</a>
      <a className={`{Degular.className} font-semibold`}>Residences</a>
      <a className={`{Degular.className} font-semibold`}>Location</a>
      <a className={`{Degular.className} font-semibold`}>Gallery</a>
      <a className={`{Degular.className} font-semibold`}>Contact</a>
    </nav>
    <div className='h-px bg-slate-300 col-span-22 col-start-2 '></div>
    </div>
  )
}

export default Header