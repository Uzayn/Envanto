import React from 'react'
import styles from '../style'
import { aboutImg } from '../assets'

const Contacts = () => {
  return (
    <section>
      <div>
        <h1 className='flex justify-center mb-[8px] md:mb-[16px] font-Lato font-bold ss:text-[68px] text-[24px] lg:text-[32px] text-dimblack ss:leading-[100px] leading-[28.8px] md:leading-[58px]'>
          Contact Me
        </h1>
        <p className='flex justify-center'>Need anything? Kindly fill the form below</p>
      </div>

      <div className={`${styles.paddingX} ${styles.paddingY} flex `}>
        <div>
          <img src={aboutImg} alt="" />
        </div>
        <div className='font-Lato font-normal text-[24px] leading-[21px]'>
          <div>
            Name <input type="text" name="" id="" />
          </div>
          <div>
            Email <input type="email" name="" id="" />
          </div>
          <div>
            Subject <input type="text" />
          </div>
          <div>
            Message <input type="text" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts