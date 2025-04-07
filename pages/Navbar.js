// import { useState } from 'react';
// import Image from 'next/image';
// import { useRef } from 'react';
// import styles from '@/styles/Navbar.module.css';

// const Navbar = ({scrollToAbout }) => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };


//   const scrollToProjects = () => {
//     const projectsSection = document.getElementById('projects');
//     if (projectsSection) {
//       projectsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
//   // const handleScroll = (pixels) => {
//   //   window.scrollBy({
//   //     top: -pixels, // Negative value to scroll up
//   //     behavior: 'smooth',
//   //   });
//   // };
  

//   const handleTabClick = (tab) => {
//    setActiveTab(tab);
//     if (tab === 'About') {
//       scrollToAbout(); // Call the scrollToAbout function when "About" is clicked
//     }
    
//   };
  
 
  
  
  
//   return (
//     <>
     
//       <div className={styles.container}>
//       <div className={styles.logoContainer}>
//         <Image src='/R-logo.png' width={80} height={100} className={styles.logo}/>
//       </div>
//         <div className={styles.navbar}>
//           <button className={styles.hamburger} onClick={toggleNavbar}>
//             &#9776;
//           </button>
//           <div className={`${styles.links} ${isOpen ? styles.show : ''}`}>
//             <button
//               className={`${styles.tab} ${activeTab === 'Home' ? styles.active : ''}`}
//               onClick={() => handleTabClick('Home')}
//             >
//               Home
//             </button>
//             <button
//               className={`${styles.tab} ${activeTab === 'About' ? styles.active : ''}`}
//               onClick={() => handleTabClick('About')}
//             >
//               About
//             </button>
//             <button
//               className={`${styles.tab} ${activeTab === 'Projects' ? styles.active : ''}`}
//               onClick={() => handleTabClick('Projects')}
//             >
//               Projects
//             </button>
//             <button
//               className={`${styles.tab} ${activeTab === 'Contact' ? styles.active : ''}`}
//               onClick={() => handleTabClick('Contact')}
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// import { useState } from 'react';
// import Image from 'next/image';
// import styles from '@/styles/Navbar.module.css';

// const Navbar = ({ scrollToContent, scrollToAbout, scrollToProjects, scrollToContact }) => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
    
//     // Trigger scrolling based on the selected tab
//     if (tab === 'About') {
//       scrollToAbout();
//     } else if (tab === 'Projects') {
//       scrollToProjects();
//     } else if (tab === 'Contact' && scrollToContact) {
//       scrollToContact();
//     } else if (tab === 'Content') {
//       scrollToContent();
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {/* Logo */}
//       <div className={styles.logoContainer}>
//         <Image src='/R-logo.png' width={80} height={100} alt="Logo" className={styles.logo} />
//       </div>

//       {/* Navbar */}
//       <div className={styles.navbar}>
//         <button className={styles.hamburger} onClick={toggleNavbar}>
//           &#9776;
//         </button>
//         <div className={`${styles.links} ${isOpen ? styles.show : ''}`}>
//           {['Home', 'About', 'Projects', 'Contact'].map((tab) => (
//             <button
//               key={tab}
//               className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
//               onClick={() => handleTabClick(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import { useState } from 'react';
// import Image from 'next/image';
// import styles from '@/styles/Navbar.module.css';

// const Navbar = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);

//     // Ensure correct scrolling function is called
//     if (tab === 'Home' && scrollToHome) {
//       scrollToHome();
//     } else if (tab === 'About' && scrollToAbout) {
//       scrollToAbout();
//     } else if (tab === 'Projects' && scrollToProjects) {
//       scrollToProjects();
//     } else if (tab === 'Contact' && scrollToContact) {
//       scrollToContact();
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {/* Logo */}
//       <div className={styles.logoContainer}>
//         <Image src='/R-logo.png' width={80} height={100} alt="Logo" className={styles.logo} />
//       </div>

//       {/* Navbar */}
//       <div className={styles.navbar}>
//         <button className={styles.hamburger} onClick={toggleNavbar}>
//           &#9776;
//         </button>
//         <div className={`${styles.links} ${isOpen ? styles.show : ''}`}>
//           {['Home', 'About', 'Projects', 'Contact'].map((tab) => (
//             <button
//               key={tab}
//               className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
//               onClick={() => handleTabClick(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Navbar.module.css';

const Navbar = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false); // Close menu after clicking

    if (tab === 'Home' && scrollToHome) {
      scrollToHome();
    } else if (tab === 'About' && scrollToAbout) {
      scrollToAbout();
    } else if (tab === 'Projects' && scrollToProjects) {
      scrollToProjects();
    } else if (tab === 'Contact' && scrollToContact) {
      scrollToContact();
    }
  };

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image src='/R-logo.png' width={80} height={100} alt="Logo" className={styles.logo} />
      </div>

      {/* Navbar */}
      <div className={styles.navbar}>
        {/* Hamburger Button */}
        <button className={styles.hamburger} onClick={toggleNavbar}>
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <div className={`${styles.links} ${isOpen ? styles.show : ''}`}>
          {['Home', 'About', 'Projects', 'Contact'].map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
