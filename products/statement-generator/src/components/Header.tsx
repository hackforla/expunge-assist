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
      justifyContent: 'space-evenly',

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
    logoContainer: {
      display: 'flex',
      width: '50%',
      paddingLeft: '18px',
    },
    linkContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '50%',
      paddingRight: '18px',
    },
    link: {
      marginLeft: '15px',
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
    <div className={classes.root}>
      <div className={classes.logoContainer}>
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
      <div className={classes.linkContainer}>
        <Link className={classes.link} to="/">
          Home
        </Link>
        <Link className={classes.link} to="/about">
          About
        </Link>
        <Link className={classes.link} to="faq">
          FAQs
        </Link>
        <Link className={classes.link} to="/contact">
          Contact
        </Link>
        <Link className={classes.link} to="/demo">
          Demo
        </Link>
      </div>
    </div>
  );
};

export default Header;
