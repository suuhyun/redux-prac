import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { number } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { number } });
  };

  const changeNumber = (e) => {
    setNumber(Number(e.target.value))
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <input value={number} onChange={changeNumber} type="number" />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
