import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps } from "@/types";

// Define a type for the slice state
interface CartStateProps {
  cartOpen: boolean;
  items: CartItemProps[];
  totalAmount: number;
  totalItems: number;
}

// Define the initial state using that type
const initialState: CartStateProps = {
  cartOpen: false,
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartOpen = true;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    addItemToCart: (state, action: PayloadAction<CartItemProps>) => {
      const itemAlreadyInCart = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (itemAlreadyInCart) {
        const tempItems = state.items.map((item) =>
          item._id === action.payload._id
            ? { ...item, amount: item.amount + action.payload.amount }
            : item
        );

        return { ...state, items: tempItems };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      let tempItems = [...state.items];
      tempItems = tempItems.filter((item) => item._id !== action.payload.id);

      state.items = tempItems;
    },
    toggleCartItemAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const tempItems = state.items.map((item) =>
        item._id === action.payload.id
          ? { ...item, amount: action.payload.amount }
          : item
      );

      state.items = tempItems;
    },
    calculateTotals: (state) => {
      const { totalItems, totalAmount } = state.items.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;

          total.totalItems += amount;
          total.totalAmount += price * amount;

          return total;
        },
        { totalItems: 0, totalAmount: 0 }
      );

      state.totalAmount = totalAmount;
      state.totalItems = totalItems;
    },
    setCartItems: (state, action: PayloadAction<CartItemProps[]>) => {
      state.items = action.payload;
    },
  },
});

export const {
  openCart,
  closeCart,
  toggleCart,
  toggleCartItemAmount,
  addItemToCart,
  removeItemFromCart,
  calculateTotals,
  setCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
