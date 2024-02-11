import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/images/logo.svg"
          alt="justin logo"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.navItems}>
        <Link className={styles.link} href="#projects">
          Projects
        </Link>
        <Link className={styles.link} href="#about">
          About
        </Link>
        <Link className={styles.link} href="#contact">
          Contact
        </Link>
        <Link className={styles.link} href="#resume">
          Resume
        </Link>
      </div>
      <div className={styles.socialLinks}>
        <Image src="/images/discord.svg" width={24} height={24} alt="discord" />
        <Image src="/images/github.svg" width={24} height={24} alt="github" />
        <Image
          src="/images/linkedin.svg"
          width={24}
          height={24}
          alt="linkedin"
        />
      </div>
      <HamburgerMenu />
    </div>
  );
};
