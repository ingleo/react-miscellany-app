import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
export const ShowIncrement = React.memo(({ increment }) => {
  console.log('INCREMENT');
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Increment
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
