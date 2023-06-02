"use client";

import { useState } from "react";
import Image from "next/image";
import { CartItemProps, ProductProps } from "@/types";
import { PortableText } from "@portabletext/react";
import { useAppDispatch } from "@/redux/hooks";
import { addItemToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";

export const ProductDetails = ({
  details: { _id, name, image, description, price, content },
}: {
  details: ProductProps;
}) => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<number | string>(1);

  const addToCart = (product: CartItemProps) => {
    dispatch(addItemToCart(product));
  };

  return (
    <section className="py-12 lg:pt-24">
      <div className="main__container grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16 relative ">
        <div className="col-span-1 lg:sticky lg:top-16">
          <Image
            src={image}
            alt={name}
            width={780}
            height={695}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 lg:py-16">
          <p className="uppercase">{`$${price}.00 USD`}</p>
          <h1 className="my-6 text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug">
            {name}
          </h1>
          <p className="text-lg">{description}</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const product = {
                _id,
                name,
                price,
                image,
                amount: Number(amount),
              };
              addToCart(product);
              toast(`${name} added to cart`);
            }}
            className="flex items-center gap-4 my-12 lg:my-20"
          >
            <input
              type="number"
              className="border border-ablack rounded-full px-4 py-3 lg:px-6 lg:py-4"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min={1}
              max={10}
            />
            <button
              type="submit"
              className="inline-block  border border-ablack rounded-full  transition-all px-4 py-3 lg:px-6 lg:py-4 bg-transparent hover:bg-ablack hover:text-white capitalize"
            >
              Add to cart
            </button>
          </form>

          <div className="product__content flex flex-col gap-4">
            <PortableText value={content} />
          </div>
        </div>
      </div>
    </section>
  );
};
