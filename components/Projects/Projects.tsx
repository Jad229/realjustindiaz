import Link from "next/link";
import styles from "./projects.module.css";
import Image from "next/image";
import { projects } from "@/data/projects";

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  github: string;
  link: string;
};

function Project({ name, description, image, github, link }: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.textContainer}>
        <Image
          className={styles.cyberBanner}
          src="images/line-break.svg"
          width={600}
          height={100}
          alt="line-break"
        />
        <h2 className={styles.projectTitle}>{name}</h2>
        <p className={styles.desc}>{description}</p>
        <div className={styles.linkContainer}>
          <Link className={styles.link} href={link}>
            View Project
          </Link>
          <Link className={styles.link} href={github}>
            View Repo
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.image} src={image} fill alt="project image" />
      </div>
    </div>
  );
}

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
