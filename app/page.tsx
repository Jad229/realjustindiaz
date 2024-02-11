import styles from "./home.module.css";

import { Projects } from "@/components/Projects/Projects";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
