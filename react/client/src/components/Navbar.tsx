import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import hackForLALogo from 'assets/hackForLALogo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      background: 'none',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      '& img, span': {
        display: 'none',
        margin: '0 20px',
      },
      [theme.breakpoints.up('md')]: {
        background: 'black',
        height: '50px',
        '& img, span': {
          display: 'block',
        },
      },
      [theme.breakpoints.up('lg')]: {
        '& img, span': {
          margin: '0 45px',
        },
      },
    },
    imageWrapper: {
      [theme.breakpoints.up('md')]: {
        width: '230px',
      },
    },
    linkWrapper: {
      display: 'flex',
      margin: '0 auto',
      justifyContent: 'space-between',
      width: '300px',
      textTransform: 'uppercase',
      '& a': {
        color: 'white',
        fontSize: '0.625rem',
      },
      [theme.breakpoints.up('md')]: {
        '& :nth-child(n+3)': {
          display: 'none',
        },
        width: '260px',
        '& a': {
          fontWeight: '700',
          fontSize: '1rem',
        },
      },
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        bottom: '17px',
      },
    },
  })
);

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageWrapper}>
        <img src={hackForLALogo} alt="Hack for LA Logo" />
      </div>
      <div className={classes.linkWrapper}>
        <li>
          <a href={`${process.env.PUBLIC_URL}/PrivacyPolicy`}>Privacy Policy</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/TermsOfUse`}>Terms Of Use</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/FAQ`}>FAQ</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/AboutUs`}>About Us</a>
        </li>
      </div>
      <span>COPYRIGHT 2020 HACK FOR LA</span>
    </div>
  );
};

export default Navbar;
