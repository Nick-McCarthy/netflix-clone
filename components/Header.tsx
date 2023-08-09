'use client'

import React, {useState, useEffect} from 'react'
import Logo from './Logo'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

//<Link href='/account'> <img src='../public/profilePic.png' alt='Profile Picture' className='cursor-pointer rounded' /></Link>

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)

      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {window.removeEventListener('scroll', handleScroll)}

  }, [])

  return (
    <header className={`${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black'}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <Logo />
        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink' >New & Popular</li>
          <li className='headerLink' >My List</li>
        </ul>
      </div>

      <div className='flex item-center space-x-4 text-sm font-light'>
        <MagnifyingGlassIcon className='hidden h-6 w-6 sm:inline'/>
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6'/>
      </div>
    </header>
  )
}

export default Header