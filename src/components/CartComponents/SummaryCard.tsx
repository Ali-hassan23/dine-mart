import Link from "next/link";
import React from "react";

type PropTypes = {
  total: number;
  quantity: number;
};
const SummaryCard = (props: PropTypes) => {
  return (
    <div className="flex flex-col gap-5 w-72 text-xl bg-slate-100 p-5">
      <h2 className="font-bold text-3xl">Order Summary</h2>
      <section className="flex flex-row justify-between">
        <div>
          <p>Quantity</p>
          <p>Sub Total</p>
        </div>
        <div>
          <p>{props.quantity} Products</p>
          <p>${props.total}</p>
        </div>
      </section>
      <button className="bg-gray-800 text-white p-2 hover:scale-105 transition-transform">
        Proceed
      </button>
      <Link
        href="/products"
        className="text-left mt-6 text-gray-600 hover:underline"
      >
        &#x2190; Go Back To Shopping
      </Link>
    </div>
  );
};

export default SummaryCard;
