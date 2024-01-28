import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.logoimage}
            src="/e.book.jpg"
            alt="book"
            width={30}
            height={30}
          />
          𝑹℮а𝕕 ℛ𝚎𝗏𝗂𝑣⍺L
        </Link>
      </div>
      <div className={styles.text}>
        <p>
          {" "}
          Copyright &#64;2024 Read Revival Initiative | Nigeria Corporate
          Registry(CAC) Number 159641
        </p>
      </div>
    </div>
  );
};

export default Footer;
