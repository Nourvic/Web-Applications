import { useReducer } from "react";

export default function User2() {
  function reducer(state: number, action: string) {
    if (action == "increment") {
      return state + 1;
    } else if (action == "decrement") {
      return state - 1;
    }
    return state;
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
