"use client";
import CartCard from "@/components/CartComponents/CartCard";
import SummaryCard from "@/components/CartComponents/SummaryCard";
import { RootState } from "@/state/store";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "@/state/cart/cartSlice";
import Link from "next/link";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      className="sm:max-w-6xl sm:mx-auto my-8"
      style={{ minHeight: `calc(100vh - 80px)` }}
    >
      {cart.cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full gap-5">
          <h1 className="text-4xl font-bold text-center mt-8">Cart is Empty</h1>
          <h1 className="font-bold text-8xl text-center">&#128717;</h1>
          <Link
            href="/products"
            className="text-left mt-6 sm:text-4xl text-2xl text-gray-600 hover:underline"
          >
            &#x2190; Go Back To Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between ">
            <div className="flex flex-col gap-6 ">
              {cart.cartItems.map((cart) => (
                <CartCard product={cart} key={cart.productId} />
              ))}
            </div>
            <div className="flex items-center justify-center my-5 h-auto">
              <SummaryCard
                total={cart.cartTotalAmount}
                quantity={cart.cartTotalQuantity}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClearCart}
              className="bg-gray-800 text-white p-4 hover:scale-105 transition-transform my-8"
            >
              &#128465; Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
