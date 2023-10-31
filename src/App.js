import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState("");

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <div className="tomato-box">
          <h1 style={{ fontSize: "16px" }}>
            {!counter ? "No Tomatoes Yet" : counter}
          </h1>
        </div>
        <div className="buttons-container">
          <div
            onClick={() => setCounter(counter.slice(0, -2))}
            className="button"
          >
            -
          </div>
          <div onClick={() => setCounter(counter + "🍅")} className="button">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
