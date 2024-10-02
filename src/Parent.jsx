import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('Child component rendered');
  return <button onClick={onClick}>Click me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  
  // Without useCallback, the increment function would be recreated on every render.
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onClick={increment} />
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
    </div>
  );
}

export default Parent;
