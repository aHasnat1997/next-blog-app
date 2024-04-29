import { BlogCard } from "@/components/sheared/BlogCard";
import { TBlog } from "@/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const BlogPage = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/blog?limit=12&page=1`, {
    cache: 'no-store'
  });
  const blogsData = await data.json();
  // console.log(blogsData);
  return (
    <section className="max-section my-12">
      <div className="grid grid-cols-3 gap-8">
        {
          blogsData?.data?.map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)
        }
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

      </div>
    </section>
  );
};

export default BlogPage;