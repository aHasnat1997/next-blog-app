import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import parse from 'html-react-parser';
import DOMPurify from "isomorphic-dompurify";

const SingleBlog = async ({ params }: { params: { id: string } }) => {
  const result = await fetch(`${process.env.BASE_URL}/api/blog/${params.id}`, {
    cache: 'force-cache'
  });
  const blogData = await result.json();
  // console.log(blogData);
  const createDay = new Date(blogData.data.createdAt);
  const formattedDate = new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(createDay);
  const cleanContent = DOMPurify.sanitize(blogData.data.content);

  return (
    <section className="max-section pb-16">
      <div className="my-4">
        <Image
          src={blogData.data.imageUrl}
          alt="Hero Image"
          className="w-full h-[40rem] rounded-2xl"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center">{blogData.data.title}</h1>
        <div className="w-full py-4 flex items-center justify-around">
          <div className="py-4 flex items-center gap-4">
            <Image
              alt="author image"
              src={blogData.data.authorImage}
              className="size-14 rounded-full"
              width={500}
              height={500}
            />
            <div>
              <h2 className="text-2xl font-semibold">{blogData.data.author}</h2>
              <p>{formattedDate}</p>
            </div>
          </div>
          <div className="text-4xl flex items-center gap-2">
            <AiOutlineLike />
            <span>{blogData.data.likes}</span>
          </div>
        </div>
        <div className="mt-20 text-2xl text-justify flex flex-col gap-8">
          {
            parse(cleanContent)
          }
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;