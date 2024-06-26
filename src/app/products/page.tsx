import Card from "@/components/Card/Card";
import getAllProducts from "@/lib/getRequiredProducts";
import Link from "next/link";
import React from "react";

const Products = () => {
  const allProducts: Product[] = getAllProducts();
  return (
    <div className="max-w-6xl mx-auto flex sm:flex-row flex-col items-center sm:flex-wrap gap-10 my-10">
      {allProducts.map((product) => (
        <Link
          href={`/products/${product.productId}`}
          className="list-none"
          key={product.productId}
        >
          <div className="mb-10">
            <Card prod={product} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
