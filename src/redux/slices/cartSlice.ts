import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps, ProductPayload } from "@/types";

// Define a type for the slice state
interface CartStateProps {
  items: CartItemProps[];
  total: number;
}

// Define the initial state using that type
const initialState: CartStateProps = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemProps>) => {
      const itemAlreadyInCart = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (itemAlreadyInCart) {
        const tempItems = state.items.map((item) =>
          item._id === action.payload._id
            ? { ...item, amount: item.amount + action.payload.amount }
            : item
        );

        state.items = tempItems;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
