import React from "react";
import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "@/lib/data";

// const getUser = async (userId) => {
//   try {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       { cache: "no-store" }
//     );

//     if (!res.ok) {
//       throw new Error(`Failed to fetch user. Status: ${res.status}`);
//     }

//     return res.json();
//   } catch (error) {
//     if (error) NotFound();
//   }
// };

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.avatar}
          src={user.img ? user.img : "/e.book.jpg"}
          fill
          alt=""
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
