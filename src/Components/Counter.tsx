import React, { useState } from 'react';

const Counter: React.FC = () => { //React.FC is a typescript type that indicates that this is a functional component
  const [count, setCount] = useState<number>(0); //specify the type of the state variable as number

  const increment = (): void => { //specify the return type of the function as void
    setCount(count + 1);
  }

  const decrement = (): void => {
    setCount(count - 1);
  }

  return (
    <div style={{border: '2px solid white', padding: 20, margin: 10}}>
      <p>Counter</p>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
