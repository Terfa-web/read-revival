import Links from "./links/Links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <image />
        𝑹℮а𝕕 ℛ𝚎𝗏𝗂𝑣⍺I
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
