import { useCounter } from '../hooks';

export const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(0, 1);
  return (
    <>
      <h3 className='text-warning'>Custom Hook</h3>
      <h4>Counter {counter}</h4>
      <button
        type="button"
        className="btn btn-outline-info btn-sm"
        onClick={decrement}
      >
        Subtract one
      </button>
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
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
};
