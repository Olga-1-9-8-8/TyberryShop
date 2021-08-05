import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder } from '../../../interfaces';
import { RootState } from '../../../redux/rootReducer';

interface IinitialState {
  orderValues: IOrder[];
}

const initialState: IinitialState = {
  orderValues: [],
};

export const personalProfileSlice = createSlice({
  name: 'personalProfile',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<IOrder>) => {
      state.orderValues.push(action.payload);
    },
  },
});

export const { addToOrder } = personalProfileSlice.actions;

export const selectOrderValue = (state: RootState) => state.order.orderValues;

export default personalProfileSlice.reducer;
