import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';
import { STEP_ENUMS } from 'contexts/RoutingProps';

import iconBlack from 'assets/iconBlack.svg';
import iconWhite from 'assets/iconWhite.svg';

interface IStyleProps {
  pageTheme?: string;
}

const useStyles = makeStyles<Theme, IStyleProps>((theme: Theme) =>
  createStyles({
    root: {
      background: ({ pageTheme }: IStyleProps) =>
        pageTheme === 'purple' ? '#9903ff' : 'white',

      padding: '18px',
      display: 'flex',

      '& a': {
        color: ({ pageTheme }: IStyleProps) =>
          pageTheme === 'purple' ? 'white' : 'black',
      },

      '& .logo-title': {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',
        textTransform: 'uppercase',
        fontSize: '12px',

        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
          display: 'none',
        },
      },

      [theme.breakpoints.down(theme.breakpoints.values.md)]: {
        background: '#f7ebff',
      },

      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
    },
  })
);

const Header = () => {
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
        <p>Expunge</p>
        <p>Assist</p>
      </Link>
    </div>
  );
};

export default Header;
