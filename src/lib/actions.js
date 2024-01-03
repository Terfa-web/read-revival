"use server";

import { signIn, signOut } from "./auth";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";


export const addPost = async (formData) => {  

  const { title, desc, slug, userId} = Object.fromEntries(formData)
  
try {
  connectToDb();
  const newPost = new Post({
      title,
      desc,
      slug,
      userId,
  });

  await newPost.save();
  console.log("saved to db")
  // revalidatePath("/blog");
} catch (error) {
    console.log(error)
    return{error: "something went wrong"}
}
}

export const deletePost = async (formData) => {  

  const { id } = Object.fromEntries(formData)
  
try {
  connectToDb(); 

  await Post.findByIdAndDelete(id);
  console.log("deleted from db")
  revalidatePath("/blog");
} catch (error) {
    console.log(error)
    return{error: "something went wrong"}
}
}

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};