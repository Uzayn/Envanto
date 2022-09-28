import React from 'react'
import { Navbar } from '.'
import styles from '../style'

const Hero = () => {
  return (
    <section>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
      </div>
      
    </section>
  )
}

export default Hero