import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";

function Box({ id }) {
  const count = useSelector((state) => state.count);
  const allBackground = useSelector((state) => state.allBackground);
  const dispatch = useDispatch();
  const singleColor = useSelector((state) => state.boxes[id]);
  console.log(count);
  return (
    <div>
      <div
        className="container"
        style={{ backgroundColor: singleColor ? singleColor : allBackground }}
      >
        <input
          className="single-color"
          type="text"
          onChange={(e) =>
            dispatch({
              type: "SINGLECOLOR",
              payload: { id: id, color: e.target.value },
            })
          }
        />
      </div>
    </div>
  );
}

export default Box;
