import React, { useState } from "react";
import Button from "./components/Button";
import "./index.css"



export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };
  let reSet = () => {
    setCount(0)
  }

  return (
    <div className="app">
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
          <Button title={"Reset"} action={reSet} />
        </div>
      </div>
    </div>
  );
}