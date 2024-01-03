import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";

import { getPost } from "@/lib/data";

//fetch data with an API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);
  // const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={post.img}
            fill
            alt=""
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            {post && <PostUser userId={post.userId} />}
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
