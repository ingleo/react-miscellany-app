import { useFetch, useCounter } from '../hooks';

export const MultipleHook = () => {
  const { counter, increment, decrement } = useCounter(1, 1);

  const url = `https://swapi.dev/api/people/${counter}`;
  const { data, isLoading } = useFetch(url);
  const { name, height, gender } = !!data && data;

  return (
    <>
      <h3>Star wars</h3>
      <h4>Character: #{counter}</h4>
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div>
          <h6>
            Name: <span className="badge bg-success">{name}</span>
          </h6>
          <h6>
            Height: <span className="badge bg-warning">{height}</span>
          </h6>
          <h6>
            Gender: <span className="badge bg-secondary">{gender}</span>
          </h6>
        </div>
      )}
      {counter > 1 ? (
        <button className="btn btn-outline-primary" onClick={decrement}>
          Previous
        </button>
      ) : null}

      <button className="btn btn-outline-primary" onClick={increment}>
        Next
      </button>
    </>
  );
};
