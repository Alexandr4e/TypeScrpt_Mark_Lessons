import * as React from "react";
import { connect } from "react-redux";
import "./styles.css";

type Func = () => void;

interface AppStateProps {
  incrementCount: Func;
  decreaseCount: Func;
}

interface AppDispatchProps {
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
      <p className="count">{count || 0}</p>
      <button className="delete" onClick={decreaseCount}>
        Убрать
      </button>
      <button className="add" onClick={incrementCount}>
        Добавить
      </button>
    </div>
  );
};
const mapStateToProps = (state: AppDispatchProps) => ({
  count: state.count
});

// const increment = () => ({ type: "ADD" });
// const decrement = () => ({ type: "DELETE" });

const mapDispatchToProps = () => ({
  incrementCount: () => ({ type: "ADD" }),
  decreaseCount: () => ({ type: "DELETE" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
