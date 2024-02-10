import Image from "next/image";
import styles from "./scroller.module.css";

export const Scroller = () => {
  return (
    <div className={styles.scroller}>
      <div className={styles.innerScroller}>
        <Image
          src="images/cyber-bar.svg"
          alt="cyber bar"
          width={100}
          height={1000}
        />
        <Image
          className={styles.scrollerImage}
          src="images/cyber-bar.svg"
          alt="cyber bar"
          width={100}
          height={1000}
        />
      </div>
    </div>
  );
};
