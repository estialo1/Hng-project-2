import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col md:px-10  lg:px-30 pt-20">
      <div className="text-white bg-black p-10 flex flex-col sm:flex-row  space-x-9 justify-between rounded-2xl">
        <h1 className=" text-xl lg:text-4xl  font-extrabold font-serif">
          STAY UP TO DATE ABOUT LATEST TRENDS
        </h1>
        <form className="flex flex-col max-w-1/2 min-w-[300px] gap-1">
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6  stroke-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg flex-grow bg-[#ffffff]  focus:ring-gray-50 focus:outline-0"
              placeholder="Enter your Email address"
            />
          </div>
          <button
            type="button"
            className="text-black bg-white rounded-md cursor-pointer"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
      <div className="flex flex-col items-start justify-center mt-5">
        <h3 className="font-extrabold font-2xl">Go Fashion</h3>
        <p className="w-[150px] flex flex-wrap">
          We have clothes that suite your style{" "}
        </p>
      </div>
    </div>
  );
};
