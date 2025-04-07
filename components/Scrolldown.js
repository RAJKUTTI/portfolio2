// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button>
//         <span> View CV
//         </span>
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   /* From uiverse.io by @Ali-Tahmazi99 */
//   button {
//    display: inline-block;
//    width: 150px;
//    height: 50px;
//    border-radius: 10px;
//    border: 1px solid #03045e;
//    position: relative;
//    overflow: hidden;
//    transition: all 0.5s ease-in;
//    z-index: 1;
//   }

//   button::before,
//   button::after {
//    content: '';
//    position: absolute;
//    top: 0;
//    width: 0;
//    height: 100%;
//    transform: skew(15deg);
//    transition: all 0.5s;
//    overflow: hidden;
//    z-index: -1;
//   }

//   button::before {
//    left: -10px;
//    background: #240046;
//   }

//   button::after {
//    right: -10px;
//    background: #5a189a;
//   }

//   button:hover::before,
//   button:hover::after {
//    width: 58%;
//   }

//   button:hover span {
//    color: #e0aaff;
//    transition: 0.3s;
//   }

//   button span {
//    color: #03045e;
//    font-size: 18px;
//    transition: all 0.3s ease-in;
//   }`;

// export default Button;



import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <div className="dots_border" />
       
        <span className="text_button">View Resume</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --black-700: hsla(0 0% 12% / 1);
    --border_radius: 9999px;
    --transtion: 0.3s ease-in-out;
    --offset: 2px;

    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transform-origin: center;

    padding: 1rem 2rem;
    background-color: transparent;

    border: none;
    border-radius: var(--border_radius);
    transform: scale(calc(1 + (var(--active, 0) * 0.1)));

    transition: transform var(--transtion);
  }

  .button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    background-color: var(--black-700);

    border-radius: var(--border_radius);
    box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
      0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
      0 0 0 calc(var(--active, 0) * 0.375rem) hsl(260 97% 50% / 0.75);

    transition: all var(--transtion);
    z-index: 0;
  }

  .button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    background-color: hsla(260 97% 61% / 0.75);
    background-image: radial-gradient(
        at 51% 89%,
        hsla(266, 45%, 74%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 100% 100%, rgb(18, 63, 226) 0px, transparent 50%),
      radial-gradient(at 22% 91%, rgb(3, 0, 163) 0px, transparent 50%);
    background-position: top;

    opacity: var(--active, 0);
    border-radius: var(--border_radius);
    transition: opacity var(--transtion);
    z-index: 2;
  }

  .button:is(:hover, :focus-visible) {
    --active: 1;
  }
  .button:active {
    transform: scale(1);
  }

  .button .dots_border {
    --size_border: calc(100% + 2px);

    overflow: hidden;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: var(--size_border);
    height: var(--size_border);
    background-color: transparent;

    border-radius: var(--border_radius);
    z-index: -10;
  }

  .button .dots_border::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left;
    transform: rotate(0deg);

    width: 100%;
    height: 2rem;
    background-color: white;

    mask: linear-gradient(transparent 0%, white 120%);
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .button .sparkle {
    position: relative;
    z-index: 10;

    width: 1.75rem;
  }

  .button .sparkle .path {
    fill: currentColor;
    stroke: currentColor;

    transform-origin: center;

    color: hsl(0, 0%, 100%);
  }

  .button:is(:hover, :focus) .sparkle .path {
    animation: path 1.5s linear 0.5s infinite;
  }

  .button .sparkle .path:nth-child(1) {
    --scale_path_1: 1.2;
  }
  .button .sparkle .path:nth-child(2) {
    --scale_path_2: 1.2;
  }
  .button .sparkle .path:nth-child(3) {
    --scale_path_3: 1.2;
  }

  @keyframes path {
    0%,
    34%,
    71%,
    100% {
      transform: scale(1);
    }
    17% {
      transform: scale(var(--scale_path_1, 1));
    }
    49% {
      transform: scale(var(--scale_path_2, 1));
    }
    83% {
      transform: scale(var(--scale_path_3, 1));
    }
  }

  .button .text_button {
    position: relative;
    z-index: 10;

    background-image: linear-gradient(
      90deg,
      hsla(0 0% 100% / 1) 0%,
      hsla(0 0% 100% / var(--active, 0)) 120%
    );
    background-clip: text;

    font-size: 1rem;
    color: transparent;
  }`;

export default Button;
