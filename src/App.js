import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const boxes = useSelector((state) => state.boxes);
  const increment = () => {
    dispatch({ type: "INCREMENT", payload: { number: 3, userName: "bitna" } });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "ALLBACKGROUND", payload: e.target.value })
        }
      />
      {boxes.map((item, index) => {
        return <Box id={index} />;
      })}

      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
}

export default App;
