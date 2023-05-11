import React from "react";
import RootRouter from "./config/router";
import { PersistGate } from "redux-persist/integration/react";
import { persiststore } from "./config/redux/store";

function App() {
  return (
    <PersistGate loading={null} persistor={persiststore}>
      <RootRouter />
    </PersistGate>
  );
}

export default App;
