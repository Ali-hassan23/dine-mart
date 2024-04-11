"use client";
import { RootState } from "@/state/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div>
      {/* {cart.cartTotalQuantity > 0 && (
        <p className="rounded-full bg-orange-700 right-full">
          {cart.cartTotalQuantity}
        </p>
      )} */}
      <div className="bg-gray-400 rounded-full p-1 hover:bg-gray-800 duration-300">
        <Link
          className="rounded-full focus:outline-none p-2 text-center"
          href="/cart"
        >
          &#128722;
        </Link>
      </div>
    </div>
  );
};
// rounded-full h-5 w-5 bg-orange-500 text-white text-center left-5 relative top-full"
export default CartIcon;
