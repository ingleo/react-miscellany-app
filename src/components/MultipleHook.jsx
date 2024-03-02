import { useFetch, useCounter } from '../hooks';

export const MultipleHook = () => {
  const { counter, increment, decrement } = useCounter(1, 1);
  const url = `https://swapi.dev/api/people/${counter}`;
  const { data, isLoading } = useFetch(url);
  const { name, height, gender } = !!data && data;

  return (
    <>
      <h3 className="text-warning">Multiple Hooks</h3>
      <h4>Querying Star Wars API</h4>
      <h5>Character: #{counter}</h5>

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

      {counter > 1 && (
        <button className="btn btn-outline-info btn-sm" onClick={decrement}>
          Previous
        </button>
      )}

      <button className="btn btn-outline-info btn-sm" onClick={increment}>
        Next
      </button>
    </>
  );
};
