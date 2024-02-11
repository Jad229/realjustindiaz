import styles from "./home.module.css";

import { Projects } from "@/components/Projects/Projects";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
