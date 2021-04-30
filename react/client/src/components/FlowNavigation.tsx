import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

const useStyles = makeStyles(() =>
  createStyles({
    flowNavigationContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    buttonLeft: {},
    buttonRight: {
      marginLeft: 'auto',
    },
  })
);

interface IFlowNavigation {
  goNextPage: () => void;
  goBackPage: () => void;
}

export default function FlowNavigation({
  goNextPage,
  goBackPage,
}: IFlowNavigation) {
  const classes = useStyles();

  return (
    <div
      className={`flow-navigation-container ${classes.flowNavigationContainer}`}
    >
      <Button
        className={classes.buttonLeft}
        onClick={() => goBackPage()}
        buttonText="BACK"
        theme="transparent"
      />
      <Button
        className={classes.buttonRight}
        onClick={() => goNextPage()}
        buttonText="NEXT"
        hasArrow
      />
    </div>
  );
}
