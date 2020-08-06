import React from "react";
import "../App.css";
import { useSelector } from "react-redux";

function BoxColor() {
  const count = useSelector((state) => state.count);
  const allBackground = useSelector((state) => state.allBackground);
  return (
    <div>
      <div className="container">
        <input></input>
      </div>
    </div>
  );
}

export default BoxColor;
