import React from "react";

const Newsletter = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center">
      <div className="absolute align-self-middle opacity-70 text-slate-300">
        <h1 className="font-bold text-7xl text-center sm:text-9xl">Newsletter</h1>
      </div>
      <div className="z-10 text-center flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Subscribe Our Newsletter</h1>
        <p>Get the latest information and promo offers directly</p>
        <form action="">
          <input
            type="text"
            placeholder="Enter Email Here"
            className="bg-white text-black border border-slate-600 focus:outline-none w-72 py-2 px-2 mr-3"
          />
          <button className="bg-gray-800 text-white p-2 hover:scale-105 transition-transform">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
