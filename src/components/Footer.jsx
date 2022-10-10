import React from 'react'
import { socialIcons } from '../constants'

const Footer = () => {
  return (
    <footer className='' >
      <p className='text-center text-[14px] font-Lato font-normal leading-[17px] mb-[13px] mt-[56px] md:mt-0 '>Copyright © 2020 All rights reserved | Paul Amusan</p>
      <div className='flex justify-center pb-[37px]'>
        {socialIcons.map((socialIcon) => (
          <div className=''>
            <img src={socialIcon.icon} alt="" className='mx-[35px]'/>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer