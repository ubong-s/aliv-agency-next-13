import { ProductPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

export const ProductsList = ({ products }: { products: ProductPayload[] }) => {
  return (
    <section className="secondary__container pb-20 lg:pb-36">
      <ul className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </section>
  );
};
