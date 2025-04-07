
import styles from '@/styles/Test.module.css'
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card2}>
          <form className="form">
            <Image
              src="/profile3.jpg" // Make sure to place the image in the public directory
              alt="Yoga"
              className={styles.img}
              width={210}
              height={200}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
