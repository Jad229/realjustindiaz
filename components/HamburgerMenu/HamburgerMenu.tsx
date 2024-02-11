"use client";
import { useState } from "react";
import styles from "./hamburgerMenu.module.css";
import Link from "next/link";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      )}
    </>
  );
};
