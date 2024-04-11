'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SingleLink = (item: items) => {
  const pathName = usePathname();
 
  return(
    <Link
      href={item.path}
      className={`${
        pathName === item.path
          ? "text-white bg-black"
          : "hover:text-black hover:underline"
      } py-2 px-3 rounded-3xl duration-300 text-center`}
    >
      {item.title}
    </Link>
  );
};

type items = {
  title: string;
  path: string;
};

export default SingleLink;
