"use client";

import { LinkButton } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { CheckoutItem } from "./(components)";

export default function CheckoutPage() {
  const { items: products, totalAmount } = useAppSelector(
    (state) => state.cart
  );

  if (products.length === 0) {
    return (
      <section className="h-[80vh] flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          <p className="uppercase text-lg">Your cart is empty</p>
          <LinkButton link="/shop" linkText="Go Shopping" variant="primary" />
        </div>
      </section>
    );
  }
  return (
    <>
      <div className="secondary__container my-8 grid gap-8 lg:grid-cols-5 lg:my-16">
        <div className="lg:col-span-3"></div>
        <div className="lg:col-span-2">
          <div>
            {products.map((product) => (
              <CheckoutItem key={product._id} product={product} />
            ))}
          </div>
          <p className="flex justify-between items-center">
            <span>Subtotal</span>
            <span className="font-semibold">{totalAmount.toFixed(2)}USD</span>
          </p>
        </div>
      </div>
    </>
  );
}
