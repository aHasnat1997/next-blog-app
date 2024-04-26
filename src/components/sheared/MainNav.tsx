"use client";

import Link from "next/link";
import Login from "../login";
import { useSession } from "next-auth/react";
import ProfileDropdown from "./ProfileDropdown";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

const MainNav = () => {
  type TUserStatus = 'loading' | 'unauthenticated' | 'authenticated';
  const session = useSession();
  const [userStatus, setUserStatus] = useState<TUserStatus>('loading');

  useEffect(() => {
    if (session.status === 'loading') setUserStatus('loading');
    if (session.status === 'unauthenticated') setUserStatus('unauthenticated');
    if (session.status === 'authenticated') setUserStatus('authenticated');
  }, [userStatus, session.status]);

  // console.log(session.data);

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
  ];

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
            userStatus === 'loading' ? <div className="p-1">
              <CgSpinner className="text-4xl animate-spin" />
            </div> :
              userStatus === 'unauthenticated' ? <Login /> :
                userStatus === 'authenticated' ? <ProfileDropdown
                  userImage={session.data?.user?.image || "https://xsgames.co/randomusers/avatar.php?g=pixel"}
                  name={session.data?.user?.name || "User Account"}
                /> : <></>
          }
        </div>
      </div>
    </main>
  );
};

export default MainNav;