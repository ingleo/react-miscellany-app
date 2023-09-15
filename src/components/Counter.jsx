import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(10,3);
  return (
    <>
      <h2>Counter {counter}</h2>
      <button type="button" className="btn btn-info" onClick={increment}>
        Add one
      </button>
      <button type="button" className="btn btn-info" onClick={decrement}>
        Substract one
      </button>
      <button type="button" className="btn btn-info" onClick={reset}>
        Reset
      </button>
    </>
  );
};
