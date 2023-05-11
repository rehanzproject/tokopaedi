import {  configureStore } from '@reduxjs/toolkit'
import {persistReducer , persistStore} from 'redux-persist'
import reducer from './reducer';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
  reducer: persistedReducer,
})
export const persiststore = persistStore(store)

export default store