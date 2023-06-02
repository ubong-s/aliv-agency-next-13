"use client";

import { useAppDispatch } from "@/redux/hooks";
import {
  removeItemFromCart,
  toggleCart,
  toggleCartItemAmount,
} from "@/redux/slices/cartSlice";
import { CartItemProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const CartItem = ({
  product: { _id, image, name, price, amount },
}: {
  product: CartItemProps;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (amount === 0) {
      dispatch(removeItemFromCart({ id: _id }));
    }
  }, [amount, dispatch, _id]);

  return (
    <div className="grid grid-cols-5 gap-4 items-start mb-6">
      <div className="col-span-1">
        <Image src={image} alt={name} width={100} height={100} />
      </div>
      <div className="col-span-3">
        <h4>{name}</h4>
        <p>{`$${price}.00 USD`}</p>
        <button
          className="pb-[2px] border-b border-b-black"
          onClick={() => dispatch(removeItemFromCart({ id: _id }))}
        >
          remove
        </button>
      </div>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          const value = Number(e.target.value);

          dispatch(toggleCartItemAmount({ id: _id, amount: value }));
        }}
        className="col-span-1 border border-ablack rounded-full px-4 py-2"
      />
    </div>
  );
};
