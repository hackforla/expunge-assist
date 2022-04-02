import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';

import Logo from 'components/Logo';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ palette, breakpoints, spacing }) =>
    createStyles({
      appHeader: {
        height: 60,
        background: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'dark' ? palette.primary.main : palette.primary.lighter,

        padding: spacing(2),
        display: 'flex',

        [breakpoints.down(breakpoints.values.md)]: {
          background: palette.primary.lighter,
        },

        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'none',
        },
      },
    })
);

const AppHeader = () => {
  const { appTheme } = useContext(RoutingContext);
  const classes = useStyles({ pageTheme: appTheme });

  return (
    <div className={classes.appHeader}>
      <Logo />
    </div>
  );
};

export default AppHeader;
