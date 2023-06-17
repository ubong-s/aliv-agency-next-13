import { CartItemProps } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items: CartItemProps[]) => {
  return items.reduce((total, cartItem) => {
    const { amount, price } = cartItem;

    total += price * amount;

    return total;
  }, 0);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }
}
