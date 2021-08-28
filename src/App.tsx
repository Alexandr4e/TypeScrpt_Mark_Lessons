import * as React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./reducer/actions";
import { CounterState } from "./reducer/state";
import "./styles.css";

type Func = () => void;

interface AppDispatchProps {
  incrementCount: Func;
  decreaseCount: Func;
}

interface AppStateProps {
  count: number;
}

interface AppOwnProps {
  name: string;
}

type AppProps = AppOwnProps & AppStateProps & AppDispatchProps;

const App: React.FC<AppProps> = ({
  count,
  name,
  incrementCount,
  decreaseCount
}) => {
  return (
    <div className="App">
      <h1>{name}</h1>
      <p className="count">{count}</p>
      <button className="delete" onClick={decreaseCount}>
        Убрать
      </button>
      <button className="add" onClick={incrementCount}>
        Добавить
      </button>
    </div>
  );
};
const mapStateToProps = (state: CounterState): AppStateProps => ({
  count: state.count
});

const mapDispatchToProps: AppDispatchProps = {
  incrementCount: increment,
  decreaseCount: decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
