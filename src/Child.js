import { useContext, useReducer } from "react";
import "./App.css";
//import numberReducer from "./numberReducer";
import ValueContext from "./ValueContext";

function Child() {
  let value = useContext(ValueContext);
  // Function in Array.
  let updateValue = value[1];

  return (
    <div>
      Child number {value[0]}
      <button
        onClick={() => {
          updateValue(++value[0]);
        }}
      >
        Update Value
      </button>
    </div>
  );
}

export default Child;
