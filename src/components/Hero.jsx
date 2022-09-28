import React from 'react'
import { Navbar } from '.'
import styles from '../style'

const Hero = () => {
  return (
    <section >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
      </div>
      
      <div id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-dimBlack ss:leading-[100px] leading-[75px] w-full">
          Hello, <br className='sm:block hidden' />
          I am Paul Amusan
        </h1>
        <p className={`${styles.paragraph} max-w-[467px] mt-5 text-dimBlack`}>
          Paul Amusan is a young, energetic, and talented fashion designer who focuses on his men’s clothing line, Paul Amusan. His work draws inspiration from local Nigerian fabrics coupled with Japanese tailoring designs. His designs are masculine, yet modern and trendy by way of transforming an ordinary look into a sophisticated design that embraces elegance.
        </p>
      </div>
      </div>
      
      
    </section>
  )
}

export default Hero