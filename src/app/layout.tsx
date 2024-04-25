import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/sheared/MainNav";
import Footer from "@/components/sheared/Footer";
import { Toaster } from "@/components/ui/toaster";
import SessionWrapper from "@/components/sheared/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/blogger-round-color-icon.png",
  title: "Next Blog App",
  description: "Blog app by create next app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <main className="min-h-screen flex flex-col gap-4">
            <div className="bg-background">
              <MainNav />
              {children}
            </div>
            <Footer />
          </main>
          <Toaster />
        </body>
      </html>
    </SessionWrapper>

  );
}
