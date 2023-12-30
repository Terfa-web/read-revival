"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Founder", path: "/founder" },
  { title: "Trustees", path: "/trustees" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
  { title: "Ourwork", path: "/ourwork" },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //temporary
  const session = true;
  const isAdimin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdimin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
