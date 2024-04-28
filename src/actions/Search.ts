"use server";

const Search = async (searchString: string) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blog?searchQuery=${searchString}`, {
      cache: 'no-store'
    });
    // console.log(res);
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default Search;