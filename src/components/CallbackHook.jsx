import { useState, useCallback } from 'react';

import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const handleIncrement = useCallback((every) => {
    setCounter((value) => value + every);
  }, []);

  return (
    <>
      <h3 className="text-warning">useCallback</h3>
      <p>
        This memoizes a function and will recompute it when one of the
        dependencies changes.
      </p>
      <h4>Callback counter {counter}</h4>
      <ShowIncrement onIncrement={handleIncrement} />
    </>
  );
};
