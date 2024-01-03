import { auth } from "@/lib/auth";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
const Navbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className={styles.container}>
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
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
