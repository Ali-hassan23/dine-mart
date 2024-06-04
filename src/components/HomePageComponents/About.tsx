import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen mt-10 relative">
      <section className="">
        <h1 className="sm:text-5xl text-right font-bold text-3xl">
          Unique And Authentic <br /> Vintage Designer Jewellery
        </h1>
        <div className="bg-gray-100 p-10">
          <h1 className="absolute z-0 w-40 text-gray-300 text-wrap sm:text-8xl text-6xl opacity-35">
            Differet From Others
          </h1>
          <div className="max-w-6xl mx-auto z-10">
            <div className="flex flex-col gap-7 sm:flex-row sm:justify-between my-8 items-center">
              <div className="flex flex-row sm:flex-col sm:gap-5 gap-2">
                <div className="w-48">
                  <h1 className="font-bold text-xl">
                    Using Good Quality Materials
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="w-48">
                  <h1 className="font-bold text-xl">100% Handmade Products</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col sm:gap-5 gap-2">
                <div className="w-48">
                  <h1 className="font-bold text-xl">Modern Fashion Design</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="w-48">
                  <h1 className="font-bold text-xl">
                    Discount for Bulk Orders
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <Image
                src="/brushed-bomber.png"
                alt="Image here"
                width={300}
                height={300}
                className="w-auto h-auto"
              />
              <div className="sm:w-48 flex flex-col items-center">
                <p className="mx-8 my-4 sm:m-0">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <Link href="/products" className="bg-gray-800 text-white p-2 hover:scale-105 transition-transform my-5">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
