import Link from "next/link";
import styles from "./projects.module.css";
import Image from "next/image";

function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Project Title</h2>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Link className={styles.link} href="/">
          View Project
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <Image />
      </div>
    </div>
  );
}

export const Projects = () => {
  return (
    <section id="#projects" className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectList}>
        <Project />
      </div>
    </section>
  );
};
