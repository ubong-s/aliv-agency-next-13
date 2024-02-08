"use client";

import { LinkButton } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { CheckoutForm, CheckoutItem } from "./(components)";
import { loadStripe } from "@stripe/stripe-js";
import { AddressElement, Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutPage() {
  const { items: products, totalAmount } = useAppSelector(
    (state) => state.cart
  );
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [...products] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [products]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

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
        <div className="lg:col-span-3">
          {clientSecret && (
            // @ts-ignore
            <Elements options={options} stripe={stripePromise}>
              <h3>Shipping address</h3>
              <AddressElement
                options={{ mode: "shipping", allowedCountries: ["US"] }}

                // Access the address like so:
                // onChange={(event) => {
                //   setAddressState(event.value);
                // }}
              />
              <CheckoutForm />
            </Elements>
          )}
        </div>
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
          <p className="flex justify-between items-center">
            <span>Shipping</span>
            <span className="font-semibold">Free</span>
          </p>
          <hr className="my-4" />
          <p className="flex justify-between items-center">
            <span>Total</span>
            <span className="font-semibold">{totalAmount.toFixed(2)}USD</span>
          </p>
        </div>
      </div>
    </>
  );
}
