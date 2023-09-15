import { useState } from 'react';

import { useCounter } from '../hooks/useCounter';
import { ValueMemo } from './ValueMemo';

export const CounterMemo = () => {
  const [showMsg, setShowMsg] = useState(true);

  const { counter, increment } = useCounter(100, 2);
  return (
    <>
      <h2>Counter with memo func </h2>
      <ValueMemo value={counter} />
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
