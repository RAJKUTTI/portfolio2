
// import React from 'react'
// import styles from '@/styles/Index.module.css'
// import Navbar from './Navbar'
// import Content from './Content'
// import Welcome from './Welcome'
// import Tools from './Tools'
// import Projects from './Projects'
// import Contact from './Contact'
// import Footer from './Footer'
// import Footer2 from './Footer2'
// import { useRef } from 'react'
// import LiveCoder from './Livecoder'
// const Index = () => {

//   const aboutRef = useRef(null);
//   const projectRef = useRef(null)


//   const scrollToAbout = () => {
//     if (aboutRef.current) {
//       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

// const scrollToProjects = () => {
//   if(projectRef.current) {
//     projectRef.current.scrollIntoView({ behavior: 'smooth' })
//   }
// }

//   return (
//     <div className={styles.pageWrapper}>
//       <Navbar scrollToAbout={scrollToAbout} />
//       <Content />
//       <div ref={aboutRef}>
//         <Welcome />
//       </div>
//       <LiveCoder/>
//       <Tools />
//       <div ref={projectRef}>
//       <Projects scrollToProjects={scrollToProjects}/>
//       </div>
//       <Contact />
//       <Footer />
//       <Footer2 />
//     </div>
//   );
// };

// export default Index

// import React, { useRef } from 'react';
// import styles from '@/styles/Index.module.css';
// import Navbar from './Navbar';
// import Content from './Content';
// import Welcome from './Welcome';
// import Tools from './Tools';
// import Projects from './Projects';
// import Contact from './Contact';
// import Footer from './Footer';
// import Footer2 from './Footer2';
// import LiveCoder from './Livecoder';

// const Index = () => {
//   const aboutRef = useRef(null);
//   const projectRef = useRef(null);
//   const ContactRef = useRef(null);
//   const homeRef = useRef(null);

//   const scrollToAbout = () => {
//     if (aboutRef.current) {
//       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToProjects = () => {
//     if (projectRef.current) {
//       projectRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToContact = () => {
//     if (ContactRef.current) {
//       ContactRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToHome = () => {
//     if (homeRef.current) {
//      homeRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className={styles.pageWrapper}>
      
//       <Navbar scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} />
//       <div ref={homeRef}>
//       <Content />
//       </div>
//       <div ref={aboutRef}>
//         <Welcome />
//       </div>
//       <LiveCoder />
//       <Tools />
//       <div ref={projectRef}>
//         <Projects />
//       </div>
//       <div ref={ContactRef}>
//       <Contact />
//       </div>
//       <Footer />
//       <Footer2 />
//     </div>
//   );
// };

// export default Index;

import React, { useRef } from 'react';
import styles from '@/styles/Index.module.css';
import Navbar from './Navbar';
import Content from './Content';
import Welcome from './Welcome';
import Tools from './Tools';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Footer2 from './Footer2';
import LiveCoder from './Livecoder';

const Index = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const offset = 80; // Adjust offset value based on your navbar height

  const scrollToSection = (ref) => {
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      
      <div ref={homeRef} className="section">
        <Content />
      </div>
      <div ref={aboutRef} className="section">
        <Welcome />
      </div>
      <LiveCoder />
      <Tools />
      <div ref={projectRef} className="section">
        <Projects />
      </div>
      <div ref={contactRef} className="section">
        <Contact />
      </div>
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Index;
