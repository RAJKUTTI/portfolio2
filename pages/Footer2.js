import React from 'react'
import styles from '@/styles/Footer2.module.css'
import Image from 'next/image'
const Footer2 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
         <Image src='/R-logo.png' width={90} height={100} className={styles.logo2}/>
         </div>
        <div className={styles.copyright}>
      © 2025<span style={{color:'white', marginLeft:'10px'}}>DavidRaja.com</span>
      </div>
    </div>
  )
}

export default Footer2