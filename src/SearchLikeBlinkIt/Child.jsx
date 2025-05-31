import React from 'react';

const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <h1>{name}</h1>;
});

export default Child;