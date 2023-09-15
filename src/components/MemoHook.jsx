import { useMemo, useState } from 'react';

import { useCounter } from '../hooks/useCounter';

const heavyPrints = (iterationNumber = 1000) => {
  for (let i = 0; i <= iterationNumber; i++) {
    console.log(`${i} Printed`);
  }

  return `${iterationNumber} prints done!`;
};

export const MemoHook = () => {
  const [showMsg, setShowMsg] = useState(true);
  const { counter, increment } = useCounter(10, 2);
  const memoizedValue = useMemo(() => heavyPrints(counter), [counter]);
  return (
    <>
      <h2>Memorized value</h2>
      <p>{counter}</p>
      <p>Memoized value: {memoizedValue}</p>
      <button type="button" className="btn btn-info" onClick={increment}>
        Add one
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => setShowMsg(!showMsg)}
      >
        {showMsg ? 'TRUE' : 'FALSE'}
      </button>
    </>
  );
};
