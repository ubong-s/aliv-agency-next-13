"use client";

import { AddToCart } from "@/components";
import { useAppDispatch } from "@/redux/hooks";
import { addItemToCart } from "@/redux/slices/cartSlice";
import { CartItemProps, ProductPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

export const ProductCard = ({
  product: { _id, slug, image, name, price },
}: {
  product: ProductPayload;
}) => {
  const dispatch = useAppDispatch();

  const addToCart = (product: CartItemProps) => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} added to cart`);
  };

  return (
    <li className="group grid gap-4 items-start justify-items-start">
      <div className="overflow-hidden relative">
        <Link href={`/shop/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={440}
            height={440}
            className="w-full h-full object-cover hover:scale-110 transition-all"
          />
        </Link>
        <button
          className="invisible absolute bottom-8 right-8 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-spanish-white group-hover:visible"
          onClick={() =>
            addToCart({
              _id,
              name,
              amount: 1,
              image,
              price,
            })
          }
        >
          <AddToCart />
        </button>
      </div>
      <Link href={`/shop/${slug}`} className="w-full">
        <div className="flex justify-between items-center gap-8 w-full">
          <h4 className="text-xl">{name}</h4>
          <p className="text-xs ">{`$${price}.00 USD`}</p>
        </div>
      </Link>
    </li>
  );
};
