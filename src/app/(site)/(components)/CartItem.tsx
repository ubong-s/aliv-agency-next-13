"use client";

import { CartItemProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

export const CartItem = ({
  product: { _id, image, name, price, amount },
}: {
  product: CartItemProps;
}) => {
  const [input, setInput] = useState(amount);

  return (
    <div className="grid grid-cols-5 gap-4 items-start mb-6">
      <div className="col-span-1">
        <Image src={image} alt={name} width={100} height={100} />
      </div>
      <div className="col-span-3">
        <h4>{name}</h4>
        <p>{`$${price}.00 USD`}</p>
      </div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(input)}
        className="col-span-1 border border-ablack rounded-full px-4 py-2"
      />
    </div>
  );
};
