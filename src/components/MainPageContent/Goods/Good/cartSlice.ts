/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductItem } from '../../../../interfaces';
import { RootState } from '../../../../redux/rootReducer';

interface IinitialState {
  cartValues: IProductItem[];
}

const initialState: IinitialState = {
  cartValues: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductItem>) => {
      // check if good is in the cart already
      const alreadyInCart = state.cartValues.find(
        (item) => item.id === action.payload.id,
      );
      if (alreadyInCart) {
        state.cartValues.map(
          (item) => (item.id === action.payload.id ? ++item.count : item), // ++item.count -> esLint disallow
        );
      }
      if (!alreadyInCart) {
        state.cartValues.push(action.payload);
        // possible other  -> return [action.payload, ...state]
      }
    },
    removeToCart: (state, { payload }) => {
      state.cartValues = state.cartValues.filter(
        (cartValue) => cartValue.id !== payload.id,
      );
    },

    updateCountInItem: (state, action) => {
      state.cartValues.forEach((item) =>
        item.id === action.payload.id
          ? (item.count = +action.payload.count)
          : item,
      );
    },
    removeAllCarts: (state) => {
      state.cartValues = [];
    },
  },
});

export const { addToCart, updateCountInItem, removeToCart, removeAllCarts } =
  cartSlice.actions;

export const selectCartValue = (state: RootState): IProductItem[] =>
  state.cart.cartValues;

export default cartSlice.reducer;
