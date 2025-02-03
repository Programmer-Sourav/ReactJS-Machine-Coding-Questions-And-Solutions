import { useEffect, useRef, useState } from "react"

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false); // To track if the stopwatch is running
  const [milliSeconds, setMilliSeconds] = useState(0); // Track milliseconds
  const [seconds, setSeconds] = useState(0); // Track seconds
  const [minutes, setMinutes] = useState(0); // Track minutes

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMilliSeconds((prevMilli) => {
          if (prevMilli >= 990) {
            // If milliseconds reach 1000, increment seconds
            setSeconds((prevSec) => {
              if (prevSec >= 59) {
                // If seconds reach 60, increment minutes
                setMinutes((prevMin) => prevMin + 1);
                return 0; // Reset seconds
              }
              return prevSec + 1;
            });
            return 0; // Reset milliseconds
          }
          return prevMilli + 10; // Increment milliseconds
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [isRunning]);

  // Start the stopwatch
  const startStopwatch = () => setIsRunning(true);

  // Stop the stopwatch
  const stopStopwatch = () => setIsRunning(false);

  // Reset the stopwatch
  const resetStopwatch = () => {
    setIsRunning(false);
    setMilliSeconds(0);
    setSeconds(0);
    setMinutes(0);
  };

  // Format time to always show 2 digits
  const formatTime = (timeUnit) => timeUnit.toString().padStart(2, "0");

  return (
    <div>
      <h1>
        {formatTime(minutes)}:{formatTime(seconds)}.{formatTime(
          Math.floor(milliSeconds / 10)
        )}
      </h1>
      <div>
        {!isRunning ? (
          <button onClick={startStopwatch}>Start Stopwatch</button>
        ) : (
          <button onClick={stopStopwatch}>Stop Stopwatch</button>
        )}
        <button onClick={resetStopwatch}>Reset Stopwatch</button>
      </div>
    </div>
  );
}