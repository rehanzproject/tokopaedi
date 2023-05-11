import React from "react";
import RootRouter from "./config/router";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
