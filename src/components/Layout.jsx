import { useLayoutEffect, useRef, useState } from 'react';
import { useFetch, useCounter } from '../hooks';

export const Layout = () => {
  const [boxSixe, setBoxSize] = useState({ width: 0, height: 0 });

  const { counter, increment, decrement } = useCounter(1, 1);

  const url = `https://swapi.dev/api/people/${counter}`;
  const { data } = useFetch(url);
  const { name } = !!data && data;

  const nameRef = useRef();
  useLayoutEffect(() => {
    const {width, height} = nameRef.current.getBoundingClientRect();
    setBoxSize({width, height})
  }, [name]);

  return (
    <>
      <h3>Layout effect</h3>

      <div style={{ display: 'flex' }}>
        <p ref={nameRef}>
          Name: <span className="badge bg-success">{name}</span>
        </p>
      </div>

      <code>{JSON.stringify(boxSixe)}</code>
      <br/>

      {counter > 1 ? (
        <button className="btn btn-outline-primary mt-2" onClick={decrement}>
          Previous
        </button>
      ) : null}

      <button className="btn btn-outline-primary mt-2" onClick={increment}>
        Next
      </button>
    </>
  );
};
