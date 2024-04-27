"use server";

import { TBlog } from "@/types";

const createBlog = async (blogData: TBlog) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blog`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData)
    })
    // console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default createBlog;