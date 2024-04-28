"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import Search from "@/actions/Search";
import { TBlog } from "@/types";

const BlogSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<TBlog[]>([]);

  const handelSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    // if (searchValue.length > 0) {
    //   setOpen(true);
    //   const result = await Search(searchValue);
    //   setSearchResult(result.data);
    // };
    // if (searchValue.length === 0) {
    //   setOpen(false);
    //   setSearchResult([]);
    // };
  };
  // console.log(searchResult);

  return (
    <div className="w-[50rem] relative">
      <Input
        className="w-full"
        onChange={(e) => handelSearch(e)}
        // onBlur={() => setOpen(false)}
        placeholder="Search Blog"
      />
      <div className={`w-full h-64 bg-background absolute ${open ? '' : 'hidden'}`}>

      </div>
    </div>
  );
};

export default BlogSearch;