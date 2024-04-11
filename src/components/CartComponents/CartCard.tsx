import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCartItemQuantity,
  deleteCartItem,
  increaseCartItemQuantity,
} from "@/state/cart/cartSlice";
import { RootState } from "@/state/store";

type ProtoTypes = {
  product: Product;
};

const CartCard = ({ product }: ProtoTypes) => {

  const dispatch = useDispatch();

  const handleDeleteItem = (product: Product) => {
    dispatch(deleteCartItem(product));
  };

  const handleIncreaseCart = (product: Product) => {
    dispatch(increaseCartItemQuantity(product));
  };

  const handleDecreaseCart = (product: Product) => {
    dispatch(decreaseCartItemQuantity(product));
  };

  return (
    <div className="flex flex-col sm:flex-row sm:gap-16 items-center sm:items-start ">
      <div className="flex flex-col sm:flex-row sm:gap-8 items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="sm:w-auto h-full rounded-xl w-auto "
        />
        <div className="flex flex-col justify-between sm:my-2 text-center sm:text-left">
          <h2 className="text-gray-800 font-bold sm:text-2xl text-xl my-4">
            {product.title}
          </h2>
          <p className="text-gray-600">{product.type}</p>
          <p className="font-bold">Delivery Estimation</p>
          <p className="text-yellow-400 font-bold">5 Working Days</p>
          <p className="font-bold text-xl">${product.price}</p>
          <p>Quantity : {product.quantity}</p>
          <Link
            href={`/products/${product.productId}`}
            className="underline text-gray-400"
          >
            View Product
          </Link>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col gap-16 items-center">
        <button
          onClick={() => handleDeleteItem(product)}
          className="rounded-full p-3 w-16 h-16 sm:mt-5 text-xl hover:bg-gray-300 duration-200"
        >
          &#128465;
        </button>
        <div className="flex flex-col gap-2 items-center py-4 sm:py-0">
          <p className="text-gray-400">Item Quantity:</p>
          <div className="flex flex-row items-center gap-4">
            <button
              onClick={() => handleIncreaseCart(product)}
              className="p-4  bg-slate-400"
            >
              +
            </button>
            <p>{product.quantity}</p>
            <button
              onClick={() => handleDecreaseCart(product)}
              className="p-4 border border-black"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
