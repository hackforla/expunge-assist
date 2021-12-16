import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';
import { STEP_ENUMS } from 'contexts/RoutingProps';

import iconBlack from 'assets/iconBlack.svg';
import iconWhite from 'assets/iconWhite.svg';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ palette, breakpoints }) =>
    createStyles({
      root: {
        background: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'purple' ? palette.primary.main : 'white',

        padding: '18px',
        display: 'flex',

        '& a': {
          color: ({ pageTheme }: IUseUtilityStyle) =>
            pageTheme === 'purple' ? 'white' : 'black',
        },

        '& .logo-title': {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '20px',
          textTransform: 'uppercase',
          fontSize: '12px',

          [breakpoints.down(breakpoints.values.sm)]: {
            display: 'none',
          },
        },

        [breakpoints.down(breakpoints.values.md)]: {
          background: palette.primary.light,
        },

        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'none',
        },
      },
    })
);

const AppHeader = () => {
  const { currentStep } = useContext(RoutingContext);

  const isPurpleTheme =
    currentStep === STEP_ENUMS.NONE ||
    currentStep === STEP_ENUMS.BEFORE_YOU_BEGIN;

  const logoIcon = isPurpleTheme ? iconWhite : iconBlack;

  const classes = useStyles({ pageTheme: isPurpleTheme ? 'purple' : 'light' });

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
