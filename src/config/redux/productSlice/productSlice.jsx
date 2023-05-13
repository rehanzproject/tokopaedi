import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      {
        return [...state, action.payload];
      }
    },
    
    changeQtyPlus: (state, { payload }) => {
      const item = state.find((product) => product.id === payload.id);
      console.log(payload)
      if (item) {
        item.qty += 1;
      } else {
        state.push(payload);
      }
    },
  

  changeQtyMinus: (state, { payload }) => {
    const item = state.find((product) => product.id === payload.id);
    if (item) {
      item.qty -= 1;
    } else {
      state.push(payload);
    }
    },
  
  removeProduct: (state, action) => {
    {
      state.splice(action.payload, 1);
    }
  },

  removeAllProduct: (state, action) => {
    return (state = initialState);
  },
}});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  removeAllProduct,
  removeProduct,
  changeQtyPlus,
  changeQtyMinus,
} = productSlice.actions;

export default productSlice.reducer;
