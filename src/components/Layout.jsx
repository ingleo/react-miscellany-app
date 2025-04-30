import { useLayoutEffect, useRef, useState } from 'react';
import { useFetch, useCounter } from '../hooks';

export const Layout = () => {
  const [boxSixe, setBoxSize] = useState({ width: 0, height: 0 });

  const { counter, increment, decrement } = useCounter(1, 1);

  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data } = useFetch(url);
  const { name } = !!data && data;

  const nameRef = useRef();
  useLayoutEffect(() => {
    const { width, height } = nameRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [name]);

  return (
    <>
      <h3 className="text-warning">useLayoutEffect</h3>
      <p>
        This applies an effect after a component is rendered and DOM mutations
        have been triggered. It is synchronous, for example: adjusting the size
        of a div.
      </p>

      <div style={{ display: 'flex' }}>
        <p ref={nameRef}>
          Name: <span className="badge bg-success">{name}</span>
        </p>
      </div>

      <code className='text-light'>{JSON.stringify(boxSixe)}</code>
      <br />

      {counter > 1 && (
        <button className="btn btn-outline-info btn-sm mt-2" onClick={decrement}>
          Previous
        </button>
      )}

      <button className="btn btn-outline-info btn-sm mt-2" onClick={increment}>
        Next
      </button>
    </>
  );
};
