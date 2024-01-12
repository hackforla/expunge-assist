import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      gap: '1.5em',
    },
    circularProgress: {
      color: '#9903FF',
    },
  })
);

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CircularProgress className={classes.circularProgress} size="2rem" />
      <h1>Loading</h1>
    </div>
  );
};

export default Loading;
