import React from "react";
import "./App.css";
import Interview from "./interview";
import { Provider } from "react-redux";
import store from "./common/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Interview />
    </Provider>
  );
}

export default App;
