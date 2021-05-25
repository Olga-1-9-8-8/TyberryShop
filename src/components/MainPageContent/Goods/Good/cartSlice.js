import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartValues: [],
  },
  reducers: {
    addToCart: (state,action) => { 
      //check if good is in the cart already
      const alreadyInCart = state.cartValues.find((item) =>
      item.id === action.payload.id)
      if(alreadyInCart){
        state.cartValues.map(item => item.id === action.payload.id ? (++item.count) : item);
      }
      if(!alreadyInCart){
        state.cartValues.push(action.payload);  
      }   
    },
    removeToCart: (state,{payload}) =>{ 
      state.cartValues = state.cartValues.filter((cartValue => cartValue.id !== payload.id))
    },

    updateCountInItem :(state,action)=>{
        state.cartValues.forEach(item => item.id === action.payload.id ?
          (item.count = +action.payload.count): item)
    },
    removeAllCarts: (state,action) =>{
      state.cartValues = action.payload;
    },
   
  }
})

export const { addToCart,updateCountInItem,removeToCart,removeAllCarts} = cartSlice.actions;

export const selectCartValue = state => state.cart.cartValues;

export default cartSlice.reducer; 



