// import PostCard from "@/components/postCard/postCard";
// import styles from "./blog.module.css";

// export const metadata = {
//   title: "Blog Page",
//   description: "Post inspirational content.",
// };

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }

//   return res.json();
// };

// const BlogPage = async () => {
//   // const posts = await getPosts();
//   const posts = await getData();

//   return (
//     <div className={styles.container}>
//       {posts.map((post) => (
//         <div className={styles.post} key={post.id}>
//           <PostCard post={post} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogPage;
