import styles from "./footer.module.css";

export const Footer = () => {
  const time = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <p>© {time} Justin Diaz - Kaizen Coder</p>
    </footer>
  );
};
