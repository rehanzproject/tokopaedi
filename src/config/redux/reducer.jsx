import { combineReducers } from "@reduxjs/toolkit";
import productSlice  from "./productSlice/productSlice";
import userSlice from "./userSlice/userSlice";
import transactionSlice from "./transactionSlice/transactionSlice";

const reducer = combineReducers({
    product: productSlice,
    user : userSlice,
    transaction: transactionSlice,
    
})

export default reducer