import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  
];
export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      {
        return [...state, action.payload] 
      }
    },
    addCountProduct: (state, action) => {
      {
        return action.payload
      }
    },
    changeQtyPlus: (state, action) => {
      return {}
    },
    changeQtyMinus: (state, action) => {
      return {...state ,qty: action.payload}
    },
    removeProduct: (state, action) => {
      {
        state.splice( action.payload , 1)
      }
    },

    removeAllProduct: (state, action) => {
      return state= initialState
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { addProduct , addCountProduct,removeAllProduct, removeProduct , changeQtyPlus, changeQtyMinus } = productSlice.actions;

export default productSlice.reducer;
