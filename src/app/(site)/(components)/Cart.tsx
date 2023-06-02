"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeCart } from "@/redux/slices/cartSlice";
import { CartWithItems } from "./CartWithItems";
import { CartEmpty } from "./CartEmpty";

export const Cart = () => {
  const {
    items: products,
    cartOpen,
    totalAmount,
  } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen  p-4 lg:p-12 transition-opacity ${
        cartOpen ? "opacity-100 z-30" : "opacity-0 -z-30"
      }`}
    >
      <div
        className="absolute bg-black opacity-50 top-0 left-0 h-full w-full"
        onClick={() => dispatch(closeCart())}
      ></div>
      <div className="absolute top-4 right-4 bottom-4 left-4 bg-white p-8 lg:right-12 lg:top-12 lg:bottom-12 lg:left-auto lg:w-[500px]">
        {products.length < 1 && (
          <CartEmpty closeCart={() => dispatch(closeCart())} />
        )}

        {products.length > 0 && (
          <CartWithItems
            products={products}
            closeCart={() => dispatch(closeCart())}
            totalAmount={totalAmount}
          />
        )}
      </div>
    </div>
  );
};
