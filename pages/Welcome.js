import React from 'react';
import styles from '@/styles/Welcome.module.css';
import Image from 'next/image';
const Card = () => {
  return (
    <div>
    <div className={styles.card} >
      <div className={styles.content}>
        <p>Welcome! I'm <span style={{fontWeight:'900', color:'skyblue'}}>Raja</span>, a full stack developer specializing in React JS.
        
          With expertise in modern web technologies, I focus on building user-centric interfaces that combine clean code with exceptional user experience. Currently working on projects that optimize Core Web Vitals and implement seamless API integrations, I'm always excited to tackle new challenges in web development.
        </p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <h2>10<span className={styles.plus}>+</span></h2>
          <p className={styles.stattext}>Projects done</p>
        </div>
        <div className={styles.stat}>
          <h2>0<span className={styles.plus}>+</span></h2>
          <p className={styles.stattext}>Years of experience</p>
        </div>
      </div>
      <Image src='/R-logo.png' width={90} height={100} className={styles.logo}/>
    </div>
    </div>
  );
};

export default Card;
