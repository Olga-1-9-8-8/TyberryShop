import { createSlice } from '@reduxjs/toolkit';


export const personalProfileSlice = createSlice({
  name: 'personalProfile',
  initialState: {
    orderValues: [],
  },
  reducers: {
    addToOrder: (state,action) => { 
        state.orderValues.push(action.payload);
    },
  }
})

export const { addToOrder} = personalProfileSlice.actions;

export const selectOrderValue = state => state.order.orderValues;

export default personalProfileSlice.reducer; 






