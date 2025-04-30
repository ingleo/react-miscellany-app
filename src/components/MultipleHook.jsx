import { useFetch, useCounter } from '../hooks';

export const MultipleHook = () => {
  const { counter, increment, decrement } = useCounter(1, 1);
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data, isLoading, hasError } = useFetch(url);
  const { id, name, types } = !!data && data;

  return (
    <>
      <h3 className="text-warning">Multiple Hooks</h3>
      <h4>Querying Poke API</h4>
      <h5>Pokemon: #{counter}</h5>

      {isLoading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}

      {hasError && !isLoading && (
        <div className="alert alert-warning text-center">
          An error occurred while querying the Pokémon
        </div>
      )}

      {!isLoading && !hasError && (
        <div>
          <h6>
            Id: <span className="badge bg-success">{id}</span>
          </h6>
          <h6>
            Name: <span className="badge bg-warning">{name}</span>
          </h6>
          <h6>
            Types:&nbsp;
            {types.map((type) => (
              <span key={type.slot} className="badge bg-secondary">
                {type.type.name}
              </span>
            ))}
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
