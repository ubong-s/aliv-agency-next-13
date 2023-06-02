"use client";

import { LinkButton } from "@/components";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeCart } from "@/redux/slices/cartSlice";
import { CartItem } from "./CartItem";

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
          <div className="h-full w-full relative flex items-center justify-center">
            <button
              className="absolute top-0 right-0 pb-[2px] border-b border-b-black"
              onClick={() => dispatch(closeCart())}
            >
              close
            </button>
            <div className="grid gap-4 justify-items-center">
              <h3 className="uppercase text-xl lg:text-2xl">
                Your Cart is empty
              </h3>
              <LinkButton
                link="/shop"
                linkText="Go Shopping"
                variant="primary"
                onClick={() => dispatch(closeCart())}
              />
            </div>
          </div>
        )}

        {products.length > 0 && (
          <div className="flex flex-col gap-8 h-full">
            <div className="flex items-center justify-between">
              <h3>Cart</h3>
              <button
                className="pb-[2px] border-b border-b-black"
                onClick={() => dispatch(closeCart())}
              >
                close
              </button>
            </div>

            <div className="cart__list flex-grow pr-4 overflow-y-auto">
              {products.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <h5>Subtotal</h5>
              <button>${totalAmount}.00 USD</button>
            </div>
            <LinkButton
              link="/checkout"
              linkText="Proceed to checkout"
              variant="primary"
              onClick={() => dispatch(closeCart())}
            />
          </div>
        )}
      </div>
    </div>
  );
};
