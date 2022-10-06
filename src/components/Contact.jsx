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

      <div className={`${styles.paddingX} ${styles.paddingY} flex`}>
        <div className='mr-[125px]'>
          <img src={aboutImg} alt="" />
        </div>
        <div className='font-Lato font-normal text-[24px] leading-[21px]'>
          <div>
            Name <input type="text" className='w-[505px] h-[60px] ml-[42px] mt-[20px] mb-[40px] border border-grey rounded bg-transparent' />
          </div>
          <div>
            Email <input type="email" className='w-[505px] h-[60px] ml-[46px] mb-[40px] border border-grey rounded bg-transparent'/>
          </div>
          <div>
            Subject <input type="text" className='w-[505px] h-[60px] ml-[26px] mb-[40px] border border-grey rounded bg-transparent' />
          </div>
          <div className='mb-[71px] items-start'>
            Message <input type="text" className='w-[505px] h-[228px] ml-[12px] border border-grey rounded bg-transparent' />
          </div>
          <div className='ml-[230px]'>
            <button>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts