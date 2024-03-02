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
  const { counter, increment } = useCounter(10, 1);
  const memoizedValue = useMemo(() => heavyPrints(counter), [counter]);
  return (
    <>
      <h3 className="text-warning">useMemo</h3>
      <p>
        This memoizes the returned value from a function and will recompute it
        when one of the dependencies changes.
      </p>
      <h4>Counter: {counter}</h4>
      <p>Memoized value: {memoizedValue}</p>
      <button
        type="button"
        className="btn btn-outline-info btn-sm"
        onClick={increment}
      >
        Add one
      </button>
      <button
        type="button"
        className="btn btn-outline-info btn-sm"
        onClick={() => setShowMsg(!showMsg)}
      >
        {showMsg ? 'True' : 'False'}
      </button>
    </>
  );
};
