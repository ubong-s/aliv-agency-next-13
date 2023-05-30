import { ProductPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const ProductsList = ({ products }: { products: ProductPayload[] }) => {
  return (
    <section className="secondary__container pb-20 lg:pb-36">
      <ul className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
        {products.map(({ _id, name, image, price, slug }) => (
          <li key={_id} className="grid gap-6 items-start justify-items-start">
            <Link href={`/shop/${slug}`}>
              <div className="overflow-hidden mb-4">
                <Image
                  src={image}
                  alt={name}
                  width={440}
                  height={440}
                  className="w-full h-full object-cover hover:scale-110 transition-all"
                />
              </div>

              <div className="flex justify-between items-center gap-8 w-full">
                <h4 className="text-xl">{name}</h4>
                <p className="text-xs ">{`$${price}.00 USD`}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
