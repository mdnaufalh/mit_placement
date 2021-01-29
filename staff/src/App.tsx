import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentChange from "./studentChange/view";
import { Provider } from "react-redux";
import store from "./common/redux/store";

function App() {
  return (
    <Provider store={store}>
      <StudentChange />
    </Provider>
  );
}

export default App;
