import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <span className="badge text-bg-warning">Nick not allowed</span>
      <span className="badge text-bg-warning">An event has been triggered</span>
      <span className="badge text-bg-warning">{JSON.stringify(coords)}</span>
    </>
  );
};
