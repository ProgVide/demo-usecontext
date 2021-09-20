import { useContext } from "react";
import "./App.css";
import ValueContext from "./ValueContext";

function Child() {
  let value = useContext(ValueContext);
  return <div>Child number {value}</div>;
}

export default Child;
