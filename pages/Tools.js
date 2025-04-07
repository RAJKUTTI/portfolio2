import Image from 'next/image';
import styles from '@/styles/Tools.module.css'; // Import the CSS module

const EssentialTools = () => {
  return (
    <div>
    <div className={styles.container}>

      <h1 className={styles.title}>Essential Tools I Use</h1>
<p className={styles.title2}>Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
</p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Image src='/Bootstrap2.png' alt='Figma' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>Bootstrap
            <span className={styles.toolname2}>Framework</span>
          </p>
        </div>

        <div className={styles.card}>
          <Image src='/css3.svg' alt='CSS' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>CSS
          <span className={styles.toolname2}>User Interface</span>
          </p>
        </div>

        <div className={styles.card}>
          <Image src='/javascript.svg' alt='JavaScript'width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>JavaScript
          <span className={styles.toolname2}>User Interface</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/nodejs.svg' alt='NodeJS' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>NodeJS
          <span className={styles.toolname2}>Web Server</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/expressjs.svg' alt='ExpressJS' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>ExpressJS
          <span className={styles.toolname2}>Node Framework</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/mongodb.svg' alt='MongoDB' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>MongoDB
          <span className={styles.toolname2}>Database</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/react.svg' alt='React' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>React
          <span className={styles.toolname2}>Framework</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/tailwindcss.svg' alt='TailwindCSS' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>TailwindCSS
          <span className={styles.toolname2}>USer Interface</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/NextJS.png' alt='TailwindCSS' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>NextJS
          <span className={styles.toolname2}>React Framework</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/Html.png' alt='TailwindCSS' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>Html
          <span className={styles.toolname2}>User Interface</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/Mysql.png' alt='TailwindCSS' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>MySql
          <span className={styles.toolname2}>Database</span>
          </p>
        </div>
        <div className={styles.card}>
          <Image src='/figma.svg' alt='TailwindCSS' width={50} height={50} className={styles.image} />
          <p className={styles.toolName}>Figma
          <span className={styles.toolname2}>UI Tool</span>
          </p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default EssentialTools;
