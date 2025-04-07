// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '@/styles/Content.module.css'
// import Ping from '@/components/Ping'
// import DownloadIcon from '@mui/icons-material/Download';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import { useRef } from 'react';
// export default function Home() {


//   const sectionRef = useRef(null);

//   const scrollToSection = () => {
//     if (sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>S.Raja - Portfolio</title>
//       </Head>
//       <header className={styles.header}>
//         <div className={styles.profile}>
//           <Image
//             src="/MyProfile.jpg" // Replace with the actual path to the profile picture
//             alt="Profile Picture"
//             width={50}
//             height={50}
//             className={styles.profilePic}
//           />
         
//           <span className={styles.available}>
//           <div className={styles.ping}>
//           <Ping />
//            </div>
//            Available for work
//           </span>
//         </div>
//       </header>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Building Scalable Modern <br/> Websites for the Future
//         </h1>
//         <div className={styles.buttons}>
//           <button className={styles.buttonPrimary}>
//             Download CV
//             <DownloadIcon className={styles.downloadicon}/>
//           </button>
//           <button className={styles.buttonSecondary} onClick={scrollToSection}>
//             Scroll down
//             <ArrowDownwardIcon className={styles.downloadicon}/>
//           </button>
//           <div ref={sectionRef} >
     
//       </div>
//         </div>
        
//       </main>
//       <div className={styles.circle}>
      
//       </div>
//       <div>
//         <Image src='/Lpatternedited.png' height={100} width={100} className={styles.pattern} />
//       </div>
//     </div>
    
//   );
// }


import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Content.module.css'
import Ping from '@/components/Ping'
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRef } from 'react';
import Scrolldown from '@/components/Scrolldown'
import Test from '@/pages/Test'
import Star from '@/components/Star'
import Profilebg from '@/components/Profilebg'
export default function Home() {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      {/* <span className={styles.anitheme}>
      <Test/>
      </span> */}
      <Head>
        <title>S.Raja - Portfolio</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.profile}>
          <Image
            src="/MyProfile.jpg" // Replace with the actual path to the profile picture
            alt="Profile Picture"
            width={50}
            height={50}
            className={styles.profilePic}
          />
         
          <span className={styles.available}>
          <div className={styles.ping}>
          <Ping />
           </div>
           Available for work
          </span>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Building Scalable Modern <br/> Websites for the Future
        </h1>
        <div className={styles.buttons}>
          <a href="/RAJA resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.buttonPrimary}>
            Download CV
            <DownloadIcon className={styles.downloadicon}/>
          </a> 
        
          <button className={styles.buttonSecondary} onClick={scrollToSection}>
            Scroll down
            <ArrowDownwardIcon className={styles.downloadicon}/>
          </button>
          <div ref={sectionRef} ></div>
        </div>
      </main>
      <div className={styles.circle}></div>
      <div>
        <Image src='/profile3.jpg' height={100} width={100} className={styles.pattern} />
      </div>
      <span style={{zIndex: '-100'}}>
      <Star/>
      
      </span>
    </div>
  );
}
