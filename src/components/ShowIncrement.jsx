import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
export const ShowIncrement = React.memo(({ onIncrement }) => {
  console.log('Increment');
  return (
    <button
      className="btn btn-outline-info btn-sm"
      onClick={() => onIncrement(5)}
    >
      Increment
    </button>
  );
});

ShowIncrement.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};
