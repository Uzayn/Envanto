import React from 'react'
import { Navbar } from '.'
import styles from '../style'

const Hero = () => {
  return (
    <section className="bg-[url('./assets/heroImg.png')] bg-no-repeat bg-top sm:h-full h-fit">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
      </div>
      
      <div id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className="font-Lato font-normal ss:text-[68px] text-[48px] text-dimBlack ss:leading-[100px] leading-[58px]">
            Hello, <br className='sm:block hidden' />
            I am Paul Amusan
          </h1>
          <p className={`${styles.paragraph} max-w-[467px] mt-5 text-[16px] text-dimBlack font-Lato font-normal`}>
            Paul Amusan is a young, energetic, and talented fashion designer who focuses on his men’s clothing line, Paul Amusan. His work draws inspiration from local Nigerian fabrics coupled with Japanese tailoring designs. His designs are masculine, yet modern and trendy by way of transforming an ordinary look into a sophisticated design that embraces elegance.
          </p>
          <button type='button' className={`mt-[32px] border border-dimBlack py-4 px-6 w-[189px] h-[74px] font-Lato font-normal text-[18px] text-dimBlack leading-[21px] outline-none} ${styles}`}>
            Hire Me
          </button>
        </div>
      </div>

      

    </section>
  )
}

export default Hero