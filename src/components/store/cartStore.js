"use client";
import { createContext, useState } from "react";

export const CartStore = createContext([]);

export default function CartStoreProvider({ children }) {
  const [store, setstore] = useState([]);

  return (
    <CartStore.Provider value={[store, setstore]}>
      {children}
    </CartStore.Provider>
  );
}
