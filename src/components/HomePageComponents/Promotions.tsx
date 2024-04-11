import Image from "next/image";
import React from "react";

const Promotions = () => {
  return (
    <div className="sm:min-h-screen max-w-6xl mx-auto ">
      <div className="text-center my-8">
        <p className="text-blue-700 font-bold">Promotions</p>
        <h1 className="text-3xl font-bold">Our Promotions Event</h1>
      </div>

      <div className="flex sm:flex-row flex-col gap-5">
        <div className="flex flex-col gap-5 mx-5 sm:w-1/2">
          <div className="bg-slate-300 flex flex-row h-52">
            <p className="flex flex-col justify-center gap-3 p-5">
              <span className="font-bold text-2xl">Get Upto 60% off</span>
              <span>For The Summer Season</span>
            </p>
            <Image
              src="/eventpics/event1.webp"
              alt="Event 1"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
          </div>
          <div className="w-full bg-gray-800 text-white flex flex-col text-center h-52 justify-center items-center">
            <h1 className="font-bold text-4xl mb-4">Get Upto 30% off</h1>
            <p>USE PROMO CODE</p>
            <div className="bg-slate-400 rounded-xl w-1/2">
              <p className="py-2">DINEMARTWEEKENDSALE</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row mx-5 gap-5 sm:w-1/2">
          <div className="bg-orange-200 w-1/2 flex flex-col justify-between">
            <p className="flex flex-col p-5">
              <span className="text-xl">Flex Sweatshirt</span>
              <span className="line-through">$100.00</span>
              <span className="font-bold">$75.00</span>
            </p>
            <Image
              src="/eventpics/event2.webp"
              alt="Event 1"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
          </div>
          <div className="bg-purple-200 w-1/2 flex flex-col justify-between">
            <p className="flex flex-col p-5">
              <span className="text-xl">Flex Push Button Bomber</span>
              <span className="line-through">$225.00</span>
              <span className="font-bold">$190.00</span>
            </p>
            <Image
              src="/eventpics/event3.webp"
              alt="Event 1"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
