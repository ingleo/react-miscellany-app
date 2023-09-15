import { useState, useCallback } from 'react';

import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementParent = useCallback((every) => {
    setCounter((value) => value + every);
  }, []);

  return (
    <>
      <h2>Callback counter {counter}</h2>
      <ShowIncrement increment={incrementParent} />
    </>
  );
};
