import React, { useState } from "react";
import Navlinks from "./Navlinks";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around py-5 max-w-5xl mx-auto h-20">
      <Link href="/">
        <Image
          src="/Logo.webp"
          alt="Dine Mart"
          width={150}
          height={150}
          className="w-auto h-auto"
        />
      </Link>

      <Navlinks />

      <form
        action=""
        className="border rounded-md border-gray-400 hidden sm:block"
      >
        <button className="">&#x1F50E;</button>
        <input
          type="text"
          className="w-60 px-3 pr-6 text-sm focus:outline-none"
          placeholder="What Are You Looking For"
        />
      </form>

      <div
        className="hidden sm:block text-lg"
      >
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
