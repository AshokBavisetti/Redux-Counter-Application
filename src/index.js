import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Make sure this line is importing react-redux
import store from "./store";
import Counter from "./Counter";

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
