import { useEffect, useState } from "react";
import { progressBarData } from "./data";
import "./progressbar.css"


export default function ProgressBar() {
  const [data, setData] = useState(progressBarData);
  const [isStarted, setStarted] = useState(false);
  const [progressBars, setProgressBars] = useState(
    data.map((item) => ({
      id: item.id,
      progress: 0,
      color: item.color,
      target: Number(item.value),
    }))
  ); // Initialize progressBars with 0 progress for each item

  // Function to start or stop progress bars
  function startProgressBars() {
    setStarted((prevStarted) => !prevStarted);
  }

  useEffect(() => {
    if (isStarted) {
      let i = 0;

      // Function to run the progress bar sequentially
      const runProgressBar = () => {
        if (i < data.length) {
          const targetValue = Number(data[i].value);
          // Start updating the progress for the current bar
          const interval = setInterval(() => {
            setProgressBars((prevBars) => {
              // Find the bar that is being updated
              const updatedBars = prevBars.map((bar) => {
                if (bar.id === i + 1 && bar.progress < targetValue) {
                  return { ...bar, progress: bar.progress + 5 }; // Increment progress
                }
                return bar;
              });

              // Stop the interval when the current progress bar completes
              if (updatedBars[i].progress >= targetValue) {
                clearInterval(interval); // Clear interval when the target is reached
                i++; // Move to the next progress bar
                runProgressBar(); // Start the next progress bar
              }

              return updatedBars;
            });
          }, 250); // Update progress every 250ms
        }
      };

      runProgressBar(); // Start the first progress bar

      // Cleanup on component unmount or when the progress bar sequence is stopped
    //   return () => {
    //     clearInterval(timerRef.current); // Cleanup any active intervals if the component unmounts
    //   };
    }
  }, [isStarted, data]);

  return (
    <div className="container">
      <button onClick={startProgressBars}>{isStarted ? "Stop" : "Start"}</button>
      <div className="progressBars">
        {progressBars.map((item) => (
          <div className="progressbar" key={item.id}>
            <div
              className="progressbar-filled1"
              style={{
                width: `${item.progress}%`,
                backgroundColor: item.color,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
