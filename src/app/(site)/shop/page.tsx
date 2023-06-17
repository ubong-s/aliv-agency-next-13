import { ProductsList, ShopHero } from "./(components)";
import { CallToAction } from "@/components";
import { getProducts } from "../../../sanity/lib/sanity.client";

export const metadata = {
  title: "Shop - Aliv Agency",
};

export default async function Shop() {
  const products = (await getProducts()) || [];

  return (
    <>
      <ShopHero />
      <ProductsList products={products} />
      <CallToAction />
    </>
  );
}
