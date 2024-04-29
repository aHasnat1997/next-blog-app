import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { AiOutlineLike } from "react-icons/ai";

export const BlogCard = ({ blog }: { blog: TBlog }) => {
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
        <div className="flex items-start justify-between">
          <h4 className="text-2xl font-bold line-clamp-1">{blog.title}</h4>
          <div className="text-2xl flex items-center gap-2">
            <AiOutlineLike />
            <span>{blog.likes}</span>
          </div>
        </div>
        <div>
          <p className="text-justify text-sm">{blog.summary}</p>
          <div className="w-fit ml-auto">
            <Link
              href={`/blog/${blog.id}`}
              className="font-bold underline text-lg"
            >
              Read Full Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingBlogCard = () => {
  return (
    <div>
      <Skeleton className="w-full h-72 bg-slate-400" />
      <div className="mt-6 flex flex-col gap-4">
        <Skeleton className="bg-slate-400 py-2" />
        <Skeleton className="bg-slate-400 py-4" />
      </div>
    </div>
  );
};