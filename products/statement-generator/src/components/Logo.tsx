import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';

import iconBlack from 'assets/iconBlack.svg';
import iconWhite from 'assets/iconWhite.svg';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ palette, breakpoints, spacing }) =>
    createStyles({
      logoContainer: {
        display: 'flex',

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
        color: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'dark' ? 'white' : palette.common.black,

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
  const { appTheme } = useContext(RoutingContext);
  const classes = useStyles({ pageTheme: appTheme });

  return (
    <Link to="/" className={classes.logoLink}>
      <span>Expunge</span>
      <span>Assist</span>
    </Link>
  );
}

export default function Logo() {
  const { appTheme } = useContext(RoutingContext);
  const classes = useStyles({ pageTheme: appTheme });

  const logoIcon = appTheme === 'dark' ? iconWhite : iconBlack;

  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <img src={logoIcon} alt="" />
      </Link>

      <TextLogo />
    </div>
  );
}
