import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    landingBanner: {
      width: '100%',
      padding: spacing(1, 3),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff3403',
      color: palette.common.black,
    },
  })
);

export const Banner: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.landingBanner}>
      Please be aware that this project is still under development with limited
      or incomplete functionality. &nbsp; Check back soon for updates.
    </div>
  );
};
