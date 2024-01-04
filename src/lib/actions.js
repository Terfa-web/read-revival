"use server";

import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from 'bcryptjs';


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
    console.log(error.message)
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

export const register = async (formData) => {
  const {username, email, password, img, passwordRepeat} = Object.fromEntries(formData);

  if(password !== passwordRepeat) {
    return "password doesn't match"
  }

  try {
    connectToDb();

    const user = await User.findOne({username});

    if(user){
      return "User already exists"
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved newuser to db")
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!"}
  }
}


export const login = async (formData) => {
  const {username, password} = Object.fromEntries(formData);


  try {
    await signIn("credentials", { username, password}); 
    console.log("logged in")   
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!"}
  }
}