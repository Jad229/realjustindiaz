import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/images/logo.svg"
            alt="justin logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className={styles.navItems}>
        <Link className={styles.link} href="#projects">
          Projects
        </Link>
        <Link className={styles.link} href="#about">
          About
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        <Link target="_blank" className={styles.link} href="/justin-diaz.pdf">
          Resume
        </Link>
      </div>
      <div className={styles.socialLinks}>
        <Link
          target="_blank"
          href="https://discordapp.com/users/204708859120582657"
        >
          <Image
            src="/images/discord.svg"
            width={24}
            height={24}
            alt="discord"
          />
        </Link>
        <Link target="_blank" href="https://github.com/Jad229">
          <Image src="/images/github.svg" width={24} height={24} alt="github" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/justinamarydiaz/"
        >
          <Image
            src="/images/linkedin.svg"
            width={24}
            height={24}
            alt="linkedin"
          />
        </Link>
      </div>
      <HamburgerMenu />
    </div>
  );
};
