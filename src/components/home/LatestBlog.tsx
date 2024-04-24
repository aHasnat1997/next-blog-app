import { TBlog } from "@/types";
import Image from "next/image";
import { BlogCard, LoadingBlogCard } from "../sheared/BlogCard";

const LatestBlog = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/blog`, {
    cache: 'no-store'
  });
  const blogsData = await data.json();
  const totalData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className="max-section py-8">
      <div className="grid grid-cols-2 gap-8">
        {
          !blogsData ?
            totalData.slice(0, 2).map((i) => <LoadingBlogCard key={i} />) :
            blogsData?.data?.slice(0, 2).map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)
        }
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {
          !blogsData ?
            totalData.slice(2, 5).map((i) => <LoadingBlogCard key={i} />) :
            blogsData?.data?.slice(2, 5).map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)
        }
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {
          !blogsData ?
            totalData.slice(5, 7).map((i) => <LoadingBlogCard key={i} />) :
            blogsData?.data?.slice(5, 7).map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)
        }
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {
          !blogsData ?
            totalData.slice(7, 10).map((i) => <LoadingBlogCard key={i} />) :
            blogsData?.data?.slice(7, 10).map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)
        }
      </div>
    </section>
  );
};

export default LatestBlog;