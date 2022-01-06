import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      padding: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '15px',
      marginTop: '10px',
      backgroundColor: '#ff3403',
      color: '#222',
    },
  })
);

export const Banner: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      Please be aware that this project is still under development with limited
      or incomplete functionality. &nbsp; Check back soon for updates.
    </div>
  );
};
