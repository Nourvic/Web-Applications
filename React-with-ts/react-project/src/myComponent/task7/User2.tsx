import { useReducer } from "react";

export default function User2() {
  function reducer(state: number, action: string) {
    const newState =
      action === "increment"
        ? state + 1
        : action === "decrement"
          ? state - 1
          : state;

    console.log("new state:", newState);
    return newState;
  }
  // reducer(count, "increment")
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
}
