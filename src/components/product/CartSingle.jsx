"use client";

import { useState, useContext } from "react";
import { CartStore } from "@/components/store/cartStore";

export const CartStoreComp = ({ data }) => {
  const [store, setter] = useContext(CartStore);
  const [num, setnum] = useState(data.qty);
  const handleTrashClick = () => {
    setter(store.filter((i) => i.name != data.name));
  };
  const solve = (action) => {
    if (action == "add") {
      setter(
        store.map((i) => {
          if (i.name == data.name) {
            i.qty += 1;
            setnum(i.qty);
          }
          return i;
        })
      );
    } else if (num > 1) {
      setter(
        prev.map((element) => {
          if (i.name == i.name) {
            i.qty -= 1;
            setnum(i.qty);
          }
          return i;
        })
      );
    }
  };

  return (
    <div className="justify-between mb-6 rounded-lg border-[1px] border-black max-h-[200px] bg-white p-2 sm:p-6 shadow-md flex sm:flex sm:justify-start overflow-hidden">
      <img
        src={data.img}
        alt="product-image"
        className=" object-cover rounded-lg h-29 w-[90px] mr-1 sm:w-40"
      />
      <div className=" text-xs sm:text-base flex w-full justify-between">
        <div className="mt-5 sm:mt-0 flex flex-col justify-between">
          <h2 className="md:text-lg text-sm font-bold text-gray-900">
            Nike Air Max 2019
          </h2>
          <p className="mt-1  text-gray-700">size : medium</p>
          <p className="mt-1 text-gray-700">color : red</p>
          <p className="mt-1  text-black">${data.price}</p>
        </div>
        <div className="mt-4 flex flex-col justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center justify-end space-x-4">
            <svg
              onClick={handleTrashClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
          <div className="flex items-center p-2 bg-gray-400 rounded-xl text-black">
            <span
              onClick={() => solve("sub")}
              className="cursor-pointer rounded-l py-1 px-2 font-black duration-100 "
            >
              -
            </span>
            <input
              className="h-6 w-8 border bg-transparent border-none font-black  text-center text-xs outline-none"
              type="number"
              value={num}
              min="1"
              aria-label="number"
            />
            <span
              onClick={() => solve("add")}
              className="cursor-pointer rounded-r py-1 px-2 font-black duration-100 "
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
