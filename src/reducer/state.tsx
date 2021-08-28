import { createStore } from "redux";
import { ActionType } from "./actions";

export type CounterState = {
  count: number;
};

const defaultState: CounterState = {
  count: 2
};

const reducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: ++state.count };

    case "DELETE":
      return { ...state, count: --state.count };

    default:
      return state;
  }
};

export const store = createStore(reducer);
