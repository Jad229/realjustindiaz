import Image from "next/image";
import styles from "./home.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Projects />
    </main>
  );
}
