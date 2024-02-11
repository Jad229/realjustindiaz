import Link from "next/link";
import style from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={style.container}>
      <h1 className={style.title}>DON'T BE SHY. LETS BUILD SOMETHING!</h1>

      <div className={style.contactInfo}>
        <p>Feel free to reach out to me</p>
        <p>Justhewebdev@gmail.com</p>

        <div className={style.socials}>
          <h3>Find me on:</h3>
          <Link href="https://discordapp.com/users/204708859120582657">
            Discord
          </Link>
          <Link href="https://www.linkedin.com/in/justinamarydiaz/">
            Linkedin
          </Link>
          <Link href="https://www.instagram.com/justin.diiaz/?utm_source=qr">
            Instagram
          </Link>
          <Link href="https://github.com/Jad229">Github</Link>
        </div>
      </div>
    </main>
  );
}
