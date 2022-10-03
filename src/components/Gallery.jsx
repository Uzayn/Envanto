import React from 'react'
import styles from '../style'
import { GalleryImgs } from '../constants'
import { Arrow, ArrowLeft, ArrowRight, MobileGalleryImg } from '../assets'

const Gallery = () => {
  return (
    <section>
      <div>
        <h1 className='flex justify-center mb-[8px] md:mb-[16px] font-Lato font-bold ss:text-[68px] text-[24px] lg:text-[32px] text-dimblack ss:leading-[100px] leading-[28.8px] md:leading-[58px]'>
          Gallery
        </h1>
        <p className='flex justify-center'>Have a look at a collection of my recent works.</p>
      </div>
      <div className={`hidden md:grid ${styles.paddingX} pt-[40px] grid grid-cols-3`}>
        {GalleryImgs.map((GalleryImg) => (
          <div key={GalleryImg.id} className='mb-[40px]'>
            <img src={GalleryImg.img} alt="GalleryImg" />
          </div>
        ))}
      </div>
      <div className='md:hidden flex justify-around my-8 items-center'>
        <img src={ArrowLeft} alt="arrowLeft" className='w-[10px] h-[17px] ' />
        <img src={MobileGalleryImg} alt="" />
        <img src={ArrowRight} alt="arrowRight" className='w-[10px] h-[17px]' />
      </div>
      <div className='flex justify-center'>
        <button type='button' >
          View all <span className='inline-block ml-[9px] md:ml-[18px]'><img src={Arrow} alt="" className='w-[29px] md:w-[36px]' /></span>
        </button>
      </div>
    </section>
  )
}

export default Gallery