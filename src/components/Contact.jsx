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
        <p className='flex justify-center text-[10px] md:text-[14px] font-Lato font-normal leading-[21px] text-dimBlack'>Need anything? Kindly fill the form below</p>
      </div>

      <div className={`${styles.paddingX} ${styles.paddingY} flex`}>
        <div className='mr-[125px] hidden md:flex'>
          <img src={aboutImg} alt="" />
        </div>
        <div className='font-Lato font-normal text-[24px] leading-[21px] w-fit overflow-hidden'>
          <div className='md:flex'>
            <div className='font-Lato font-normal text-dimBlack text-[14px] md:text-[24px] leading-[21px]'>Name</div>
            <div>
              <input type="text" className='border border-grey rounded bg-transparent w-[360px] md:w-[505px] h-[40px] md:h-[60px] md:ml-[42px] mb-[16px] md:mb-[40px]' />
            </div>
          </div>
          <div className='md:flex'>
            <div className='font-Lato font-normal text-dimBlack text-[14px] md:text-[24px] leading-[21px]'>Email</div>
            <div>
              <input type="text" className='border border-grey rounded bg-transparent w-[360px] md:w-[505px] h-[40px] md:h-[60px] md:ml-[47px] mb-[16px] md:mb-[40px]' />
            </div>
          </div>
          <div className='md:flex'>
            <div className='font-Lato font-normal text-dimBlack text-[14px] md:text-[24px] leading-[21px]'>Subject</div>
            <div>
              <input type="text" className='border border-grey rounded bg-transparent w-[360px] md:w-[505px] h-[40px] md:h-[60px] md:ml-[27px] mb-[16px] md:mb-[40px]' />
            </div>
          </div>
          <div className='md:flex'>
            <div className='font-Lato font-normal text-dimBlack text-[14px] md:text-[24px] leading-[21px]'>Message</div>
            <div>
              <input type="text" className='border border-grey rounded bg-transparent w-[360px] md:w-[505px] h-[141px] md:h-[228px] md:ml-[12px] mb-[16px] md:mb-[71px]' />
            </div>
          </div>
          <button className='border-[1px] border-grey w-[243px] md:w-[295px ] h-[60px] text-[18px] font- py-[20px] px-[90px] md:ml-[105px]'>
            Send
          </button>         
        </div>
      </div>
    </section>
  )
}

export default Contacts