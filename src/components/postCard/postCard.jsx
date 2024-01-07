import styles from "./postCard.module.css";
import Link from "next/link";
import Image from "next/image";

const postCard = ({ post }) => {
  const summaryPost = post.desc.slice(0, 150) + "...";
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.title && (
          <div className={styles.imgContainer}>
            <Image
              src={post.img || "/blogImage.webp"}
              alt=""
              className={styles.img}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{summaryPost}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default postCard;
