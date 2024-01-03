import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore} from "next/cache";

// Connect to the database once
connectToDb();

export const getPosts = async () => {
  try {
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const getUser = async (id) => {
    noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
   
    console.error(`Error fetching user with ID ${id}:`, error);
    throw new Error(`Failed to fetch user with ID ${id}`);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
