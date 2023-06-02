import { LinkButton } from "@/components";

export const CartEmpty = ({ closeCart }: { closeCart: () => void }) => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <button
        className="absolute top-0 right-0 pb-[2px] border-b border-b-black"
        onClick={closeCart}
      >
        close
      </button>
      <div className="grid gap-4 justify-items-center">
        <h3 className="uppercase text-xl lg:text-2xl">Your Cart is empty</h3>
        <LinkButton
          link="/shop"
          linkText="Go Shopping"
          variant="primary"
          onClick={closeCart}
        />
      </div>
    </div>
  );
};
