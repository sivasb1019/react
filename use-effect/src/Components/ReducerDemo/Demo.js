import { useReducer } from "react";
import "./Demo.css";

function reducer(currentState, action) {
  switch (action) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    default:
      return currentState;
  }
}

function Demo() {
  let [state, updateState] = useReducer(reducer, { count: 0 });
  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick={() => updateState("decrement")}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        className="btn btn-primary"
        onClick={() => updateState("increment")}
      >
        +
      </button>
    </div>
  );
}

export default Demo;
