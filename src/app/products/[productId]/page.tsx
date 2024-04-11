"use client";
import Modal from "@/components/Modal/Modal";
import Information from "@/components/ProductIdComponents/Information";
import { getProductById } from "@/lib/getRequiredProducts";
import { addToCart } from "@/state/cart/cartSlice";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface Params {
  params: { productId: string };
}

const ProductId = ({ params: { productId } }: Params) => {
  const product: Product = getProductById(parseInt(productId));
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(1);


  const handleAddToCart = (product: Product) => {
    for (let i = 0; i < count; i++) {
      dispatch(addToCart(product));
    }
    
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  const onDecrement = () => {
    if (count == 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <section
        className="p-10 bg-slate-100 max-w-6xl mx-auto flex sm:flex-row flex-col gap-5  items-center justify-center my-5"
        style={{ minHeight: `calc(100vh - 100px)` }}
      >
        <div className="w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="sm:w-3/4 sm:h-3/4 w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">{product.title}</h1>
          <p className="text-gray-400">{product.type}</p>
          <p className="my-4 font-bold">Select Size</p>
          <div className="flex flex-row gap-6">
            <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-600 hover:text-white duration-300">
              XS
            </button>
            <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-600 hover:text-white duration-300">
              S
            </button>
            <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-600 hover:text-white duration-300">
              M
            </button>
            <button className="bg-gray-300 p-2 rounded-full  hover:bg-gray-600 hover:text-white duration-300">
              L
            </button>
            <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-600 hover:text-white duration-300">
              XL
            </button>
          </div>
          <div>
            <div className="flex flex-row items-center gap-4">
              <button
                onClick={() => setCount(count + 1)}
                className="p-4  bg-slate-400"
              >
                +
              </button>
              <p>{count}</p>
              <button onClick={onDecrement} className="p-4 border border-black">
                -
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-gray-800 text-white p-2 hover:scale-105 transition-transform"
            >
              &#128722; Add To Cart
            </button>
            <Modal show={showModal} quantity={count} title={product.title} />
            <p className="text-xl font-bold">Price : {product.price}$</p>
          </div>
        </div>
      </section>
      <Information />
    </div>
  );
};

export default ProductId;
