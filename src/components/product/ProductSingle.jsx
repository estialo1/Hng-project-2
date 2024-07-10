"use client";
import { useContext, useEffect, useState } from "react";
import { CartStore } from "@/components/store/cartStore";

export const ProductSingle = ({ data }) => {
  const [store, setter] = useContext(CartStore);
  const [exist, setexist] = useState(false);

  const handleClick = () => {
    store.map((i) => {
      if (i.name === data.name) return setexist(true);
    });

    if (!exist) {
      data.qty = 1;
      setter((prev) => [...prev, data]);
      setexist(true);
    } else {
      const updatedList = store.map((i) => {
        if (i.name === data.name) {
          i.qty += 1;
        }
        return i;
      });
      setter((prev) => updatedList);
    }
  };

  return (
    <div className="w-[400px] h-[400px] border border-black flex overflow-hidden flex-col justify-center  p-1 rounded-2xl">
      <img
        alt=""
        className="rounded-2xl max-h-1/2 h-[70%] object-cover"
        src={data.img}
      />
      <div className="text-lg flex justify-center flex-col items-center">
        <h4>{data.name}</h4>
        <span>${data.price}</span>
        <button
          onClick={handleClick}
          type="button"
          className="text-white bg-gray-900 cursor-pointer rounded-lg w-full text-sm px-4 py-2 text-center "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
