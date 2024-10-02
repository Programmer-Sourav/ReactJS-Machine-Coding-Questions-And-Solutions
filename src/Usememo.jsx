import React, { useState, useMemo } from 'react';

function Usememo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // An expensive computation
  const expensiveCalculation = (num) => {
    console.log('Expensive calculation');
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  // Memoizing the result of the expensive calculation
  const computedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h1>Computed Value: {computedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something" />
    </div>
  );
}

export default Usememo;
