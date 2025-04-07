import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.callToAction}>
        <h1 className={styles.title}>Let's work together today!</h1>
        <button className={styles.button}>Start project
            <ChevronRightIcon className={styles.arrow}/>
        </button>
      </div>
      <div className={styles.nav}>
        <div className={styles.navSection}>
          <p className={styles.heading}>Sitemap</p>
          <ul className={styles.navList}>
            <li><a href="#" className={styles.navItem}>Home</a></li>
            <li><a href="#" className={styles.navItem}>About</a></li>
            <li><a href="#" className={styles.navItem}>Projects</a></li>
            <li><a href="#" className={styles.navItem}>Contact me</a></li>
          </ul>
        </div>
        
        <div className={styles.navSection}>
        <p className={styles.heading}>Socials</p>
          <ul className={styles.navList}>
            <li><a href="#" className={styles.navItem}>GitHub</a></li>
            <li><a href="#" className={styles.navItem}>LinkedIn</a></li>
            <li><a href="#" className={styles.navItem}>Twitter X</a></li>
            <li><a href="#" className={styles.navItem}>Instagram</a></li>
            <li><a href="#" className={styles.navItem}>Leetcode</a></li>
          </ul>
        </div>
        
      </div>
     
      
    </footer>
  );
};

export default Footer;
