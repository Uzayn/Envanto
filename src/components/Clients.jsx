import React from 'react'
import styles from '../style'
import { clientImgs } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <div>
        <h1 className='flex justify-center mb-[8px] md:mb-[16px] font-Lato font-bold ss:text-[68px] text-[24px] lg:text-[32px] text-dimblack ss:leading-[100px] leading-[28.8px] md:leading-[58px]'>
          Our Clients
        </h1>
        <p className='flex justify-center text-[10px] md:text-[14px] font-Lato font-normal leading-[21px] text-dimBlack'>I have built my reputation working with these top brands</p>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} flex justify-between`}>
        {clientImgs.map((clientImg, index) => (
          <div key={clientImg.key} className='object-fit'>
            <img src={clientImg.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients