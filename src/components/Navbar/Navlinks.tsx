"use client";
import React, { useState } from "react";
import Link from "next/link";
import SingleLink from "./SingleLink";
import CartIcon from "./CartIcon";

const links = [
  {
    title: "Male",
    path: "/male",
  },
  {
    title: "Female",
    path: "/female",
  },
  {
    title: "All Products",
    path: "/products",
  },
];

const Navlinks = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="hidden sm:block">
        <ul className="list-none flex flex-row gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <SingleLink path={link.path} title={link.title}/>
                
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:hidden flex flex-col">
        <button onClick={() => setOpen((prev) => !prev)} className="text-2xl right-full">
          &#9776;
        </button>
        {open && (
          <div className="absolute right-0 top-14 flex flex-col bg-gray-200 rounded-xl p-5 items-center">
            <li onClick={() => setOpen((prev) => !prev)} className="list-none">
              <CartIcon/>
            </li>
            {links.map((link) => (
              <li key={link.path} onClick={() => setOpen((prev) => !prev)} className="list-none my-3 text-center">
                <SingleLink path={link.path} title={link.title}/>
              </li>
              
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navlinks;
