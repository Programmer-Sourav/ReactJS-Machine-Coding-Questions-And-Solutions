import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p>{dateTime.toString()}</p>
    </div>
  );
};

export default DateTimeComponent;
