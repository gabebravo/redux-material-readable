import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Spinner = () => (
  <div style={{ marginLeft: '2rem' }}>
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default Spinner;