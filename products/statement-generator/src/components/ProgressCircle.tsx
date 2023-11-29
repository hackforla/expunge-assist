import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ProgressCircle() {
  return (
    <CircularProgress
      style={{
        color: '#9826fb',
        width: '20px',
        height: '20px',
      }}
    />
  );
}
