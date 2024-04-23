import Link from "next/link";
import { Button } from "../ui/button";

const MainNav = () => {
  const links = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/about',
      title: 'About'
    },
    {
      path: '/blog',
      title: 'Blogs'
    },
    {
      path: '/contact',
      title: 'Contact'
    }
  ]
  return (
    <main className="border-b-2 py-4">
      <div className="max-section flex justify-between items-center">
        <ul className="flex items-center gap-4 text-xl">
          {
            links.map((link, i) => <li
              key={i}
              className=""
            >
              <Link href={link.path}>{link.title}</Link>
            </li>)
          }
        </ul>
        <Button>Post a Blog</Button>
      </div>
    </main>
  );
};

export default MainNav;