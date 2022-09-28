import React from 'react'
import {navLinks} from '../constants'
import {heroImg} from '../assets'

const NavBar = () => (
  <nav className='w-full flex py-6 navbar'>
    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
      {navLinks.map((nav, index) =>(
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-grey hover:text-dimBlack ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[30px]' }`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </nav>
)


export default NavBar