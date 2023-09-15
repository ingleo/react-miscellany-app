import { useState } from 'react';

export const useCounter = (initialValue = 10, every = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + every);
  const decrement = () => setCounter(counter - every);
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
