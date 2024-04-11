import React from "react";
import {getMaleProducts} from "@/lib/getRequiredProducts";
import Card from "@/components/Card/Card";
import Link from "next/link";

const Male = () => {
  const maleProducts: Product[] = getMaleProducts();
  return (
    <div className="max-w-6xl mx-auto flex sm:flex-row flex-col items-center sm:flex-wrap gap-10 my-10">
      {maleProducts.map((product) => (
        <Link href={`/products/${product.productId}`} className="list-none" key={product.title}> 
          <Card prod={product} />
        </Link>
      ))}
    </div>
  );
};

export default Male;
