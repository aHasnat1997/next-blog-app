"use client";

import {
  LifeBuoy,
  LogOut,
  Settings,
  User,
  NotebookPen
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "../ui/avatar";
import { signOut } from "next-auth/react";
import Link from "next/link";

const ProfileDropdown = ({ userImage, name }: { userImage: string, name: string }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={userImage} alt="User Profile" />
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 bg-background">
          <DropdownMenuLabel className="text-center">{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>

          <Link href={'/blog/create-blog'}>
            <DropdownMenuItem className="cursor-pointer">
              <NotebookPen className="mr-2 h-4 w-4" />
              <span>Create Blog</span>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem className="cursor-pointer">
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
