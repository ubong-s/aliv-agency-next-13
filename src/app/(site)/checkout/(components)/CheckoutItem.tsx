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

export const CheckoutItem = ({
  product: { _id, image, name, price, amount },
}: {
  product: CartItemProps;
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center mb-6">
      <div className="col-span-1">
        <Image src={image} alt={name} width={100} height={100} />
      </div>
      <div className="col-span-3">
        <h4>{name}</h4>
        <p className="flex justify-between items-center">
          <span>
            {`$${price.toFixed(2)} USD`} X {amount}
          </span>
          <span className="font-semibold">
            {(price * amount).toFixed(2)}USD
          </span>
        </p>
      </div>
    </div>
  );
};
