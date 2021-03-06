import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./reducer/state";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App name="fucking Counter" />
  </Provider>,
  rootElement
);
