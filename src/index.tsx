import { render } from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

interface ActionType {
  type: string;
}

const defaultState = { count: 2 };

const reducer = (state = defaultState, action: ActionType) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD":
      console.log("ADD");

      return { ...state, count: ++state.count };

    case "DELETE":
      console.log("DELETE");
      return { ...state, count: --state.count };

    default:
      console.log("state");
      return state;
  }
};

const store = createStore(reducer);

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App name="fucking Counter" />
  </Provider>,
  rootElement
);
