import { TBlog } from "@/types";
import Image from "next/image";

const LatestBlog = async () => {
  const data = await fetch('http://localhost:3000/api/blog', {
    cache: 'no-store'
  });
  const blogsData = await data.json();

  return (
    <section className="max-section py-8">
      <div className="grid grid-cols-2 gap-4">
        {
          blogsData?.data?.slice(0, 2).map((blog: TBlog) => <div key={blog.id}>
            <Image
              alt="Blog Image"
              src={blog.imageUrl}
              className="w-full"
              width={500}
              height={500}
            />
            <h4 className="text-2xl">{blog.title}</h4>
          </div>)
        }
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {
          blogsData?.data?.slice(2, 6).map((blog: TBlog) => <div key={blog.id}>
            <Image
              alt="Blog Image"
              src={blog.imageUrl}
              className="w-full"
              width={500}
              height={500}
            />
            <h4 className="text-2xl">{blog.title}</h4>
          </div>)
        }
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {
          blogsData?.data?.slice(6, 8).map((blog: TBlog) => <div key={blog.id}>
            <Image
              alt="Blog Image"
              src={blog.imageUrl}
              className="w-full"
              width={500}
              height={500}
            />
            <h4 className="text-2xl">{blog.title}</h4>
          </div>)
        }
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {
          blogsData?.data?.slice(8, 11).map((blog: TBlog) => <div key={blog.id}>
            <Image
              alt="Blog Image"
              src={blog.imageUrl}
              className="w-full"
              width={500}
              height={500}
            />
            <h4 className="text-2xl">{blog.title}</h4>
          </div>)
        }
      </div>
    </section>
  );
};

export default LatestBlog;