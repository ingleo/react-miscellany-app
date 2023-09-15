import { useRef } from 'react';

export const Focus = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h3>Focus</h3>

      <input
        ref={inputRef}
        type="text"
        placeholder="username"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Set focus
      </button>
    </>
  );
};
