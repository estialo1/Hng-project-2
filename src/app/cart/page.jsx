"use client";
import { useContext } from "react";
import { CartStore } from "@/components/store/cartStore";
import Link from "next/link";
import { CartStoreComp } from "@/components/product/CartSingle";

export default function CartPage() {
  const [store, setter] = useContext(CartStore);
  let total = 0;
  store.forEach((element) => {
    total += element.price * element.qty;
  });
  return (
    <div className="min-h-screen p-10">
      <span>Home {">"} Cart</span>
      <h1 className="mb-10 pl-2 pt-3 text-2xl font-extrabold">Cart Items</h1>
      <div className=" max-w-full justify-between px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {store.map((item) => (
            <CartStoreComp key={item.id} data={item} />
          ))}
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6  md:mt-0 md:w-1/3">
          <h3 className="text-xl font-bold">Order summary</h3>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Delivery fee</p>
            <p className="text-gray-700">$0.00</p>
          </div>

          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${total} USD</p>
            </div>
          </div>
          <Link href="/checkout">
            <button className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-blue-50 cursor-pointer">
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
