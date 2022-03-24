import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';

import iconBlack from 'assets/iconBlack.svg';
import iconWhite from 'assets/iconWhite.svg';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ palette, breakpoints, spacing }) =>
    createStyles({
      root: {
        height: 60,
        background: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'dark' ? palette.primary.main : 'white',

        padding: spacing(2),
        display: 'flex',

        '& a': {
          color: ({ pageTheme }: IUseUtilityStyle) =>
            pageTheme === 'dark' ? 'white' : 'black',
        },

        '& .logo-title': {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: spacing(3),
          textTransform: 'uppercase',
          fontSize: '12px',

          [breakpoints.down(breakpoints.values.sm)]: {
            display: 'none',
          },
        },

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

  const logoIcon = appTheme === 'dark' ? iconWhite : iconBlack;
  const classes = useStyles({ pageTheme: appTheme });

  return (
    <div className={`${classes.root} app-header`}>
      <Link to="/">
        <img src={logoIcon} alt="" />
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
        className="logo-title"
      >
        <span>Expunge</span>
        <span>Assist</span>
      </Link>
    </div>
  );
};

export default AppHeader;
