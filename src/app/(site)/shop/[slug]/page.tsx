import { Metadata } from "next";
import { getSingleProduct } from "../../../../sanity/lib/sanity.client";
import { ProductDetails } from "./(components)";
import { CallToAction, FAQ } from "@/components";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const data = await getSingleProduct(params.slug);

  return {
    title: `${data?.product.name} - Aliv Agency`,
  };
}

export default async function SingleProductPage({ params }: Props) {
  const data = await getSingleProduct(params.slug);

  if (!data) {
    return null;
  }

  const { product, faq } = data;

  return (
    <>
      <ProductDetails details={product} />
      <FAQ />
      <CallToAction />
    </>
  );
}
