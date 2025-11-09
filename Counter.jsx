import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
