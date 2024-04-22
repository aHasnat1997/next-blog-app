import { Button } from "../ui/button";

const MainNav = () => {
  return (
    <main className="border-b-2 py-4">
      <div className="max-section flex justify-between items-center">
        <ul className="flex items-center gap-4 text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>
        <Button>Post a Blog</Button>
      </div>
    </main>
  );
};

export default MainNav;