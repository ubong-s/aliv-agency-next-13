import { CartItem } from "./CartItem";
import { LinkButton } from "@/components";
import { CartItemProps } from "@/types";

interface CartWithItemsProps {
  products: CartItemProps[];
  closeCart: () => void;
  totalAmount: number;
}

export const CartWithItems = ({
  products,
  closeCart,
  totalAmount,
}: CartWithItemsProps) => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex items-center justify-between">
        <h3>Cart</h3>
        <button
          className="pb-[2px] border-b border-b-black"
          onClick={closeCart}
        >
          close
        </button>
      </div>

      <div className="cart__list flex-grow pr-4 overflow-y-auto">
        {products.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <h5>Subtotal</h5>
        <button>${totalAmount}.00 USD</button>
      </div>
      <LinkButton
        link="#"
        linkText="Proceed to checkout"
        variant="primary"
        onClick={closeCart}
      />
    </div>
  );
};
