"use client";
import { useContext, useEffect, useState } from "react";
import { CartStore } from "@/components/store/cartStore";

export default function CheckoutPage() {
  const [store, setter] = useContext(CartStore);
  return (
    <div className=" min-h-screen p-10">
      <header className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-2xl font-bold">Go Fashion</h1>
      </header>
      <div className="flex space-x-3 w-full">
        <div className="hidden md:flex md:w-1/2">
          <img
            src={store[Math.floor(Math.random() * store.length)]?.img}
            alt=""
            className="w-full h-[550px] object-cover"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <form>
            <h2 className="text-xl font-semibold mt-6 mb-4">
              Choose your payment method
            </h2>

            <div className="gap-y-4">
              <div className="flex relative flex-col space-y-3  p-4 border rounded-lg cursor-pointer hover:bg-gray-50  border-blue-400">
                <span>VISA ****** ****** ***** 1234 (Default)</span>
                <p>Expires 09/68 Default</p>
              </div>
              <div className="flex relative flex-col space-y-3  p-4 border rounded-lg cursor-pointer hover:bg-gray-50  border-blue-400">
                <span>VISA ****** ****** ***** 1234 (Default)</span>
                <p>Expires 09/68 Default</p>
              </div>
              <div className="flex relative flex-col space-y-3  p-4 border rounded-lg cursor-pointer hover:bg-gray-50  border-blue-400">
                <span>VISA ****** ****** ***** 1234 (Default)</span>
                <p>Expires 09/68 Default</p>
              </div>
              <div className="flex relative flex-col space-y-3  p-4 border rounded-lg cursor-pointer hover:bg-gray-50  border-blue-400">
                <span>VISA ****** ****** ***** 1234 (Default)</span>
                <p>Expires 09/68 Default</p>
              </div>

              <div className="block p-4 border rounded-lg cursor-pointer ">
                <span>Add Payment Method</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 mt-6 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
