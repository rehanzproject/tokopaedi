import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const transactionSlice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      {
        return [...state, action.payload];
      }
    },
    changeStatus: (state, action) => {
    },
    removeTransaction: (state, action) => {
      {
        return (state = initialState);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTransaction, changeStatus, removeTransaction, addJasa } =
  transactionSlice.actions;

export default transactionSlice.reducer;
