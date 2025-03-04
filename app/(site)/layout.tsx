import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Great App",
  description: "Generated by Next and Sanity",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pages = await getPages();
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-5xl mx-auto py-20`}
      >
        <header className="flex items-center justify-between">
          <Link href="/" className=" bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-3xl font-extrabold">Home</Link>
          <div className="flex items-center gap-4 text-sm">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-3xl text-extrabold hover:underline">{page.title}</Link> ))} 
          </div>
          </header>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {children}</main>
      </body>
    </html>
  );
}
