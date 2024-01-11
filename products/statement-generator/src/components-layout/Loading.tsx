import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styles from '../styles/Loading.module.css';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className={styles.wrapper}>
      <CircularProgress size="2rem" style={{ color: '#9903ff' }} />
      <h1>Loading</h1>
    </div>
  );
};

export default Loading;
