import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropTypes = {
  product: Product;
};

const SliderCard = ({ product }: PropTypes) => {
  return (
    <div className="flex flex-col w-56 items-center gap-5">
      <Image
        src={product.image}
        alt={product.title}
        height={200}
        width={200}
        className="h-auto w-auto"
      />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-400">{product.type}</p>
        <Link href={`/products/${product.productId}`} className="bg-gray-800 text-white p-2 hover:scale-105 transition-transform">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;
