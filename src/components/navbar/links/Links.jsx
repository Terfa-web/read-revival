"use client";

import { handleLogout } from "@/lib/actions";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Founder", path: "/founder" },
  { title: "Trustees", path: "/trustees" },
  { title: "Contact", path: "/contact" },
  // { title: "Blog", path: "/blog" },
  { title: "Events", path: "/events" },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {/* {session?.user ? (
          <>
            {session?.user.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )} */}
      </div>

      <MenuIcon
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        alt="menu"
      />
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
