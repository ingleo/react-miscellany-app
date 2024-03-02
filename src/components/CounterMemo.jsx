import { useState } from 'react';

import { useCounter } from '../hooks/useCounter';
import { ValueMemo } from './ValueMemo';

export const CounterMemo = () => {
  const [showMsg, setShowMsg] = useState(true);

  const { counter, increment } = useCounter(100, 2);
  return (
    <>
      <h3 className="text-warning">React.memo</h3>
      <p>
      This is used to avoid re-rendering a specific component if its props do not change.
      </p>
      <h4>Counter with memo func </h4>
      <ValueMemo value={counter} />
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
