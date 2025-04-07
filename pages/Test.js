// // pages/live-coder.js
// import { useState } from 'react';
// import styles from '../styles/LiveCoder.module.css';

// const LiveCoder = () => {
//   const [html, setHtml] = useState('');
//   const [css, setCss] = useState('');
//   const [js, setJs] = useState('');

//   const updateOutput = () => {
//     const iframe = document.getElementById('output');
//     const output = `
//       <html>
//         <head>
//           <style>${css}</style>
//         </head>
//         <body>
//           ${html}
//           <script>${js}</script>
//         </body>
//       </html>
//     `;
//     iframe.srcdoc = output;
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.editor}>
//         <h2>HTML</h2>
//         <textarea value={html} onChange={(e) => setHtml(e.target.value)} />
//         <h2>CSS</h2>
//         <textarea value={css} onChange={(e) => setCss(e.target.value)} />
//         <h2>JavaScript</h2>
//         <textarea value={js} onChange={(e) => setJs(e.target.value)} />
//         <button onClick={updateOutput}>Run</button>
//       </div>
//       <div className={styles.preview}>
//         <iframe id="output" />
//       </div>
//     </div>
//   );
// };

// export default LiveCoder;



// Twitter icon



// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="button">
//         <div className="bloom-container">
//           <div className="button-container-main">
//             <div className="button-inner">
//               <div className="back" />
//               <div className="front">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 512 512">
//                   <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
//                 </svg>
//               </div>
//             </div>
//             <div className="button-glass">
//               <div className="back" />
//               <div className="front" />
//             </div>
//           </div>
//           <div className="bloom bloom1" />
//           <div className="bloom bloom2" />
//         </div>
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .button {
//     background: none;
//     border: none;
//     cursor: pointer;
//   }

//   .button .bloom-container {
//     position: relative;
//     transition: all 0.2s ease-in-out;
//     border: none;
//     background: none;
//   }

//   .button .bloom-container .button-container-main {
//     width: 80px; /* Reduced from 110px */
//     aspect-ratio: 1;
//     border-radius: 50%;
//     overflow: hidden;
//     position: relative;
//     display: grid;
//     place-content: center;
//     border-right: 3px solid white;
//     border-left: 3px solid rgba(128, 128, 128, 0.147);
//     transform: rotate(-45deg);
//     transition: all 0.5s ease-in-out;
//   }

//   .button .bloom-container .button-container-main .button-inner {
//     height: 45px; /* Reduced from 60px */
//     aspect-ratio: 1;
//     border-radius: 50%;
//     position: relative;
//     box-shadow: rgba(100, 100, 111, 0.5) -6px 3px 6px 0px;
//     transition: all 0.5s ease-in-out;
//   }

//   .button .bloom-container .button-container-main .button-inner .front {
//     position: absolute;
//     inset: 4px;
//     border-radius: 50%;
//     background: linear-gradient(
//       60deg,
//       rgb(0, 103, 140) 0%,
//       rgb(58, 209, 233) 100%
//     );
//     display: grid;
//     place-content: center;
//   }

//   .button .bloom-container .button-container-main .button-inner .front .svg {
//     fill: #ffffff;
//     opacity: 0.5;
//     width: 22px; /* Reduced from 30px */
//     aspect-ratio: 1;
//     transform: rotate(45deg);
//     transition: all 0.2s ease-in;
//   }

//   .button .bloom-container .button-container-main .button-glass {
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       90deg,
//       rgba(255, 255, 255, 0) 0%,
//       rgba(255, 255, 255, 0.888) 100%
//     );
//     transform: translate(0%, -50%) rotate(0deg);
//     transform-origin: bottom center;
//     transition: all 0.5s ease-in-out;
//   }

//   .button .bloom-container:hover {
//     transform: scale(1.05);
//   }

//   .button .bloom-container:hover .button-container-main .button-glass {
//     transform: translate(0%, -35%);
//   }

//   .button
//     .bloom-container:hover
//     .button-container-main
//     .button-inner
//     .front
//     .svg {
//     opacity: 1;
//     filter: drop-shadow(0 0 6px white);
//   }

//   .button .bloom-container:active {
//     transform: scale(0.7);
//   }

//   .button .bloom-container:active .button-container-main .button-inner {
//     transform: scale(1.1);
//   }
// `;

// export default Button;

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
const Button = () => {
  return (
    <StyledWrapper>
      <button type="button" className="btn">
       <Image src='/profile3.jpg' width={200} height={220}/>
        <div id="container-stars">
          <div id="stars" />
        </div>
        <div id="glow">
          <div className="circle" />
          <div className="circle" />
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13rem;
    overflow: hidden;
    height: 14rem;
    border-radius: 50%;
    background-size: 300% 300%;
    cursor: pointer;
    backdrop-filter: blur(1rem);
    margin: 20px;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#212121, #212121),
      linear-gradient(
        137.48deg,
rgb(132, 132, 132) 10%,
rgb(17, 255, 112) 45%,
rgb(0, 255, 247) 67%,
rgb(43, 191, 255) 87%
      );
      box-shadow: 1px 8px 20px rgba(0, 170, 255, 0.5);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
  }

  strong {
    z-index: 2;
    font-family: "Avalors Personal Use";
    font-size: 12px;
    letter-spacing: 5px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }

  .btn:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .btn:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  .btn:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }

  #stars::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }

  @keyframes animStar {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-135rem);
    }
  }

  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }`;

export default Button;

