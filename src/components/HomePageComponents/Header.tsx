import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      style={{ minHeight: `calc(100vh - 80px)` }}
      className="max-w-6xl sm:mx-auto flex flex-row justify-center items-center gap-8 mx-10"
    >
      <div className="flex flex-col gap-7 items-start">
        <h1 className="text-5xl font-bold">An Industrial Take On Streetwear</h1>
        <p className="text-gray-600">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link href='/products' className="bg-gray-800 text-white p-4 hover:scale-105 transition-transform">
          &#128722; Start Shopping
        </Link>
      </div>
        <div className="relative h-3/4 w-3/4 sm:flex hidden items-center">
          <div className="absolute w-5/6 h-5/6 rounded-full bg-amber-200 opacity-30 z-0 right-16 bottom-10"></div>
          <Image
            src="/header.webp"
            alt="Heade Image"
            width={300}
            height={400}
            className="w-full h-3/4 z-20"
          />
        </div>
    </header>
  );
};

export default Header;
