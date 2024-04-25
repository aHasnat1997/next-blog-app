"use client";

import Link from "next/link";
import Login from "../login";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";

const MainNav = () => {
  const { data: session } = useSession();
  // console.log(session);

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
        <div>
          {
            session?.user ?
              <ProfileDropdown
                userImage={session.user.image || "https://xsgames.co/randomusers/avatar.php?g=pixel"}
                name={session.user.name || "User Account"}
              /> :
              <Login />
          }
        </div>
      </div>
    </main>
  );
};

export default MainNav;