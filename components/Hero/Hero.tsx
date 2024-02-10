import Image from "next/image";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h2 className={styles.heroKaizen}>改善</h2>
        <h1 className={styles.heroTitle}>Justin D.</h1>
        <p className={styles.heroSubtitle}>
          Full-Stack Developer. Kaizen Practictioner. Forever Learner.
        </p>
      </div>

      <Image
        className={styles.kaizen}
        src="/images/kaizen.png"
        alt="kaizen"
        width={150}
        height={150}
      />
    </div>
  );
};
