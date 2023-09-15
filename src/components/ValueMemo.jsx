import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
export const ValueMemo = React.memo(({ value }) => {
  console.log('IN VALUE MEMO');
  return (
      <p>{value}</p>
  );
});

ValueMemo.propTypes = {
  value: PropTypes.number.isRequired,
};
