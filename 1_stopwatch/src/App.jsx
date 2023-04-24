import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("00:00:00");
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId,setIntervalId]=useState(null)

  function start() {
    if(!isRunning)
    {
    let date = new Date();
    setStartTime(date);
    setIsRunning(true);
    }
  }

  useEffect(() => {
    let timerId;
    if (startTime && isRunning) {
      timerId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const seconds = Math.floor(elapsedTime / 1000) % 60;
        const minutes = Math.floor(elapsedTime/ (1000*60))%60;
        const hours = Math.floor(elapsedTime/(1000*60*60))%24;
        const updatedTime = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          setTime(updatedTime);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [startTime, isRunning ,intervalId]);
 function stop() {
   setIsRunning(false);
   setStartTime(null)
 }
  function reset() {
    let resetTime = "00:00:00";
    setIsRunning(false)
    setTime(resetTime);
  }
  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="display">{time}</div>
      <button className="start" onClick={start}>
        Start
      </button>
      <button className="stop" onClick={stop}>Stop</button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
