import Image from "next/image";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <Image
        className={styles.image}
        src="/images/akatsuki-cloud.jpg"
        width={300}
        height={300}
        alt="justin"
      />
      <Image
        className={styles.image2}
        src="/images/akatsuki-cloud.jpg"
        width={300}
        height={300}
        alt="justin"
      />

      <div className={styles.textContainer}>
        <h1 className={styles.title}>About me</h1>
        <Image
          className={styles.cyberBanner}
          src="images/line-break.svg"
          width={10}
          height={10}
          alt="line-break"
        />
        <p className={styles.desc}>
          Welcome to my little digital space on the internet! My name is Justin
          and I'm a Software Engineer on an unwavering journey to master the
          craft of programming.
        </p>
        <br />
        <p className={styles.desc}>
          In my development journey, I'm not just focused on building
          applications; I'm dedicated to embodying the philosophy of
          Kaizen—Continuous Improvement. It's the guiding principle behind
          everything I create, including my latest project, LifeQuest. This app
          is a manifestation of my belief in celebrating every small step
          towards mastery. Picture this: becoming 1% better each day, and
          LifeQuest transforms that philosophy into a tangible reality. Whether
          it's hitting the gym, coding, cooking, reading, or mastering a skill,
          watch your progress visually unfold, day by day I choose to live
          improve and move forward!
        </p>
      </div>
    </section>
  );
};
