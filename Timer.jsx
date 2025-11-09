import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return '${minutes} :  ${seconds}'; 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{formatTime(time)}</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setTime(0);
          setRunning(false);
          setLaps([]);
        }}
      >
        Reset
      </button>
      <button onClick={() => setLaps([...laps, formatTime(time)])}>Lap</button>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  );
}

export default Timer;
