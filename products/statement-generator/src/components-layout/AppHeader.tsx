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

        [breakpoints.down(breakpoints.values.md)]: {
          background: palette.primary.lighter,
        },

        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'none',
        },
      },

      logoLink: {
        textDecoration: 'none',
        display: 'flex',
        marginLeft: spacing(2),
        textTransform: 'uppercase',
        fontWeight: 800,

        [breakpoints.up(breakpoints.values.md)]: {
          flexDirection: 'row',
          fontSize: '24px',
          '& span + span': {
            marginLeft: 8,
          },
        },
        [breakpoints.down(breakpoints.values.md)]: {
          flexDirection: 'column',
          fontSize: '12px',
        },
      },
    })
);

function TextLogo() {
  const classes = useStyles({});

  return (
    <Link to="/" className={classes.logoLink}>
      <span>Expunge</span>
      <span>Assist</span>
    </Link>
  );
}

const AppHeader = () => {
  const { appTheme } = useContext(RoutingContext);

  const logoIcon = appTheme === 'dark' ? iconWhite : iconBlack;
  const classes = useStyles({ pageTheme: appTheme });

  return (
    <div className={`${classes.root} app-header`}>
      <Link to="/">
        <img src={logoIcon} alt="" />
      </Link>

      <TextLogo />
    </div>
  );
};

export default AppHeader;
