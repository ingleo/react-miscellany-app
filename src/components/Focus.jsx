import { useRef } from 'react';

export const Focus = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h3 className="text-warning">useRef</h3>
      <p>
        References an object that is mutable and persists throughout the
        lifetime of the component.
      </p>
      <h4>Focus</h4>
      <input
        ref={inputRef}
        type="text"
        placeholder="username"
        className="form-control"
      />
      <button
        className="btn btn-outline-info btn-sm mt-2"
        onClick={handleClick}
      >
        Set focus
      </button>
    </>
  );
};
