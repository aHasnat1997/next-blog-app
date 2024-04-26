"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";

const Login = () => {
  const socialBtn = [
    {
      icon: <FaGoogle />,
      title: 'Login with Google',
      provider: 'google'
    },
    {
      icon: <FaFacebook />,
      title: 'Login with Facebook',
      provider: 'facebook'
    },
    {
      icon: <FaGithub />,
      title: 'Login with Github',
      provider: 'github'
    },
  ];

  return (
    <>
      <Drawer>
        <DrawerTrigger className="font-semibold border rounded-lg py-2 px-6 duration-200 active:scale-95 hover:bg-gray-800">
          Login
        </DrawerTrigger>
        <DrawerContent>

          <DrawerHeader>
            <DrawerTitle className="text-center text-2xl">
              Create an account?
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Create an account with your social account and enjoy
            </DrawerDescription>
          </DrawerHeader>

          <section className="py-6 space-y-4">
            {
              socialBtn.map((btn, i) => <Button
                key={i}
                variant={'outline'}
                className="w-96 mx-auto flex items-center gap-4 border rounded-full py-6 text-lg"
                onClick={() =>
                  signIn(
                    btn.provider,
                    { callbackUrl: process.env.BASE_URL }
                  )}
              >
                {btn.icon}
                {btn.title}
              </Button>)
            }
          </section>

          <DrawerFooter>
            <p className="text-center text-sm text-gray-400">Click “Login” to agree to Next Blog App Terms of Service and acknowledge <br /> that Next Blog App Privacy Policy applies to you.</p>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Login;