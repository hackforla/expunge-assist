import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

import Logo from 'components/Logo';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ palette, globals, breakpoints, spacing }) =>
    createStyles({
      headerWrapper: {
        height: 60,
        background: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'dark' ? palette.primary.main : palette.primary.lighter,

        [breakpoints.down(breakpoints.values.md)]: {
          background: palette.primary.lighter,
        },

        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'none',
        },
      },
      appHeader: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: globals.wideWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: spacing(2, 3),
      },
      rightContainer: {
        marginLeft: 'auto',
        alignSelf: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
      },

      headerLink: {
        textDecoration: 'none',
        color: palette.common.black,
        padding: spacing(1),
        fontSize: '14px',

        '&:hover': {
          color: palette.primary.main,
        },
        '&:active': {
          color: palette.primary.main,
        },

        '&$headerLink + $headerLink': {
          marginLeft: 4,
        },
      },
    })
);

interface IHeaderLink {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function HeaderLink({ to, children, isActive }: IHeaderLink) {
  const classes = useStyles({});

  return (
    <Link
      className={`${classes.headerLink} ${isActive ? 'active' : ''}`}
      to={to}
    >
      {children}
    </Link>
  );
}

const AppHeader = () => {
  const { appTheme } = useContext(RoutingContext);
  const classes = useStyles({ pageTheme: appTheme });

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.appHeader}>
        <Logo />

        <div className={classes.rightContainer}>
          <HeaderLink to={AppUrl.AboutUs}>About</HeaderLink>
          <HeaderLink to={AppUrl.Landing}>Partnership</HeaderLink>
          <HeaderLink to={AppUrl.Landing}>Contact</HeaderLink>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
