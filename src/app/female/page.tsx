import React from "react";
import { getFemaleProducts } from "@/lib/getRequiredProducts";
import Card from "@/components/Card/Card";
import Link from "next/link";

const Female = () => {
  const femaleProducts: Product[] = getFemaleProducts();
  return (
    <div className="max-w-6xl mx-auto flex sm:flex-row flex-col items-center sm:flex-wrap gap-10 my-10">
      {femaleProducts.map((product) => (
        <Link href={`/products/${product.productId}`} className="list-none" key={product.title}> 
        <div className="mb-10">
          <Card prod={product} />
        </div>
      </Link>
      ))}
    </div>
  );
};

export default Female;
