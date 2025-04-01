import React, { useState, useEffect } from 'react';

const progressBarData = [
  { id: 1, value: "100", title: "Task1", color: "orange", completed: false },
  { id: 2, value: "50", title: "Task2", color: "red", completed: false },
  { id: 3, value: "80", title: "Task3", color: "green", completed: false },
  { id: 4, value: "90", title: "Task4", color: "blue", completed: false },
  { id: 5, value: "100", title: "Task5", color: "pink", completed: false }
];

const ProgressBar = () => {
  const [progressData, setProgressData] = useState(progressBarData);
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current item
  const [progress, setProgress] = useState(0); // To control the current progress bar's progress

  // Function to update progress sequentially
  useEffect(() => {
    if (currentIndex < progressData.length) {
      const targetProgress = parseInt(progressData[currentIndex].value);
      
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < targetProgress) {
            return prevProgress + 1; // Increment progress
          } else {
            clearInterval(interval); // Stop the interval once target is reached
            setProgress(0); // Reset progress for the next task
            setCurrentIndex((prevIndex) => prevIndex + 1); // Move to next item
            return prevProgress;
          }
        });
      }, 10); // Adjust this to control the speed of progress

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [currentIndex, progressData]);

  return (
    <div>
      {progressData.map((task, index) => {
        // Render only the task at currentIndex or completed tasks
        if (index > currentIndex) {
          return null; // Skip rendering tasks that are not completed yet
        }

        const completed = progress === parseInt(task.value);

        return (
          <div key={task.id} style={{ marginBottom: '20px' }}>
            <h3>{task.title}</h3>
            <div style={{ width: '512px', height: '40px', backgroundColor: '#ddd' }}>
              <div
                style={{
                  width: `${(index === currentIndex ? progress : task.value)}%`,
                  height: '100%',
                  backgroundColor: task.color,
                  transition: 'width 0.1s ease-out'
                }}
              />
            </div>
            {completed && <p>Completed</p>}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
