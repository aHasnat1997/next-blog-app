import { BlogCard } from "@/components/sheared/BlogCard";
import { TBlog } from "@/types";

const BlogPage = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/blog`, {
    cache: 'no-store'
  });
  const blogsData = await data.json();
  return (
    <section className="max-section">
      <div className="grid grid-cols-3 gap-8 my-12">
        {
          blogsData?.data?.map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)
        }
      </div>
    </section>
  );
};

export default BlogPage;