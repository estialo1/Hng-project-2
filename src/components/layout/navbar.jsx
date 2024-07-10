"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { CartStore } from "@/components/store/cartStore";

export const Navbar = () => {
  const [store, setter] = useContext(CartStore);
  const [active, setactive] = useState(false);

  return (
    <nav className="bg-[#E7E6E6] pb-2 border-gray-200">
      <div className=" flex flex-wrap items-center justify-between  p-4 gap-x-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold flex flex-row justify-center items-center space-x-2 gap-x-4 whitespace-nowrap ">
            Go Fashion
            <svg
              width="31"
              height="24"
              viewBox="0 0 31 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0624 23.1255C12.5313 23.124 10.0083 22.8392 7.54044 22.2765C7.12406 22.1838 6.75211 21.951 6.48674 21.617C6.22137 21.283 6.07865 20.8681 6.08244 20.4415V12.6675C1.36744 12.0815 0.0894371 7.3805 0.0024371 5.4955C-0.0156378 5.10978 0.0670718 4.72601 0.24242 4.38198C0.417768 4.03794 0.679706 3.74552 1.00244 3.5335C2.61834 2.45941 4.29002 1.4717 6.01044 0.574502C6.80459 0.241066 7.65034 0.0472203 8.51044 0.00150207C8.65347 -0.00643011 8.7965 0.0171241 8.92944 0.0705023L9.24644 0.196502C13.0826 1.31995 17.1648 1.28725 20.9824 0.102502C21.1094 0.0505019 21.2454 0.0225016 21.3824 0.0215016H21.4064C22.3047 0.0420611 23.1933 0.211006 24.0364 0.521502C24.0794 0.536747 24.1212 0.55513 24.1614 0.576502C25.8554 1.4785 27.5014 2.4665 29.0914 3.5405C29.412 3.75354 29.6718 4.04616 29.8453 4.38973C30.0189 4.7333 30.1002 5.11605 30.0814 5.5005C29.9494 7.8355 28.5114 12.1005 24.0914 12.6625V20.4435C24.0925 20.8689 23.9481 21.2818 23.6822 21.6138C23.4163 21.9457 23.0448 22.1768 22.6294 22.2685C20.1474 22.8365 17.6094 23.1235 15.0634 23.1255M8.08244 20.3475C12.6942 21.3873 17.4799 21.3846 22.0904 20.3395V11.7205C22.0904 11.4553 22.1958 11.2009 22.3833 11.0134C22.5709 10.8259 22.8252 10.7205 23.0904 10.7205C27.7284 10.7205 28.0704 5.6075 28.0844 5.3895C28.0842 5.35273 28.0748 5.31659 28.0572 5.28432C28.0396 5.25204 28.0142 5.22462 27.9834 5.2045C26.4666 4.18081 24.8978 3.23621 23.2834 2.3745C22.928 2.24811 22.5619 2.15439 22.1894 2.0945C22.1494 2.1575 22.1054 2.2195 22.0574 2.2785L16.6374 8.9785C16.4559 9.20292 16.2279 9.38538 15.9692 9.51334C15.7104 9.64131 15.427 9.71175 15.1385 9.71982C14.85 9.7279 14.5631 9.67342 14.2976 9.56013C14.0321 9.44683 13.7943 9.27741 13.6004 9.0635L7.52044 2.3535C7.47518 2.30368 7.43246 2.25161 7.39244 2.1975C7.20656 2.25037 7.02363 2.31313 6.84444 2.3855C5.21794 3.24324 3.63592 4.18277 2.10444 5.2005C2.07049 5.22123 2.0428 5.25078 2.02431 5.286C2.00582 5.32122 1.99722 5.36079 1.99944 5.4005C1.99944 5.4565 2.37244 10.7265 7.07944 10.7265C7.34465 10.7265 7.59901 10.8319 7.78654 11.0194C7.97408 11.2069 8.07944 11.4613 8.07944 11.7265L8.08244 20.3475ZM8.63444 2.0935L14.3414 8.3915C14.4383 8.4984 14.5572 8.58307 14.6898 8.63971C14.8225 8.69635 14.9659 8.72361 15.1101 8.71962C15.2543 8.71563 15.3959 8.68048 15.5253 8.6166C15.6546 8.55271 15.7686 8.46159 15.8594 8.3495L20.8044 2.2375C20.2814 2.37907 19.7534 2.50148 19.2214 2.6045L15.0814 7.7205L10.3844 2.5355C9.79539 2.41181 9.21158 2.26435 8.63444 2.0935Z"
                fill="black"
              />
            </svg>
          </span>
        </Link>
        <div className="relative  hidden md:block flex-grow">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#9898984D] flex-grow focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        <div className="flex space-x-4">
          <div className="border-[1px]  md:hidden  rounded-lg border-black  p-2 flex justify-center items-center ps-3 cursor-pointer">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <Link href="/cart">
            <div className="relative flex flex-row justify-center space-x-2 p-1 border rounded-lg items-center border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="z-10 font-extrabold text-xl  flex px-[0.35rem] p h-[0.87rem] rounded-md items-center justify-center  top-0 -right-1">
                {store.length && store.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {active && (
        <div className={`relative flex mx-10  md:hidden  flex-grow`}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#9898984D] flex-grow focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      )}
    </nav>
  );
};
