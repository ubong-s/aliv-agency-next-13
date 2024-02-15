"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  calculateTotals,
  closeCart,
  setCartItems,
} from "@/redux/slices/cartSlice";
import { CartWithItems } from "./CartWithItems";
import { CartEmpty } from "./CartEmpty";
import { useEffect } from "react";

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cartItemsJson = localStorage.getItem("cart-items");
    let cartItems = cartItemsJson !== null && JSON.parse(cartItemsJson);

    return cartItems;
  }
};

export const Cart = () => {
  const {
    items: products,
    cartOpen,
    totalAmount,
  } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  useEffect(() => {
    if (getLocalStorage().length > 0) {
      dispatch(setCartItems(getLocalStorage()));
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (cartOpen) {
      document.body.classList.add("menuCartOpen");
    } else {
      document.body.classList.remove("menuCartOpen");
    }
  }, [cartOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen  p-4 lg:p-12 transition-opacity ${
        cartOpen ? "opacity-100 z-30" : "opacity-0 -z-30"
      }`}
    >
      <div
        className="backdrop-blur-sm absolute bg-black/30  top-0 left-0 h-full w-full transition-all"
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
