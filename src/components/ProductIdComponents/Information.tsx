import React, { useState } from "react";

const Information = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <section className="sm:h-screen bg-slate-100 max-w-6xl mx-auto py-10 my-5">
        <div className="relative flex items-center w-10/12 mx-auto my-8">
          <h2 className="z-0 absolute text-8xl text-slate-200 hidden md:block">
            Overview
          </h2>
          <p className="z-10 text-4xl font-bold">Product Information</p>
        </div>
        <hr className="my-10" />
        <div className="w-10/12 mx-auto flex flex-col gap-10">
          <div className="flex flex-row gap-8">
            <h1 className="font-bold text-xl w-1/2">PRODUCT DETAILS</h1>
            <div className="w-1/2 text-sm sm:text-base">
              <p
                className={`${
                  isExpanded ? "" : "line-clamp-3"
                } transition-all duration-300`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-500 mt-2"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <h1 className="font-bold text-xl w-1/2">PRODUCT CARE</h1>
            <ol className="w-1/2 text-sm sm:text-base">
              <li className="text-sm sm:text-base">
                Hand wash using cold water.
              </li>
              <li className="text-sm sm:text-base">Do not using bleach.</li>
              <li className="text-sm sm:text-base">Iron on low temperature.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
