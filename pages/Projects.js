// components/ProjectCards.js
import styles from '@/styles/Projects.module.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const ProjectCards = () => {
  return (
    <>
<h1 className={styles.title}>My Portfolio Highlights</h1>
    <div className={styles.container}>
       
      <div className={styles.card}>
        <img src="/project-1 - Copy.jpg"/>
        <h2>Udayal Padai | Charitiable Trust</h2>
        <div className={styles.arrowContainer}>
        <button className={styles.arrowButton}>
            <ArrowOutwardIcon/>
        </button>
      </div>
        <span className={styles.toolscontainer}>
        <p className={styles.tools}>HTML</p>
        <p className={styles.tools}>CSS</p>
       
       </span>
       </div>

      

      <div className={styles.card}>
        <img src="/project_2 - Copy.jpg"/>
        <h2>MyStore | Online Grocery Shop</h2>
        <div className={styles.arrowContainer}>
        <a href='https://qkart-frontend-opal-psi.vercel.app/'><button className={styles.arrowButton}>
            <ArrowOutwardIcon/>
        </button></a>
      </div>
        <span className={styles.toolscontainer}>
        <p className={styles.tools}>React JS</p>
        <p className={styles.tools}>NodeJS</p>
        <p className={styles.tools}>Express</p>
        <p className={styles.tools}>Mongo DB</p>
        <p className={styles.tools}>Mongoose</p>
        <p className={styles.tools}>JWL Token</p>
       </span>
       </div>

      {/* <div className={styles.card}>
        <img src="/project-4.jpg" />
        <h2>Qtify | Music Browsing App</h2>
        <div className={styles.arrowContainer}>
        <button className={styles.arrowButton}>
            <ArrowOutwardIcon/>
        </button>
      </div>
        <span className={styles.toolscontainer}>
        <p className={styles.tools}>React JS</p>
        <p className={styles.tools}>Material UI</p>
        <p className={styles.tools}>Swiper</p>
        <p className={styles.tools}>CSS Modules</p>
        <p className={styles.tools}>Flexbox</p>
        <p className={styles.tools}>CSS Variables</p>
        </span>
      </div>

      <div className={styles.card}>
        <img src="/project-5.jpg" />
        <h2>QTrip | Travel Booking Platform</h2>
        <div className={styles.arrowContainer}>
        <button className={styles.arrowButton}>
            <ArrowOutwardIcon/>
        </button>
      </div>
        <span className={styles.toolscontainer}>
        <p className={styles.tools}>HTML</p>
        <p className={styles.tools}>CSS</p>
        <p className={styles.tools}>JavaScript</p>
        <p className={styles.tools}>REST</p>
        <p className={styles.tools}>JSON</p>
        </span>
      </div>
      <div className={styles.card}>
        <img src="/project-6.jpg" />
        <h2>Expense Tracker App</h2>
        <div className={styles.arrowContainer}>
        <button className={styles.arrowButton}>
            <ArrowOutwardIcon/>
        </button>
      </div>
        <span className={styles.toolscontainer}>
        <p className={styles.tools}>React JS</p>
        <p className={styles.tools}>Recharts</p>
        <p className={styles.tools}>React Model/Icons</p>
        <p className={styles.tools}>Notstack</p>
        <p className={styles.tools}>LocalStorage</p>
        </span>
      </div> */}
    </div>
    </>
  );
};

export default ProjectCards;
