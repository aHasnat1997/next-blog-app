import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div>
      <Image
        alt="Blog Image"
        src={blog.imageUrl}
        className="w-full h-72"
        width={500}
        height={500}
      />
      <div className="mt-6 flex flex-col gap-4">
        <h4 className="text-2xl font-bold">{blog.title}</h4>
        <p>{blog.content.slice(3, 200)}...<Link href={`/blog/${blog.id}`} className="font-bold underline">Read More</Link></p>
      </div>
    </div>
  );
};

export default BlogCard;