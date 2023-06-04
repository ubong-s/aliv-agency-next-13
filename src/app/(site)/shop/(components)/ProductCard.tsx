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
    <li className="grid gap-4 items-start justify-items-start">
      <div className="overflow-hidden">
        <Link href={`/shop/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={440}
            height={440}
            className="w-full h-full object-cover hover:scale-110 transition-all"
          />
        </Link>
      </div>

      <div className="flex justify-between items-center gap-8 w-full">
        <Link href={`/shop/${slug}`}>
          <h4 className="text-xl">{name}</h4>
        </Link>
        <span className="flex items-center gap-2">
          <p className="text-xs ">{`$${price}.00 USD`}</p>

          <button
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
        </span>
      </div>
    </li>
  );
};
